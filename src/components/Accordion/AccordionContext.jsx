import React, { createContext, useContext } from 'react';

const AccordionContext = createContext();

// Hook for using accordion context
export const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('useAccordion must be used within an Accordion component');
  }
  return context;
};

export { AccordionContext }; 