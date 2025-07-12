import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Toast.module.css';
import { getToastStyles } from './Toast.style';

/**
 * Toast component for displaying brief notifications
 * Provides accessibility features, smooth animations, and auto-dismiss functionality
 */
const Toast = ({
  type = 'info',
  variant = 'default',
  title = '',
  message = '',
  duration = 5000,
  dismissible = true,
  autoDismiss = true,
  position = 'top-right',
  onDismiss = () => {},
  onAction = () => {},
  actionLabel = '',
  className = '',
  style = {},
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const toastStyles = getToastStyles({ type, variant, position });
  const combinedClassName = `${styles.toast} ${toastStyles.toast} ${className}`.trim();

  const toastId = `toast-${Math.random().toString(36).substr(2, 9)}`;

  // Auto-dismiss functionality
  useEffect(() => {
    if (autoDismiss && duration > 0) {
      const timer = setTimeout(() => {
        handleDismiss();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [autoDismiss, duration]);

  // Handle dismiss
  const handleDismiss = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setIsVisible(false);
    
    // Wait for animation to complete before calling onDismiss
    setTimeout(() => {
      onDismiss();
    }, 300);
  };

  // Handle action click
  const handleAction = () => {
    onAction();
    handleDismiss();
  };

  // Get icon based on type
  const getIcon = () => {
    switch (type) {
      case 'success':
        return (
          <svg className={styles.icon} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        );
      case 'error':
        return (
          <svg className={styles.icon} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
        );
      case 'warning':
        return (
          <svg className={styles.icon} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        );
      case 'info':
      default:
        return (
          <svg className={styles.icon} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        );
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`${combinedClassName} ${isAnimating ? styles.animating : ''}`}
      style={{ ...toastStyles.style, ...style }}
      role="alert"
      aria-live="polite"
      aria-atomic="true"
      id={toastId}
      {...props}
    >
      {/* Icon */}
      <div className={styles.iconContainer}>
        {getIcon()}
      </div>

      {/* Content */}
      <div className={styles.content}>
        {title && (
          <div className={styles.title}>
            {title}
          </div>
        )}
        {message && (
          <div className={styles.message}>
            {message}
          </div>
        )}
      </div>

      {/* Action Button */}
      {actionLabel && (
        <button
          className={styles.actionButton}
          onClick={handleAction}
          type="button"
        >
          {actionLabel}
        </button>
      )}

      {/* Dismiss Button */}
      {dismissible && (
        <button
          className={styles.dismissButton}
          onClick={handleDismiss}
          type="button"
          aria-label="Dismiss notification"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className={styles.dismissIcon}>
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      )}

      {/* Progress bar for auto-dismiss */}
      {autoDismiss && duration > 0 && (
        <div 
          className={styles.progressBar}
          style={{ animationDuration: `${duration}ms` }}
        />
      )}
    </div>
  );
};

Toast.propTypes = {
  /** Type of toast notification */
  type: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
  /** Visual variant of the toast */
  variant: PropTypes.oneOf(['default', 'filled', 'outlined', 'minimal']),
  /** Title of the toast */
  title: PropTypes.string,
  /** Message content of the toast */
  message: PropTypes.string,
  /** Duration in milliseconds before auto-dismiss */
  duration: PropTypes.number,
  /** Whether the toast can be dismissed manually */
  dismissible: PropTypes.bool,
  /** Whether the toast auto-dismisses */
  autoDismiss: PropTypes.bool,
  /** Position of the toast */
  position: PropTypes.oneOf(['top-left', 'top-right', 'top-center', 'bottom-left', 'bottom-right', 'bottom-center']),
  /** Callback when toast is dismissed */
  onDismiss: PropTypes.func,
  /** Callback when action button is clicked */
  onAction: PropTypes.func,
  /** Label for the action button */
  actionLabel: PropTypes.string,
  /** Additional CSS class name */
  className: PropTypes.string,
  /** Additional inline styles */
  style: PropTypes.object,
  /** Accessibility label */
  'aria-label': PropTypes.string,
};

export default Toast;
