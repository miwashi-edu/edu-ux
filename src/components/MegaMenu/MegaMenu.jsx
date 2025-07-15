import React, { useState, useRef, useEffect, forwardRef } from 'react';
import PropTypes from 'prop-types';
import styles from './MegaMenu.module.css';

// Atomic subcomponents
export const MegaMenuTriggerAtom = forwardRef(({ 
  children, 
  className = '', 
  ...props 
}, ref) => {
  return (
    <button 
      ref={ref}
      className={`${styles.trigger} ${className}`.trim()}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
});

MegaMenuTriggerAtom.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

MegaMenuTriggerAtom.displayName = 'MegaMenuTriggerAtom';

export const MegaMenuPanelAtom = forwardRef(({ 
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

MegaMenuPanelAtom.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

MegaMenuPanelAtom.displayName = 'MegaMenuPanelAtom';

export const MegaMenuSectionAtom = forwardRef(({ 
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

MegaMenuSectionAtom.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  className: PropTypes.string
};

MegaMenuSectionAtom.displayName = 'MegaMenuSectionAtom';

export const MegaMenuItemAtom = forwardRef(({ 
  children, 
  href,
  icon,
  description,
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
      <div className={styles.itemContent}>
        <span className={styles.itemLabel}>{children}</span>
        {description && <span className={styles.itemDescription}>{description}</span>}
      </div>
    </Tag>
  );
});

MegaMenuItemAtom.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  icon: PropTypes.node,
  description: PropTypes.string,
  className: PropTypes.string
};

MegaMenuItemAtom.displayName = 'MegaMenuItemAtom';

// Main component
const MegaMenu = ({ 
  children,
  trigger,
  sections = [],
  items = [],
  variant = 'default',
  size = 'md',
  className = '',
  onItemClick,
  ...props 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef(null);
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
      if (triggerRef.current && !triggerRef.current.contains(e.target) &&
          panelRef.current && !panelRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const handleTriggerClick = () => {
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

  return (
    <div 
      className={`${styles.megaMenu} ${variantClass} ${sizeClass} ${className}`.trim()}
      {...props}
    >
      <MegaMenuTriggerAtom
        ref={triggerRef}
        onClick={handleTriggerClick}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {trigger}
      </MegaMenuTriggerAtom>

      {isOpen && (
        <MegaMenuPanelAtom ref={panelRef}>
          {sections.map((section, sectionIndex) => (
            <MegaMenuSectionAtom
              key={section.id || sectionIndex}
              title={section.title}
            >
              {section.items.map((item, itemIndex) => (
                <MegaMenuItemAtom
                  key={item.id || itemIndex}
                  href={item.href}
                  icon={item.icon}
                  description={item.description}
                  onClick={() => handleItemClick(item, itemIndex)}
                >
                  {item.label}
                </MegaMenuItemAtom>
              ))}
            </MegaMenuSectionAtom>
          ))}

          {items.map((item, index) => (
            <MegaMenuItemAtom
              key={item.id || index}
              href={item.href}
              icon={item.icon}
              description={item.description}
              onClick={() => handleItemClick(item, index)}
            >
              {item.label}
            </MegaMenuItemAtom>
          ))}

          {children}
        </MegaMenuPanelAtom>
      )}
    </div>
  );
};

MegaMenu.propTypes = {
  children: PropTypes.node,
  trigger: PropTypes.node.isRequired,
  sections: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
      icon: PropTypes.node,
      description: PropTypes.string,
      onClick: PropTypes.func
    }))
  })),
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    icon: PropTypes.node,
    description: PropTypes.string,
    onClick: PropTypes.func
  })),
  variant: PropTypes.oneOf(['default', 'minimal', 'bordered', 'elevated']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
  onItemClick: PropTypes.func
};

// Compound component pattern
MegaMenu.Trigger = MegaMenuTriggerAtom;
MegaMenu.Panel = MegaMenuPanelAtom;
MegaMenu.Section = MegaMenuSectionAtom;
MegaMenu.Item = MegaMenuItemAtom;

export default MegaMenu;
