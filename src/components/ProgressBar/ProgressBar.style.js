/**
 * ProgressBar component styles
 * Provides dynamic styling utilities for progress bar variants and states
 */

/**
 * Get progress bar styles based on props
 * @param {Object} props - Component props
 * @param {string} props.variant - Progress bar variant
 * @param {string} props.size - Progress bar size
 * @param {boolean} props.animated - Whether animations are enabled
 * @returns {Object} Style object with progress bar class and inline styles
 */
export const getProgressBarStyles = ({ variant = 'default', size = 'medium', animated = true }) => {
  const progressBarClasses = ['progressBar'];
  
  // Add variant class
  if (variant) {
    progressBarClasses.push(`progressBar--${variant}`);
  }
  
  // Add size class
  if (size) {
    progressBarClasses.push(`progressBar--${size}`);
  }
  
  return {
    progressBar: progressBarClasses.join(' '),
    style: {
      // Additional inline styles can be added here
    }
  };
};

/**
 * Get progress bar color based on variant
 * @param {string} variant - Progress bar variant
 * @returns {string} Color value
 */
export const getProgressBarColor = (variant = 'default') => {
  const colorMap = {
    default: '#3b82f6',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    gradient: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)',
    animated: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
    striped: '#3b82f6'
  };
  
  return colorMap[variant] || colorMap.default;
};

/**
 * Get progress bar height based on size
 * @param {string} size - Progress bar size
 * @returns {string} Height value
 */
export const getProgressBarHeight = (size = 'medium') => {
  const heightMap = {
    small: '4px',
    medium: '8px',
    large: '12px'
  };
  
  return heightMap[size] || heightMap.medium;
};

/**
 * Get progress bar border radius based on size
 * @param {string} size - Progress bar size
 * @returns {string} Border radius value
 */
export const getProgressBarBorderRadius = (size = 'medium') => {
  const radiusMap = {
    small: '2px',
    medium: '4px',
    large: '6px'
  };
  
  return radiusMap[size] || radiusMap.medium;
};

/**
 * Get animation duration based on preferences
 * @param {boolean} reducedMotion - Whether user prefers reduced motion
 * @returns {string} Animation duration
 */
export const getAnimationDuration = (reducedMotion = false) => {
  return reducedMotion ? '0s' : '0.3s';
};

/**
 * Get indeterminate animation duration
 * @param {boolean} reducedMotion - Whether user prefers reduced motion
 * @returns {string} Animation duration
 */
export const getIndeterminateDuration = (reducedMotion = false) => {
  return reducedMotion ? '0s' : '1.5s';
};
