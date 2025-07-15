import React, { useState, useRef, useEffect, forwardRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Sidebar.module.css';

// Atomic subcomponents
export const SidebarHeaderAtom = forwardRef(({ 
  children, 
  className = '', 
  ...props 
}, ref) => {
  return (
    <div 
      ref={ref}
      className={`${styles.header} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

SidebarHeaderAtom.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

SidebarHeaderAtom.displayName = 'SidebarHeaderAtom';

export const SidebarNavAtom = forwardRef(({ 
  children, 
  className = '', 
  ...props 
}, ref) => {
  return (
    <nav 
      ref={ref}
      className={`${styles.nav} ${className}`.trim()}
      role="navigation"
      {...props}
    >
      {children}
    </nav>
  );
});

SidebarNavAtom.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

SidebarNavAtom.displayName = 'SidebarNavAtom';

export const SidebarItemAtom = forwardRef(({ 
  children, 
  href,
  active = false,
  disabled = false,
  icon,
  className = '', 
  ...props 
}, ref) => {
  const Tag = href ? 'a' : 'div';
  const activeClass = active ? styles.active : '';
  const disabledClass = disabled ? styles.disabled : '';
  
  return (
    <Tag
      ref={ref}
      href={href}
      className={`${styles.item} ${activeClass} ${disabledClass} ${className}`.trim()}
      aria-current={active ? 'page' : undefined}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      {...props}
    >
      {icon && <span className={styles.itemIcon}>{icon}</span>}
      <span className={styles.itemLabel}>{children}</span>
    </Tag>
  );
});

SidebarItemAtom.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  className: PropTypes.string
};

SidebarItemAtom.displayName = 'SidebarItemAtom';

export const SidebarSectionAtom = forwardRef(({ 
  children, 
  title,
  className = '', 
  ...props 
}, ref) => {
  return (
    <div 
      ref={ref}
      className={`${styles.section} ${className}`.trim()}
      {...props}
    >
      {title && <h3 className={styles.sectionTitle}>{title}</h3>}
      {children}
    </div>
  );
});

SidebarSectionAtom.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  className: PropTypes.string
};

SidebarSectionAtom.displayName = 'SidebarSectionAtom';

export const SidebarToggleAtom = forwardRef(({ 
  children = '☰',
  expanded = false,
  className = '', 
  ...props 
}, ref) => {
  return (
    <button
      ref={ref}
      className={`${styles.toggle} ${expanded ? styles.expanded : ''} ${className}`.trim()}
      aria-expanded={expanded}
      aria-label="Toggle sidebar"
      type="button"
      {...props}
    >
      {children}
    </button>
  );
});

SidebarToggleAtom.propTypes = {
  children: PropTypes.node,
  expanded: PropTypes.bool,
  className: PropTypes.string
};

SidebarToggleAtom.displayName = 'SidebarToggleAtom';

// Main component
const Sidebar = ({ 
  children,
  items = [],
  sections = [],
  variant = 'default',
  size = 'md',
  position = 'left',
  collapsed = false,
  collapsible = false,
  overlay = false,
  className = '',
  onItemClick,
  onToggle,
  ...props 
}) => {
  const [isCollapsed, setIsCollapsed] = useState(collapsed);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Close mobile sidebar on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMobileOpen) {
        setIsMobileOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileOpen]);

  // Close mobile sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsMobileOpen(false);
      }
    };

    if (isMobileOpen && overlay) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isMobileOpen, overlay]);

  const handleItemClick = (item, index) => {
    if (item.onClick) {
      item.onClick(item, index);
    } else if (onItemClick) {
      onItemClick(item, index);
    }
    setIsMobileOpen(false);
  };

  const handleToggleClick = () => {
    const newCollapsed = !isCollapsed;
    setIsCollapsed(newCollapsed);
    onToggle?.(newCollapsed);
  };

  const handleMobileToggle = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const variantClass = styles[variant] || '';
  const sizeClass = styles[size] || '';
  const positionClass = styles[position] || '';
  const collapsedClass = isCollapsed ? styles.collapsed : '';
  const mobileOpenClass = isMobileOpen ? styles.mobileOpen : '';
  const overlayClass = overlay ? styles.overlay : '';

  return (
    <>
      {overlay && isMobileOpen && (
        <div 
          className={styles.overlay}
          onClick={() => setIsMobileOpen(false)}
          aria-hidden="true"
        />
      )}
      
      <aside 
        ref={sidebarRef}
        className={`${styles.sidebar} ${variantClass} ${sizeClass} ${positionClass} ${collapsedClass} ${mobileOpenClass} ${overlayClass} ${className}`.trim()}
        {...props}
      >
        <div className={styles.container}>
          {collapsible && (
            <SidebarToggleAtom
              expanded={!isCollapsed}
              onClick={handleToggleClick}
              className={styles.desktopToggle}
            />
          )}

          <SidebarToggleAtom
            expanded={isMobileOpen}
            onClick={handleMobileToggle}
            className={styles.mobileToggle}
          />

          <SidebarHeaderAtom>
            {children}
          </SidebarHeaderAtom>

          <SidebarNavAtom>
            {sections.map((section, sectionIndex) => (
              <SidebarSectionAtom
                key={section.id || sectionIndex}
                title={section.title}
              >
                {section.items.map((item, itemIndex) => (
                  <SidebarItemAtom
                    key={item.id || itemIndex}
                    href={item.href}
                    active={item.active}
                    disabled={item.disabled}
                    icon={item.icon}
                    onClick={() => handleItemClick(item, itemIndex)}
                  >
                    {item.label}
                  </SidebarItemAtom>
                ))}
              </SidebarSectionAtom>
            ))}

            {items.map((item, index) => (
              <SidebarItemAtom
                key={item.id || index}
                href={item.href}
                active={item.active}
                disabled={item.disabled}
                icon={item.icon}
                onClick={() => handleItemClick(item, index)}
              >
                {item.label}
              </SidebarItemAtom>
            ))}
          </SidebarNavAtom>
        </div>
      </aside>
    </>
  );
};

Sidebar.propTypes = {
  children: PropTypes.node,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    icon: PropTypes.node,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
  })),
  sections: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
      icon: PropTypes.node,
      active: PropTypes.bool,
      disabled: PropTypes.bool,
      onClick: PropTypes.func
    }))
  })),
  variant: PropTypes.oneOf(['default', 'minimal', 'bordered', 'elevated']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  position: PropTypes.oneOf(['left', 'right']),
  collapsed: PropTypes.bool,
  collapsible: PropTypes.bool,
  overlay: PropTypes.bool,
  className: PropTypes.string,
  onItemClick: PropTypes.func,
  onToggle: PropTypes.func
};

// Compound component pattern
Sidebar.Header = SidebarHeaderAtom;
Sidebar.Nav = SidebarNavAtom;
Sidebar.Item = SidebarItemAtom;
Sidebar.Section = SidebarSectionAtom;
Sidebar.Toggle = SidebarToggleAtom;

export default Sidebar;
