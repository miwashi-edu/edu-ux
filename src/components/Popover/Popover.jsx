import React, { useRef, useEffect, useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Popover.module.css';

// Atomic subcomponents
export const PopoverTriggerAtom = forwardRef(({ 
  children, 
  className = '', 
  ...props 
}, ref) => {
  return (
    <div 
      ref={ref}
      className={`${styles.trigger} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

PopoverTriggerAtom.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

PopoverTriggerAtom.displayName = 'PopoverTriggerAtom';

export const PopoverContentAtom = forwardRef(({ 
  children, 
  position = 'bottom',
  className = '', 
  ...props 
}, ref) => {
  const positionClass = styles[position] || '';
  
  return (
    <div 
      ref={ref}
      className={`${styles.content} ${positionClass} ${className}`.trim()}
      role="tooltip"
      {...props}
    >
      {children}
    </div>
  );
});

PopoverContentAtom.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right']),
  className: PropTypes.string
};

PopoverContentAtom.displayName = 'PopoverContentAtom';

// Main component
const Popover = ({ 
  trigger,
  content,
  position = 'bottom',
  triggerType = 'click',
  open = false,
  onOpenChange,
  disabled = false,
  className = '',
  ...props 
}) => {
  const [isOpen, setIsOpen] = useState(open);
  const triggerRef = useRef(null);
  const contentRef = useRef(null);

  // Update internal state when open prop changes
  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  // Close on click outside
  useEffect(() => {
    if (!isOpen) return;
    
    const handleClickOutside = (e) => {
      if (triggerRef.current && !triggerRef.current.contains(e.target) &&
          contentRef.current && !contentRef.current.contains(e.target)) {
        handleClose();
      }
    };

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleToggle = () => {
    if (disabled) return;
    const newOpen = !isOpen;
    setIsOpen(newOpen);
    onOpenChange?.(newOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
    onOpenChange?.(false);
  };

  const handleTriggerEvent = () => {
    if (triggerType === 'click') {
      handleToggle();
    }
  };

  const handleMouseEnter = () => {
    if (triggerType === 'hover' && !disabled) {
      setIsOpen(true);
      onOpenChange?.(true);
    }
  };

  const handleMouseLeave = () => {
    if (triggerType === 'hover' && !disabled) {
      setIsOpen(false);
      onOpenChange?.(false);
    }
  };

  return (
    <div 
      className={`${styles.popover} ${className}`.trim()}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <PopoverTriggerAtom
        ref={triggerRef}
        onClick={handleTriggerEvent}
        tabIndex={disabled ? -1 : 0}
        role="button"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {trigger}
      </PopoverTriggerAtom>
      
      {isOpen && (
        <PopoverContentAtom
          ref={contentRef}
          position={position}
        >
          {content}
        </PopoverContentAtom>
      )}
    </div>
  );
};

Popover.propTypes = {
  trigger: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right']),
  triggerType: PropTypes.oneOf(['click', 'hover']),
  open: PropTypes.bool,
  onOpenChange: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string
};

export default Popover;
