/**
 * Toast component styles
 * Provides dynamic styling utilities for toast variants and states
 */

/**
 * Get toast styles based on props
 * @param {Object} props - Component props
 * @param {string} props.type - Toast notification type
 * @param {string} props.variant - Toast visual variant
 * @param {string} props.position - Toast position
 * @returns {Object} Style object with toast class and inline styles
 */
export const getToastStyles = ({ type = 'info', variant = 'default', position = 'top-right' }) => {
  const toastClasses = ['toast'];
  
  // Add type class
  if (type) {
    toastClasses.push(`toast--${type}`);
  }
  
  // Add variant class
  if (variant) {
    toastClasses.push(`toast--${variant}`);
  }
  
  // Add position class
  if (position) {
    toastClasses.push(`toast--${position}`);
  }
  
  return {
    toast: toastClasses.join(' '),
    style: {
      // Additional inline styles can be added here
    }
  };
};

/**
 * Get toast color based on type
 * @param {string} type - Toast notification type
 * @returns {string} Color value
 */
export const getToastColor = (type = 'info') => {
  const colorMap = {
    info: '#3b82f6',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444'
  };
  
  return colorMap[type] || colorMap.info;
};

/**
 * Get toast background color based on type and variant
 * @param {string} type - Toast notification type
 * @param {string} variant - Toast visual variant
 * @returns {string} Background color value
 */
export const getToastBackgroundColor = (type = 'info', variant = 'default') => {
  const backgroundMap = {
    default: {
      info: '#ffffff',
      success: '#ffffff',
      warning: '#ffffff',
      error: '#ffffff'
    },
    filled: {
      info: '#eff6ff',
      success: '#ecfdf5',
      warning: '#fffbeb',
      error: '#fef2f2'
    },
    outlined: {
      info: 'transparent',
      success: 'transparent',
      warning: 'transparent',
      error: 'transparent'
    },
    minimal: {
      info: '#f9fafb',
      success: '#f9fafb',
      warning: '#f9fafb',
      error: '#f9fafb'
    }
  };
  
  return backgroundMap[variant]?.[type] || backgroundMap.default[type];
};

/**
 * Get toast border color based on type and variant
 * @param {string} type - Toast notification type
 * @param {string} variant - Toast visual variant
 * @returns {string} Border color value
 */
export const getToastBorderColor = (type = 'info', variant = 'default') => {
  const borderMap = {
    default: {
      info: '#e5e7eb',
      success: '#e5e7eb',
      warning: '#e5e7eb',
      error: '#e5e7eb'
    },
    filled: {
      info: 'transparent',
      success: 'transparent',
      warning: 'transparent',
      error: 'transparent'
    },
    outlined: {
      info: '#3b82f6',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444'
    },
    minimal: {
      info: '#e5e7eb',
      success: '#e5e7eb',
      warning: '#e5e7eb',
      error: '#e5e7eb'
    }
  };
  
  return borderMap[variant]?.[type] || borderMap.default[type];
};

/**
 * Get toast text color based on type and variant
 * @param {string} type - Toast notification type
 * @param {string} variant - Toast visual variant
 * @returns {string} Text color value
 */
export const getToastTextColor = (type = 'info', variant = 'default') => {
  const textMap = {
    default: {
      info: '#1f2937',
      success: '#1f2937',
      warning: '#1f2937',
      error: '#1f2937'
    },
    filled: {
      info: '#1e40af',
      success: '#065f46',
      warning: '#92400e',
      error: '#991b1b'
    },
    outlined: {
      info: '#3b82f6',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444'
    },
    minimal: {
      info: '#1f2937',
      success: '#1f2937',
      warning: '#1f2937',
      error: '#1f2937'
    }
  };
  
  return textMap[variant]?.[type] || textMap.default[type];
};

/**
 * Get toast position styles based on position
 * @param {string} position - Toast position
 * @returns {Object} Position styles object
 */
export const getToastPositionStyles = (position = 'top-right') => {
  const positionMap = {
    'top-left': {
      top: '1rem',
      left: '1rem',
      right: 'auto',
      bottom: 'auto'
    },
    'top-right': {
      top: '1rem',
      right: '1rem',
      left: 'auto',
      bottom: 'auto'
    },
    'top-center': {
      top: '1rem',
      left: '50%',
      transform: 'translateX(-50%)',
      right: 'auto',
      bottom: 'auto'
    },
    'bottom-left': {
      bottom: '1rem',
      left: '1rem',
      right: 'auto',
      top: 'auto'
    },
    'bottom-right': {
      bottom: '1rem',
      right: '1rem',
      left: 'auto',
      top: 'auto'
    },
    'bottom-center': {
      bottom: '1rem',
      left: '50%',
      transform: 'translateX(-50%)',
      right: 'auto',
      top: 'auto'
    }
  };
  
  return positionMap[position] || positionMap['top-right'];
};

/**
 * Get toast dimensions based on content
 * @param {boolean} hasTitle - Whether toast has a title
 * @param {boolean} hasMessage - Whether toast has a message
 * @param {boolean} hasAction - Whether toast has an action button
 * @returns {Object} Dimensions object
 */
export const getToastDimensions = (hasTitle = false, hasMessage = false, hasAction = false) => {
  const minHeight = hasTitle && hasMessage ? 'auto' : '4rem';
  const maxWidth = hasAction ? '450px' : '400px';
  
  return {
    minHeight,
    maxWidth,
    minWidth: '300px'
  };
};

/**
 * Get toast animation duration based on duration prop
 * @param {number} duration - Toast duration in milliseconds
 * @returns {string} Animation duration
 */
export const getToastAnimationDuration = (duration = 5000) => {
  return `${duration}ms`;
};

/**
 * Get toast z-index based on position
 * @param {string} position - Toast position
 * @returns {number} Z-index value
 */
export const getToastZIndex = (position = 'top-right') => {
  const zIndexMap = {
    'top-left': 1000,
    'top-right': 1000,
    'top-center': 1001,
    'bottom-left': 1000,
    'bottom-right': 1000,
    'bottom-center': 1001
  };
  
  return zIndexMap[position] || 1000;
};
