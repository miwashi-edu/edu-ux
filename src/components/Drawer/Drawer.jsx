import React, { useState, useRef, useEffect, forwardRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Drawer.module.css';

// Atomic subcomponents
export const DrawerTriggerAtom = forwardRef(({ 
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

DrawerTriggerAtom.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

DrawerTriggerAtom.displayName = 'DrawerTriggerAtom';

export const DrawerContentAtom = forwardRef(({ 
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

DrawerContentAtom.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

DrawerContentAtom.displayName = 'DrawerContentAtom';

export const DrawerHeaderAtom = forwardRef(({ 
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

DrawerHeaderAtom.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

DrawerHeaderAtom.displayName = 'DrawerHeaderAtom';

export const DrawerBodyAtom = forwardRef(({ 
  children, 
  className = '', 
  ...props 
}, ref) => {
  return (
    <div 
      ref={ref}
      className={`${styles.body} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

DrawerBodyAtom.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

DrawerBodyAtom.displayName = 'DrawerBodyAtom';

export const DrawerFooterAtom = forwardRef(({ 
  children, 
  className = '', 
  ...props 
}, ref) => {
  return (
    <div 
      ref={ref}
      className={`${styles.footer} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

DrawerFooterAtom.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

DrawerFooterAtom.displayName = 'DrawerFooterAtom';

export const DrawerCloseAtom = forwardRef(({ 
  children = '✕',
  className = '', 
  ...props 
}, ref) => {
  return (
    <button
      ref={ref}
      className={`${styles.close} ${className}`.trim()}
      type="button"
      aria-label="Close drawer"
      {...props}
    >
      {children}
    </button>
  );
});

DrawerCloseAtom.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

DrawerCloseAtom.displayName = 'DrawerCloseAtom';

// Main component
const Drawer = ({ 
  children,
  trigger,
  isOpen = false,
  onClose,
  open = false,
  onOpenChange,
  position = 'left',
  size = 'md',
  variant = 'default',
  overlay = true,
  className = '',
  ...props 
}) => {
  // Support both old and new API
  const controlledOpen = isOpen !== false ? isOpen : open;
  const controlledOnChange = onClose || onOpenChange;
  
  const [internalOpen, setInternalOpen] = useState(controlledOpen);
  const triggerRef = useRef(null);
  const drawerRef = useRef(null);

  // Sync with controlled state
  useEffect(() => {
    setInternalOpen(controlledOpen);
  }, [controlledOpen]);

  // Close drawer on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && internalOpen) {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [internalOpen]);

  // Close drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (triggerRef.current && !triggerRef.current.contains(e.target) &&
          drawerRef.current && !drawerRef.current.contains(e.target)) {
        handleClose();
      }
    };

    if (internalOpen && overlay) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [internalOpen, overlay]);

  const handleOpen = () => {
    setInternalOpen(true);
    controlledOnChange?.(true);
  };

  const handleClose = () => {
    setInternalOpen(false);
    controlledOnChange?.(false);
  };

  const positionClass = styles[position] || '';
  const sizeClass = styles[size] || '';
  const variantClass = styles[variant] || '';

  return (
    <>
      {overlay && internalOpen && (
        <div 
          className={styles.overlay}
          onClick={handleClose}
          aria-hidden="true"
        />
      )}
      
      <div className={styles.drawerContainer}>
        {trigger && (
          <DrawerTriggerAtom
            ref={triggerRef}
            onClick={handleOpen}
            className={styles.trigger}
          >
            {trigger}
          </DrawerTriggerAtom>
        )}

        <div 
          ref={drawerRef}
          className={`${styles.drawer} ${positionClass} ${sizeClass} ${variantClass} ${internalOpen ? styles.open : ''} ${className}`.trim()}
          {...props}
        >
          {children}
        </div>
      </div>
    </>
  );
};

Drawer.propTypes = {
  children: PropTypes.node,
  trigger: PropTypes.node,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  onOpenChange: PropTypes.func,
  position: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  variant: PropTypes.oneOf(['default', 'minimal', 'bordered', 'elevated']),
  overlay: PropTypes.bool,
  className: PropTypes.string
};

// Compound component pattern
Drawer.Trigger = DrawerTriggerAtom;
Drawer.Content = DrawerContentAtom;
Drawer.Header = DrawerHeaderAtom;
Drawer.Body = DrawerBodyAtom;
Drawer.Footer = DrawerFooterAtom;
Drawer.Close = DrawerCloseAtom;

export default Drawer;
