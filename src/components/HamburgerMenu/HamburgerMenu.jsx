import React, { useState, useRef, useEffect, forwardRef } from 'react';
import PropTypes from 'prop-types';
import styles from './HamburgerMenu.module.css';

// Atomic subcomponents
export const HamburgerMenuButtonAtom = forwardRef(({ 
  children = '☰',
  expanded = false,
  className = '', 
  ...props 
}, ref) => {
  return (
    <button
      ref={ref}
      className={`${styles.button} ${expanded ? styles.expanded : ''} ${className}`.trim()}
      aria-expanded={expanded}
      aria-label="Toggle menu"
      type="button"
      {...props}
    >
      <span className={styles.icon}>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </span>
      {children}
    </button>
  );
});

HamburgerMenuButtonAtom.propTypes = {
  children: PropTypes.node,
  expanded: PropTypes.bool,
  className: PropTypes.string
};

HamburgerMenuButtonAtom.displayName = 'HamburgerMenuButtonAtom';

export const HamburgerMenuPanelAtom = forwardRef(({ 
  children, 
  className = '', 
  ...props 
}, ref) => {
  return (
    <div 
      ref={ref}
      className={`${styles.panel} ${className}`.trim()}
      role="menu"
      {...props}
    >
      {children}
    </div>
  );
});

HamburgerMenuPanelAtom.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

HamburgerMenuPanelAtom.displayName = 'HamburgerMenuPanelAtom';

export const HamburgerMenuItemAtom = forwardRef(({ 
  children, 
  href,
  icon,
  className = '', 
  ...props 
}, ref) => {
  const Tag = href ? 'a' : 'div';
  
  return (
    <Tag
      ref={ref}
      href={href}
      className={`${styles.item} ${className}`.trim()}
      role="menuitem"
      {...props}
    >
      {icon && <span className={styles.itemIcon}>{icon}</span>}
      <span className={styles.itemLabel}>{children}</span>
    </Tag>
  );
});

HamburgerMenuItemAtom.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  icon: PropTypes.node,
  className: PropTypes.string
};

HamburgerMenuItemAtom.displayName = 'HamburgerMenuItemAtom';

// Main component
const HamburgerMenu = ({ 
  children,
  items = [],
  variant = 'default',
  size = 'md',
  position = 'left',
  overlay = true,
  className = '',
  onItemClick,
  ...props 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const panelRef = useRef(null);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (buttonRef.current && !buttonRef.current.contains(e.target) &&
          panelRef.current && !panelRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen && overlay) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, overlay]);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item, index) => {
    if (item.onClick) {
      item.onClick(item, index);
    } else if (onItemClick) {
      onItemClick(item, index);
    }
    setIsOpen(false);
  };

  const variantClass = styles[variant] || '';
  const sizeClass = styles[size] || '';
  const positionClass = styles[position] || '';

  return (
    <>
      {overlay && isOpen && (
        <div 
          className={styles.overlay}
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
      
      <div 
        className={`${styles.hamburgerMenu} ${variantClass} ${sizeClass} ${positionClass} ${className}`.trim()}
        {...props}
      >
        <HamburgerMenuButtonAtom
          ref={buttonRef}
          expanded={isOpen}
          onClick={handleButtonClick}
        />

        {isOpen && (
          <HamburgerMenuPanelAtom ref={panelRef}>
            {items.map((item, index) => (
              <HamburgerMenuItemAtom
                key={item.id || index}
                href={item.href}
                icon={item.icon}
                onClick={() => handleItemClick(item, index)}
              >
                {item.label}
              </HamburgerMenuItemAtom>
            ))}
            {children}
          </HamburgerMenuPanelAtom>
        )}
      </div>
    </>
  );
};

HamburgerMenu.propTypes = {
  children: PropTypes.node,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    icon: PropTypes.node,
    onClick: PropTypes.func
  })),
  variant: PropTypes.oneOf(['default', 'minimal', 'bordered', 'elevated']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  position: PropTypes.oneOf(['left', 'right']),
  overlay: PropTypes.bool,
  className: PropTypes.string,
  onItemClick: PropTypes.func
};

// Compound component pattern
HamburgerMenu.Button = HamburgerMenuButtonAtom;
HamburgerMenu.Panel = HamburgerMenuPanelAtom;
HamburgerMenu.Item = HamburgerMenuItemAtom;

export default HamburgerMenu;
