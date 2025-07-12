import React from 'react';
import styles from './Alert.module.css';

export function AlertClose({ 
  onClose, 
  className = '', 
  'aria-label': ariaLabel = 'Close alert',
  ...props 
}) {
  const handleClick = (event) => {
    event.preventDefault();
    onClose?.(event);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClose?.(event);
    }
  };

  return (
    <button
      type="button"
      className={`${styles.alertClose} ${className}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      {...props}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </button>
  );
} 