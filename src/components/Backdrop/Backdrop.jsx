import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Backdrop.module.css';
import { getBackdropStyles } from './Backdrop.style';

/**
 * Backdrop component for modal overlays
 * Provides a dimmed background with click handling and accessibility features
 */
const Backdrop = ({
  isOpen = false,
  onClick,
  onKeyDown,
  children,
  variant = 'dark',
  blur = false,
  animated = true,
  className = '',
  style = {},
  ...props
}) => {
  const backdropRef = useRef(null);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isOpen && onKeyDown) {
        onKeyDown(event);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when backdrop is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onKeyDown]);

  // Focus management
  useEffect(() => {
    if (isOpen && backdropRef.current) {
      backdropRef.current.focus();
    }
  }, [isOpen]);

  const handleBackdropClick = (event) => {
    if (event.target === backdropRef.current && onClick) {
      onClick(event);
    }
  };

  const backdropStyles = getBackdropStyles({ variant, blur, animated });
  const combinedClassName = `${styles.backdrop} ${backdropStyles.backdrop} ${className}`.trim();

  if (!isOpen) return null;

  return (
    <div
      ref={backdropRef}
      className={combinedClassName}
      style={{ ...backdropStyles.style, ...style }}
      onClick={handleBackdropClick}
      role="presentation"
      aria-hidden="true"
      tabIndex={-1}
      {...props}
    >
      {children}
    </div>
  );
};

Backdrop.propTypes = {
  /** Whether the backdrop is visible */
  isOpen: PropTypes.bool,
  /** Click handler for backdrop clicks */
  onClick: PropTypes.func,
  /** Key down handler for keyboard events */
  onKeyDown: PropTypes.func,
  /** Content to render inside the backdrop */
  children: PropTypes.node,
  /** Visual variant of the backdrop */
  variant: PropTypes.oneOf(['dark', 'light', 'transparent']),
  /** Whether to apply blur effect */
  blur: PropTypes.bool,
  /** Whether to animate the backdrop */
  animated: PropTypes.bool,
  /** Additional CSS class name */
  className: PropTypes.string,
  /** Additional inline styles */
  style: PropTypes.object,
};

export default Backdrop;
