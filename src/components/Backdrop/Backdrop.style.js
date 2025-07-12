/**
 * Backdrop component styles
 * Provides dynamic styling utilities for backdrop variants and states
 */

/**
 * Get backdrop styles based on props
 * @param {Object} props - Component props
 * @param {string} props.variant - Backdrop variant
 * @param {boolean} props.blur - Whether to apply blur effect
 * @param {boolean} props.animated - Whether to apply animations
 * @returns {Object} Style object with backdrop class and inline styles
 */
export const getBackdropStyles = ({ variant = 'dark', blur = false, animated = true }) => {
  const backdropClasses = ['backdrop'];
  
  // Add variant class
  if (variant) {
    backdropClasses.push(`backdrop--${variant}`);
  }
  
  // Add blur class
  if (blur) {
    backdropClasses.push('backdrop--blur');
  }
  
  // Add animation class
  if (animated) {
    backdropClasses.push('backdrop--animated');
  }
  
  return {
    backdrop: backdropClasses.join(' '),
    style: {
      // Additional inline styles can be added here
    }
  };
};

/**
 * Get backdrop z-index based on context
 * @param {string} context - Usage context
 * @returns {number} Z-index value
 */
export const getBackdropZIndex = (context = 'default') => {
  const zIndexMap = {
    default: 1000,
    modal: 1100,
    drawer: 1200,
    tooltip: 1300,
    toast: 1400
  };
  
  return zIndexMap[context] || zIndexMap.default;
};

/**
 * Get backdrop opacity based on variant
 * @param {string} variant - Backdrop variant
 * @returns {number} Opacity value
 */
export const getBackdropOpacity = (variant = 'dark') => {
  const opacityMap = {
    dark: 0.5,
    light: 0.8,
    transparent: 0
  };
  
  return opacityMap[variant] || opacityMap.dark;
};

/**
 * Get blur intensity based on variant
 * @param {string} variant - Backdrop variant
 * @returns {string} Blur value
 */
export const getBackdropBlur = (variant = 'dark') => {
  const blurMap = {
    dark: '4px',
    light: '2px',
    transparent: '0px'
  };
  
  return blurMap[variant] || blurMap.dark;
};
