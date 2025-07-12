import React, { useState } from 'react';
import styles from './Accordion.module.css';
import { AccordionItem } from './AccordionItem.atom';
import { AccordionHeader } from './AccordionHeader.atom';
import { AccordionContent } from './AccordionContent.atom';
import { AccordionContext } from './AccordionContext';

function Accordion({ 
  children, 
  className = '', 
  variant = 'default',
  allowMultiple = false,
  defaultExpanded = [],
  onToggle,
  ...props 
}) {
  const [expandedItems, setExpandedItems] = useState(defaultExpanded);

  const handleToggle = (itemId) => {
    let newExpandedItems;
    
    if (allowMultiple) {
      newExpandedItems = expandedItems.includes(itemId)
        ? expandedItems.filter(id => id !== itemId)
        : [...expandedItems, itemId];
    } else {
      newExpandedItems = expandedItems.includes(itemId) ? [] : [itemId];
    }
    
    setExpandedItems(newExpandedItems);
    onToggle?.(newExpandedItems);
  };

  const isExpanded = (itemId) => expandedItems.includes(itemId);

  const contextValue = {
    expandedItems,
    isExpanded,
    handleToggle,
    variant,
    allowMultiple
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <div 
        className={`${styles.accordion} ${styles[variant]} ${className}`}
        role="region"
        aria-label="Accordion"
        {...props}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

// Export subcomponents for direct use
Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Content = AccordionContent;

export default Accordion;
