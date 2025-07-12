/**
 * Modal component styles
 * Provides dynamic styling utilities for modal variants and states
 */

/**
 * Get modal styles based on props
 * @param {Object} props - Component props
 * @param {string} props.size - Modal size
 * @param {string} props.variant - Modal variant
 * @returns {Object} Style object with modal class and inline styles
 */
export const getModalStyles = ({ size = 'medium', variant = 'default' }) => {
  const modalClasses = ['modal'];
  
  // Add size class
  if (size) {
    modalClasses.push(`modal--${size}`);
  }
  
  // Add variant class
  if (variant) {
    modalClasses.push(`modal--${variant}`);
  }
  
  return {
    modal: modalClasses.join(' '),
    style: {
      // Additional inline styles can be added here
    }
  };
};

/**
 * Get modal z-index based on context
 * @param {string} context - Usage context
 * @returns {number} Z-index value
 */
export const getModalZIndex = (context = 'default') => {
  const zIndexMap = {
    default: 1100,
    modal: 1200,
    drawer: 1300,
    tooltip: 1400,
    toast: 1500
  };
  
  return zIndexMap[context] || zIndexMap.default;
};

/**
 * Get modal dimensions based on size
 * @param {string} size - Modal size
 * @returns {Object} Dimensions object
 */
export const getModalDimensions = (size = 'medium') => {
  const dimensionsMap = {
    small: { width: '400px', maxWidth: '90vw' },
    medium: { width: '600px', maxWidth: '90vw' },
    large: { width: '800px', maxWidth: '90vw' },
    full: { width: '95vw', height: '95vh', maxWidth: 'none', maxHeight: 'none' }
  };
  
  return dimensionsMap[size] || dimensionsMap.medium;
};

/**
 * Get modal animation duration
 * @param {boolean} reducedMotion - Whether user prefers reduced motion
 * @returns {string} Animation duration
 */
export const getModalAnimationDuration = (reducedMotion = false) => {
  return reducedMotion ? '0s' : '0.3s';
};

/**
 * Get modal backdrop opacity
 * @param {string} variant - Modal variant
 * @returns {number} Opacity value
 */
export const getModalBackdropOpacity = (variant = 'default') => {
  const opacityMap = {
    default: 0.5,
    centered: 0.6,
    fullscreen: 0.8
  };
  
  return opacityMap[variant] || opacityMap.default;
};
