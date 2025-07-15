import React, { useState, useRef, useEffect, forwardRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Tooltip.module.css';

// Atomic subcomponents
export const TooltipTriggerAtom = forwardRef(({ 
  children, 
  className = '', 
  ...props 
}, ref) => {
  return (
    <span 
      ref={ref}
      className={`${styles.trigger} ${className}`.trim()}
      {...props}
    >
      {children}
    </span>
  );
});

TooltipTriggerAtom.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

TooltipTriggerAtom.displayName = 'TooltipTriggerAtom';

export const TooltipContentAtom = forwardRef(({ 
  children, 
  position = 'top',
  variant = 'default',
  size = 'md',
  className = '', 
  ...props 
}, ref) => {
  const positionClass = styles[position] || '';
  const variantClass = styles[variant] || '';
  const sizeClass = styles[size] || '';
  
  return (
    <div
      ref={ref}
      className={`${styles.content} ${positionClass} ${variantClass} ${sizeClass} ${className}`.trim()}
      role="tooltip"
      {...props}
    >
      {children}
      <div className={styles.arrow} />
    </div>
  );
});

TooltipContentAtom.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right']),
  variant: PropTypes.oneOf(['default', 'info', 'success', 'warning', 'error']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string
};

TooltipContentAtom.displayName = 'TooltipContentAtom';

// Main component
const Tooltip = ({ 
  children,
  content,
  position = 'top',
  variant = 'default',
  size = 'md',
  delay = 200,
  disabled = false,
  className = '',
  ...props 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const triggerRef = useRef(null);
  const contentRef = useRef(null);
  const timeoutRef = useRef(null);

  const showTooltip = () => {
    if (disabled) return;
    
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
      updatePosition();
    }, delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsVisible(false);
  };

  const updatePosition = () => {
    if (!triggerRef.current || !contentRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const contentRect = contentRef.current.getBoundingClientRect();
    const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    let x = 0;
    let y = 0;

    switch (position) {
      case 'top':
        x = triggerRect.left + (triggerRect.width / 2) - (contentRect.width / 2) + scrollX;
        y = triggerRect.top - contentRect.height - 8 + scrollY;
        break;
      case 'bottom':
        x = triggerRect.left + (triggerRect.width / 2) - (contentRect.width / 2) + scrollX;
        y = triggerRect.bottom + 8 + scrollY;
        break;
      case 'left':
        x = triggerRect.left - contentRect.width - 8 + scrollX;
        y = triggerRect.top + (triggerRect.height / 2) - (contentRect.height / 2) + scrollY;
        break;
      case 'right':
        x = triggerRect.right + 8 + scrollX;
        y = triggerRect.top + (triggerRect.height / 2) - (contentRect.height / 2) + scrollY;
        break;
      case 'top-left':
        x = triggerRect.left + scrollX;
        y = triggerRect.top - contentRect.height - 8 + scrollY;
        break;
      case 'top-right':
        x = triggerRect.right - contentRect.width + scrollX;
        y = triggerRect.top - contentRect.height - 8 + scrollY;
        break;
      case 'bottom-left':
        x = triggerRect.left + scrollX;
        y = triggerRect.bottom + 8 + scrollY;
        break;
      case 'bottom-right':
        x = triggerRect.right - contentRect.width + scrollX;
        y = triggerRect.bottom + 8 + scrollY;
        break;
      default:
        break;
    }

    // Ensure tooltip stays within viewport
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    if (x < 8) x = 8;
    if (x + contentRect.width > viewportWidth - 8) {
      x = viewportWidth - contentRect.width - 8;
    }
    if (y < 8) y = 8;
    if (y + contentRect.height > viewportHeight - 8) {
      y = viewportHeight - contentRect.height - 8;
    }

    setCoords({ x, y });
  };

  useEffect(() => {
    if (isVisible) {
      updatePosition();
      window.addEventListener('scroll', updatePosition);
      window.addEventListener('resize', updatePosition);
      
      return () => {
        window.removeEventListener('scroll', updatePosition);
        window.removeEventListener('resize', updatePosition);
      };
    }
  }, [isVisible, position]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    showTooltip();
  };

  const handleMouseLeave = () => {
    hideTooltip();
  };

  const handleFocus = () => {
    showTooltip();
  };

  const handleBlur = () => {
    hideTooltip();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      hideTooltip();
    }
  };

  return (
    <div 
      className={`${styles.tooltip} ${className}`.trim()}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      {...props}
    >
      <TooltipTriggerAtom ref={triggerRef}>
        {children}
      </TooltipTriggerAtom>
      
      {isVisible && (
        <TooltipContentAtom
          ref={contentRef}
          position={position}
          variant={variant}
          size={size}
          style={{
            position: 'fixed',
            left: `${coords.x}px`,
            top: `${coords.y}px`,
            zIndex: 1000
          }}
        >
          {content}
        </TooltipContentAtom>
      )}
    </div>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right']),
  variant: PropTypes.oneOf(['default', 'info', 'success', 'warning', 'error']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  delay: PropTypes.number,
  disabled: PropTypes.bool,
  className: PropTypes.string
};

// Compound component pattern
Tooltip.Trigger = TooltipTriggerAtom;
Tooltip.Content = TooltipContentAtom;

export default Tooltip;
