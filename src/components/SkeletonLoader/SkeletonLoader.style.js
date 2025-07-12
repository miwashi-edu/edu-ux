/**
 * SkeletonLoader component styles
 * Provides dynamic styling utilities for skeleton loader variants and states
 */

/**
 * Get skeleton loader styles based on props
 * @param {Object} props - Component props
 * @param {string} props.type - Skeleton content type
 * @param {string} props.variant - Skeleton animation variant
 * @param {string} props.size - Skeleton size
 * @param {boolean} props.animated - Whether animations are enabled
 * @returns {Object} Style object with skeleton loader class and inline styles
 */
export const getSkeletonStyles = ({ type = 'text', variant = 'default', size = 'medium', animated = true }) => {
  const skeletonClasses = ['skeletonLoader'];
  
  // Add type class
  if (type) {
    skeletonClasses.push(`skeletonLoader--${type}`);
  }
  
  // Add variant class
  if (variant) {
    skeletonClasses.push(`skeletonLoader--${variant}`);
  }
  
  // Add size class
  if (size) {
    skeletonClasses.push(`skeletonLoader--${size}`);
  }
  
  return {
    skeletonLoader: skeletonClasses.join(' '),
    skeletonItem: 'skeletonItem',
    style: {
      // Additional inline styles can be added here
    }
  };
};

/**
 * Get skeleton dimensions based on type and size
 * @param {string} type - Skeleton content type
 * @param {string} size - Skeleton size
 * @returns {Object} Dimensions object with width and height
 */
export const getSkeletonDimensions = (type = 'text', size = 'medium') => {
  const dimensions = {
    text: {
      small: { width: '100%', height: '3rem' },
      medium: { width: '100%', height: '4rem' },
      large: { width: '100%', height: '5rem' }
    },
    avatar: {
      small: { width: '2rem', height: '2rem' },
      medium: { width: '3rem', height: '3rem' },
      large: { width: '4rem', height: '4rem' }
    },
    image: {
      small: { width: '100%', height: '8rem' },
      medium: { width: '100%', height: '12rem' },
      large: { width: '100%', height: '16rem' }
    },
    button: {
      small: { width: '6rem', height: '2rem' },
      medium: { width: '8rem', height: '2.5rem' },
      large: { width: '10rem', height: '3rem' }
    },
    card: {
      small: { width: '100%', height: '12rem' },
      medium: { width: '100%', height: '16rem' },
      large: { width: '100%', height: '20rem' }
    },
    list: {
      small: { width: '100%', height: '4rem' },
      medium: { width: '100%', height: '5rem' },
      large: { width: '100%', height: '6rem' }
    },
    table: {
      small: { width: '100%', height: '8rem' },
      medium: { width: '100%', height: '10rem' },
      large: { width: '100%', height: '12rem' }
    },
    custom: {
      small: { width: '100%', height: '4rem' },
      medium: { width: '100%', height: '6rem' },
      large: { width: '100%', height: '8rem' }
    }
  };
  
  return dimensions[type]?.[size] || dimensions.text.medium;
};

/**
 * Get skeleton colors based on variant
 * @param {string} variant - Skeleton animation variant
 * @returns {Object} Color object with primary and secondary colors
 */
export const getSkeletonColors = (variant = 'default') => {
  const colorMap = {
    default: {
      primary: '#e5e7eb',
      secondary: '#d1d5db'
    },
    pulse: {
      primary: '#e5e7eb',
      secondary: '#d1d5db'
    },
    wave: {
      primary: '#e5e7eb',
      secondary: '#d1d5db'
    },
    shimmer: {
      primary: '#e5e7eb',
      secondary: '#d1d5db'
    }
  };
  
  return colorMap[variant] || colorMap.default;
};

/**
 * Get animation duration based on variant and preferences
 * @param {string} variant - Skeleton animation variant
 * @param {boolean} reducedMotion - Whether user prefers reduced motion
 * @returns {string} Animation duration
 */
export const getAnimationDuration = (variant = 'default', reducedMotion = false) => {
  if (reducedMotion) return '0s';
  
  const durationMap = {
    default: '1.5s',
    pulse: '1.5s',
    wave: '2s',
    shimmer: '1.5s'
  };
  
  return durationMap[variant] || durationMap.default;
};

/**
 * Get skeleton border radius based on size
 * @param {string} size - Skeleton size
 * @returns {string} Border radius value
 */
export const getSkeletonBorderRadius = (size = 'medium') => {
  const radiusMap = {
    small: '2px',
    medium: '4px',
    large: '6px'
  };
  
  return radiusMap[size] || radiusMap.medium;
};

/**
 * Get skeleton spacing based on size
 * @param {string} size - Skeleton size
 * @returns {Object} Spacing object with gap and padding values
 */
export const getSkeletonSpacing = (size = 'medium') => {
  const spacingMap = {
    small: {
      gap: '0.5rem',
      padding: '0.5rem'
    },
    medium: {
      gap: '1rem',
      padding: '1rem'
    },
    large: {
      gap: '1.5rem',
      padding: '1.5rem'
    }
  };
  
  return spacingMap[size] || spacingMap.medium;
};
