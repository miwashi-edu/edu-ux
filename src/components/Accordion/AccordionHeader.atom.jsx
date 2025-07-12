import React from 'react';
import { useAccordion } from './AccordionContext';
import styles from './Accordion.module.css';

export function AccordionHeader({ 
  children, 
  className = '', 
  itemId,
  disabled = false,
  icon = null,
  ...props 
}) {
  const { isExpanded, handleToggle, variant } = useAccordion();
  const expanded = isExpanded(itemId);

  const handleClick = () => {
    if (!disabled) {
      handleToggle(itemId);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <button
      className={`${styles.accordionHeader} ${styles[variant]} ${expanded ? styles.expanded : ''} ${disabled ? styles.disabled : ''} ${className}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      aria-expanded={expanded}
      aria-disabled={disabled}
      {...props}
    >
      <span className={styles.headerContent}>
        {children}
      </span>
      <span className={styles.headerIcon}>
        {icon || (
          <svg 
            className={`${styles.chevron} ${expanded ? styles.rotated : ''}`}
            width="16" 
            height="16" 
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M4 6L8 10L12 6" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
    </button>
  );
} 