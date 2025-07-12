import React, { useRef, useEffect, useState } from 'react';
import { useAccordion } from './AccordionContext';
import styles from './Accordion.module.css';

export function AccordionContent({ 
  children, 
  className = '', 
  itemId,
  ...props 
}) {
  const { isExpanded } = useAccordion();
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);
  const expanded = isExpanded(itemId);

  useEffect(() => {
    if (contentRef.current) {
      if (expanded) {
        const scrollHeight = contentRef.current.scrollHeight;
        setHeight(scrollHeight);
      } else {
        setHeight(0);
      }
    }
  }, [expanded, children]);

  return (
    <div 
      className={`${styles.accordionContent} ${expanded ? styles.expanded : ''} ${className}`}
      style={{ height: `${height}px` }}
      {...props}
    >
      <div ref={contentRef} className={styles.contentInner}>
        {children}
      </div>
    </div>
  );
} 