/**
 * Spinner component styles
 * Provides dynamic styling utilities for spinner variants and states
 */

/**
 * Get spinner styles based on props
 * @param {Object} props - Component props
 * @param {string} props.variant - Spinner variant
 * @param {string} props.size - Spinner size
 * @param {string} props.color - Spinner color
 * @param {string} props.speed - Animation speed
 * @returns {Object} Style object with spinner class and inline styles
 */
export const getSpinnerStyles = ({ variant = 'default', size = 'medium', color = 'primary', speed = 'normal' }) => {
  const spinnerClasses = ['spinner'];
  
  // Add variant class
  if (variant) {
    spinnerClasses.push(`spinner--${variant}`);
  }
  
  // Add size class
  if (size) {
    spinnerClasses.push(`spinner--${size}`);
  }
  
  // Add color class
  if (color) {
    spinnerClasses.push(`spinner--${color}`);
  }
  
  // Add speed class
  if (speed) {
    spinnerClasses.push(`spinner--${speed}`);
  }
  
  return {
    spinner: spinnerClasses.join(' '),
    style: {
      // Additional inline styles can be added here
    }
  };
};

/**
 * Get spinner color based on color prop
 * @param {string} color - Spinner color
 * @returns {string} Color value
 */
export const getSpinnerColor = (color = 'primary') => {
  const colorMap = {
    primary: '#3b82f6',
    secondary: '#6b7280',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    light: '#ffffff',
    dark: '#1f2937'
  };
  
  return colorMap[color] || colorMap.primary;
};

/**
 * Get spinner size dimensions based on size prop
 * @param {string} size - Spinner size
 * @returns {Object} Dimensions object with width and height
 */
export const getSpinnerDimensions = (size = 'medium') => {
  const sizeMap = {
    small: { width: '1rem', height: '1rem' },
    medium: { width: '1.5rem', height: '1.5rem' },
    large: { width: '2rem', height: '2rem' }
  };
  
  return sizeMap[size] || sizeMap.medium;
};

/**
 * Get animation duration based on speed prop
 * @param {string} speed - Animation speed
 * @param {boolean} reducedMotion - Whether user prefers reduced motion
 * @returns {string} Animation duration
 */
export const getAnimationDuration = (speed = 'normal', reducedMotion = false) => {
  if (reducedMotion) return '0s';
  
  const durationMap = {
    slow: '2s',
    normal: '1s',
    fast: '0.5s'
  };
  
  return durationMap[speed] || durationMap.normal;
};

/**
 * Get spinner border width based on size
 * @param {string} size - Spinner size
 * @returns {string} Border width value
 */
export const getSpinnerBorderWidth = (size = 'medium') => {
  const borderMap = {
    small: '1px',
    medium: '2px',
    large: '3px'
  };
  
  return borderMap[size] || borderMap.medium;
};

/**
 * Get spinner gap based on size
 * @param {string} size - Spinner size
 * @returns {string} Gap value
 */
export const getSpinnerGap = (size = 'medium') => {
  const gapMap = {
    small: '0.25rem',
    medium: '0.5rem',
    large: '0.75rem'
  };
  
  return gapMap[size] || gapMap.medium;
};

/**
 * Get spinner font size based on size
 * @param {string} size - Spinner size
 * @returns {string} Font size value
 */
export const getSpinnerFontSize = (size = 'medium') => {
  const fontSizeMap = {
    small: '0.75rem',
    medium: '1rem',
    large: '1.25rem'
  };
  
  return fontSizeMap[size] || fontSizeMap.medium;
};
