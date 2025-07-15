import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Breadcrumbs.module.css';

// Atomic subcomponents
export const BreadcrumbItemAtom = forwardRef(({ 
  children, 
  href,
  active = false,
  icon,
  className = '', 
  ...props 
}, ref) => {
  const Tag = href ? 'a' : 'span';
  
  return (
    <li className={`${styles.item} ${className}`.trim()}>
      <Tag
        ref={ref}
        href={href}
        className={`${styles.link} ${active ? styles.active : ''}`.trim()}
        aria-current={active ? 'page' : undefined}
        {...props}
      >
        {icon && <span className={styles.icon} aria-hidden="true">{icon}</span>}
        {children}
      </Tag>
    </li>
  );
});

BreadcrumbItemAtom.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  active: PropTypes.bool,
  icon: PropTypes.string,
  className: PropTypes.string
};

BreadcrumbItemAtom.displayName = 'BreadcrumbItemAtom';

export const BreadcrumbSeparatorAtom = forwardRef(({ 
  separator = '/',
  className = '', 
  ...props 
}, ref) => {
  return (
    <span 
      ref={ref}
      className={`${styles.separator} ${className}`.trim()}
      aria-hidden="true"
      {...props}
    >
      {separator}
    </span>
  );
});

BreadcrumbSeparatorAtom.propTypes = {
  separator: PropTypes.string,
  className: PropTypes.string
};

BreadcrumbSeparatorAtom.displayName = 'BreadcrumbSeparatorAtom';

// Main component
const Breadcrumbs = ({ 
  items = [],
  variant = 'default',
  size = 'md',
  separator = '/',
  maxItems = 5,
  showHome = true,
  homeLabel = 'Home',
  homeIcon = '🏠',
  className = '',
  onItemClick,
  ...props 
}) => {
  const variantClass = styles[variant] || '';
  const sizeClass = styles[size] || '';

  const handleItemClick = (item, index) => {
    if (onItemClick) {
      onItemClick(item, index);
    }
  };

  const renderBreadcrumbItem = (item, index, isLast = false) => {
    return (
      <BreadcrumbItemAtom
        key={item.id || index}
        href={item.href}
        active={isLast}
        icon={item.icon}
        onClick={item.href || onItemClick ? () => handleItemClick(item, index) : undefined}
      >
        {item.label}
      </BreadcrumbItemAtom>
    );
  };

  const processItems = () => {
    let processedItems = [...items];
    
    // Add home item if requested
    if (showHome) {
      processedItems.unshift({
        id: 'home',
        label: homeLabel,
        icon: homeIcon,
        href: '/'
      });
    }

    // Handle max items with ellipsis
    if (processedItems.length > maxItems) {
      const start = processedItems.slice(0, 2);
      const end = processedItems.slice(-2);
      
      return [
        ...start,
        { id: 'ellipsis', label: '...', isEllipsis: true },
        ...end
      ];
    }

    return processedItems;
  };

  const finalItems = processItems();

  return (
    <nav 
      className={`${styles.breadcrumbs} ${variantClass} ${sizeClass} ${className}`.trim()}
      aria-label="Breadcrumb navigation"
      {...props}
    >
      <ol className={styles.list}>
        {finalItems.map((item, index) => {
          const isLast = index === finalItems.length - 1;
          
          if (item.isEllipsis) {
            return (
              <li key={item.id} className={styles.item}>
                <span className={styles.ellipsis} aria-hidden="true">
                  {item.label}
                </span>
                {!isLast && <BreadcrumbSeparatorAtom separator={separator} />}
              </li>
            );
          }
          
          return (
            <React.Fragment key={item.id || index}>
              {renderBreadcrumbItem(item, index, isLast)}
              {!isLast && <BreadcrumbSeparatorAtom separator={separator} />}
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

Breadcrumbs.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    icon: PropTypes.string,
    active: PropTypes.bool
  })),
  variant: PropTypes.oneOf(['default', 'minimal', 'bordered', 'elevated']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  separator: PropTypes.string,
  maxItems: PropTypes.number,
  showHome: PropTypes.bool,
  homeLabel: PropTypes.string,
  homeIcon: PropTypes.string,
  className: PropTypes.string,
  onItemClick: PropTypes.func
};

// Compound component pattern
Breadcrumbs.Item = BreadcrumbItemAtom;
Breadcrumbs.Separator = BreadcrumbSeparatorAtom;

export default Breadcrumbs;
