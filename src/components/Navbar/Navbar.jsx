import React, { useState, useRef, useEffect, forwardRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.css';

// Atomic subcomponents
export const NavbarBrandAtom = forwardRef(({ 
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

NavbarBrandAtom.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  className: PropTypes.string
};

NavbarBrandAtom.displayName = 'NavbarBrandAtom';

export const NavbarNavAtom = forwardRef(({ 
  children, 
  orientation = 'horizontal',
  className = '', 
  ...props 
}, ref) => {
  const orientationClass = styles[orientation] || '';
  
  return (
    <nav 
      ref={ref}
      className={`${styles.nav} ${orientationClass} ${className}`.trim()}
      role="navigation"
      {...props}
    >
      {children}
    </nav>
  );
});

NavbarNavAtom.propTypes = {
  children: PropTypes.node.isRequired,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  className: PropTypes.string
};

NavbarNavAtom.displayName = 'NavbarNavAtom';

export const NavbarItemAtom = forwardRef(({ 
  children, 
  href,
  active = false,
  disabled = false,
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
      {children}
    </Tag>
  );
});

NavbarItemAtom.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string
};

NavbarItemAtom.displayName = 'NavbarItemAtom';

export const NavbarToggleAtom = forwardRef(({ 
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
      aria-label="Toggle navigation menu"
      type="button"
      {...props}
    >
      {children}
    </button>
  );
});

NavbarToggleAtom.propTypes = {
  children: PropTypes.node,
  expanded: PropTypes.bool,
  className: PropTypes.string
};

NavbarToggleAtom.displayName = 'NavbarToggleAtom';

// Main component
const Navbar = ({ 
  children,
  brand,
  items = [],
  variant = 'default',
  size = 'md',
  fixed = false,
  transparent = false,
  className = '',
  onItemClick,
  ...props 
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef(null);

  // Handle scroll effect for fixed navbar
  useEffect(() => {
    if (!fixed) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [fixed]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navbarRef.current && !navbarRef.current.contains(e.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isMobileMenuOpen]);

  const handleItemClick = (item, index) => {
    if (item.onClick) {
      item.onClick(item, index);
    } else if (onItemClick) {
      onItemClick(item, index);
    }
    setIsMobileMenuOpen(false);
  };

  const handleToggleClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const variantClass = styles[variant] || '';
  const sizeClass = styles[size] || '';
  const fixedClass = fixed ? styles.fixed : '';
  const transparentClass = transparent ? styles.transparent : '';
  const scrolledClass = isScrolled ? styles.scrolled : '';
  const mobileOpenClass = isMobileMenuOpen ? styles.mobileOpen : '';

  return (
    <header 
      ref={navbarRef}
      className={`${styles.navbar} ${variantClass} ${sizeClass} ${fixedClass} ${transparentClass} ${scrolledClass} ${mobileOpenClass} ${className}`.trim()}
      {...props}
    >
      <div className={styles.container}>
        {brand && (
          <NavbarBrandAtom href={brand.href}>
            {brand.icon && <span className={styles.brandIcon}>{brand.icon}</span>}
            {brand.text && <span className={styles.brandText}>{brand.text}</span>}
          </NavbarBrandAtom>
        )}

        <NavbarNavAtom className={styles.desktopNav}>
          {items.map((item, index) => (
            <NavbarItemAtom
              key={item.id || index}
              href={item.href}
              active={item.active}
              disabled={item.disabled}
              onClick={() => handleItemClick(item, index)}
            >
              {item.icon && <span className={styles.itemIcon}>{item.icon}</span>}
              {item.label}
            </NavbarItemAtom>
          ))}
        </NavbarNavAtom>

        <NavbarToggleAtom
          expanded={isMobileMenuOpen}
          onClick={handleToggleClick}
          className={styles.mobileToggle}
        />

        <NavbarNavAtom 
          orientation="vertical" 
          className={styles.mobileNav}
        >
          {items.map((item, index) => (
            <NavbarItemAtom
              key={item.id || index}
              href={item.href}
              active={item.active}
              disabled={item.disabled}
              onClick={() => handleItemClick(item, index)}
            >
              {item.icon && <span className={styles.itemIcon}>{item.icon}</span>}
              {item.label}
            </NavbarItemAtom>
          ))}
        </NavbarNavAtom>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  children: PropTypes.node,
  brand: PropTypes.shape({
    text: PropTypes.string,
    icon: PropTypes.node,
    href: PropTypes.string
  }),
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    icon: PropTypes.node,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
  })),
  variant: PropTypes.oneOf(['default', 'minimal', 'bordered', 'elevated']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  fixed: PropTypes.bool,
  transparent: PropTypes.bool,
  className: PropTypes.string,
  onItemClick: PropTypes.func
};

// Compound component pattern
Navbar.Brand = NavbarBrandAtom;
Navbar.Nav = NavbarNavAtom;
Navbar.Item = NavbarItemAtom;
Navbar.Toggle = NavbarToggleAtom;

export default Navbar;
