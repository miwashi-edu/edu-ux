import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

// Atomic subcomponents
export const HeaderBrandAtom = forwardRef(({ 
  children, 
  href = '/',
  className = '', 
  ...props 
}, ref) => {
  const Tag = href ? 'a' : 'div';
  
  return (
    <Tag 
      ref={ref}
      href={href}
      className={`${styles.brand} ${className}`.trim()}
      {...props}
    >
      {children}
    </Tag>
  );
});

HeaderBrandAtom.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  className: PropTypes.string
};

HeaderBrandAtom.displayName = 'HeaderBrandAtom';

export const HeaderContentAtom = forwardRef(({ 
  children, 
  className = '', 
  ...props 
}, ref) => {
  return (
    <div 
      ref={ref}
      className={`${styles.content} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

HeaderContentAtom.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

HeaderContentAtom.displayName = 'HeaderContentAtom';

export const HeaderActionsAtom = forwardRef(({ 
  children, 
  className = '', 
  ...props 
}, ref) => {
  return (
    <div 
      ref={ref}
      className={`${styles.actions} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

HeaderActionsAtom.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

HeaderActionsAtom.displayName = 'HeaderActionsAtom';

// Main component
const Header = ({ 
  children,
  brand,
  content,
  actions,
  variant = 'default',
  size = 'md',
  fixed = false,
  transparent = false,
  className = '',
  ...props 
}) => {
  const variantClass = styles[variant] || '';
  const sizeClass = styles[size] || '';
  const fixedClass = fixed ? styles.fixed : '';
  const transparentClass = transparent ? styles.transparent : '';

  return (
    <header 
      className={`${styles.header} ${variantClass} ${sizeClass} ${fixedClass} ${transparentClass} ${className}`.trim()}
      {...props}
    >
      <div className={styles.container}>
        {brand && (
          <HeaderBrandAtom href={brand.href}>
            {brand.icon && <span className={styles.brandIcon}>{brand.icon}</span>}
            {brand.text && <span className={styles.brandText}>{brand.text}</span>}
          </HeaderBrandAtom>
        )}

        {content && (
          <HeaderContentAtom>
            {content}
          </HeaderContentAtom>
        )}

        {actions && (
          <HeaderActionsAtom>
            {actions}
          </HeaderActionsAtom>
        )}

        {children}
      </div>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node,
  brand: PropTypes.shape({
    text: PropTypes.string,
    icon: PropTypes.node,
    href: PropTypes.string
  }),
  content: PropTypes.node,
  actions: PropTypes.node,
  variant: PropTypes.oneOf(['default', 'minimal', 'bordered', 'elevated']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  fixed: PropTypes.bool,
  transparent: PropTypes.bool,
  className: PropTypes.string
};

// Compound component pattern
Header.Brand = HeaderBrandAtom;
Header.Content = HeaderContentAtom;
Header.Actions = HeaderActionsAtom;

export default Header;
