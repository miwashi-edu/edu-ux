import React from 'react';
import styles from './Accordion.module.css';

export function AccordionItem({ 
  children, 
  className = '', 
  itemId,
  disabled = false,
  ...props 
}) {
  return (
    <div 
      className={`${styles.accordionItem} ${disabled ? styles.disabled : ''} ${className}`}
      data-item-id={itemId}
      {...props}
    >
      {children}
    </div>
  );
} 