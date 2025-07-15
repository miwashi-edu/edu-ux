import React, { useState, createContext, useContext, forwardRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Tabs.module.css';

// Context for tab state management
const TabsContext = createContext();

const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs components must be used within a Tabs container');
  }
  return context;
};

// Atomic subcomponents
export const TabsListAtom = forwardRef(({ 
  children, 
  variant = 'default',
  size = 'md',
  className = '', 
  ...props 
}, ref) => {
  const baseClass = styles.tabsList;
  const variantClass = styles[variant] || '';
  const sizeClass = styles[size] || '';
  
  return (
    <div 
      ref={ref}
      className={`${baseClass} ${variantClass} ${sizeClass} ${className}`.trim()}
      role="tablist"
      {...props}
    >
      {children}
    </div>
  );
});

TabsListAtom.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'bordered', 'pills', 'underline']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string
};

TabsListAtom.displayName = 'TabsListAtom';

export const TabsTriggerAtom = forwardRef(({ 
  children, 
  value,
  disabled = false,
  className = '', 
  ...props 
}, ref) => {
  const { activeTab, onTabChange } = useTabsContext();
  const isActive = activeTab === value;
  
  const handleClick = () => {
    if (!disabled) {
      onTabChange(value);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <button
      ref={ref}
      className={`${styles.tabTrigger} ${isActive ? styles.active : ''} ${disabled ? styles.disabled : ''} ${className}`.trim()}
      role="tab"
      aria-selected={isActive}
      aria-disabled={disabled}
      tabIndex={isActive ? 0 : -1}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {children}
    </button>
  );
});

TabsTriggerAtom.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string
};

TabsTriggerAtom.displayName = 'TabsTriggerAtom';

export const TabsContentAtom = forwardRef(({ 
  children, 
  value,
  className = '', 
  ...props 
}, ref) => {
  const { activeTab } = useTabsContext();
  const isActive = activeTab === value;
  
  if (!isActive) return null;

  return (
    <div
      ref={ref}
      className={`${styles.tabContent} ${className}`.trim()}
      role="tabpanel"
      aria-labelledby={`tab-${value}`}
      {...props}
    >
      {children}
    </div>
  );
});

TabsContentAtom.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string
};

TabsContentAtom.displayName = 'TabsContentAtom';

// Main component
const Tabs = ({ 
  children,
  defaultValue,
  value,
  onValueChange,
  variant = 'default',
  size = 'md',
  orientation = 'horizontal',
  className = '',
  ...props 
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue || '');
  const isControlled = value !== undefined;
  const activeTab = isControlled ? value : internalValue;

  const handleTabChange = (newValue) => {
    if (!isControlled) {
      setInternalValue(newValue);
    }
    onValueChange?.(newValue);
  };

  const contextValue = {
    activeTab,
    onTabChange: handleTabChange
  };

  const orientationClass = styles[orientation] || '';

  return (
    <TabsContext.Provider value={contextValue}>
      <div 
        className={`${styles.tabs} ${orientationClass} ${className}`.trim()}
        data-orientation={orientation}
        {...props}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
};

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  onValueChange: PropTypes.func,
  variant: PropTypes.oneOf(['default', 'bordered', 'pills', 'underline']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  className: PropTypes.string
};

// Compound component pattern
Tabs.List = TabsListAtom;
Tabs.Trigger = TabsTriggerAtom;
Tabs.Content = TabsContentAtom;

export default Tabs;
