/**
 * Meter Component Styles Configuration
 * Provides theme variables and utility functions for the Meter component
 */

// Theme configuration for Meter variants
export const meterTheme = {
  variants: {
    default: {
      background: 'linear-gradient(90deg, #3b82f6, #1d4ed8)',
    },
    success: {
      background: 'linear-gradient(90deg, #10b981, #059669)',
    },
    warning: {
      background: 'linear-gradient(90deg, #f59e0b, #d97706)',
    },
    danger: {
      background: 'linear-gradient(90deg, #ef4444, #dc2626)',
    },
    info: {
      background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
    },
  },
  sizes: {
    sm: {
      trackHeight: '0.5rem',
      borderRadius: '0.25rem',
      labelFontSize: '0.75rem',
      valueFontSize: '0.75rem',
      gap: '0.25rem',
    },
    md: {
      trackHeight: '0.75rem',
      borderRadius: '0.375rem',
      labelFontSize: '0.875rem',
      valueFontSize: '0.875rem',
      gap: '0.5rem',
    },
    lg: {
      trackHeight: '1rem',
      borderRadius: '0.5rem',
      labelFontSize: '1rem',
      valueFontSize: '1rem',
      gap: '0.75rem',
    },
    xl: {
      trackHeight: '1.25rem',
      borderRadius: '0.625rem',
      labelFontSize: '1.125rem',
      valueFontSize: '1.125rem',
      gap: '1rem',
    },
  },
  colors: {
    track: {
      light: '#f3f4f6',
      dark: '#374151',
    },
    border: {
      light: '#e5e7eb',
      dark: '#4b5563',
    },
    label: {
      light: '#374151',
      dark: '#f9fafb',
    },
    value: {
      light: '#6b7280',
      dark: '#9ca3af',
    },
  },
};

// Utility functions
export const getMeterStyles = (variant = 'default', size = 'md', customStyles = {}) => {
  const baseStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: meterTheme.sizes[size].gap,
    width: '100%',
    position: 'relative',
    ...customStyles,
  };

  return baseStyles;
};

export const getMeterTrackStyles = (size = 'md', customStyles = {}) => {
  return {
    position: 'relative',
    backgroundColor: meterTheme.colors.track.light,
    border: `1px solid ${meterTheme.colors.border.light}`,
    borderRadius: meterTheme.sizes[size].borderRadius,
    height: meterTheme.sizes[size].trackHeight,
    overflow: 'hidden',
    width: '100%',
    ...customStyles,
  };
};

export const getMeterFillStyles = (variant = 'default', customStyles = {}) => {
  return {
    height: '100%',
    borderRadius: 'inherit',
    transition: 'width 0.3s ease-in-out',
    position: 'relative',
    ...meterTheme.variants[variant],
    ...customStyles,
  };
};

export const getMeterLabelStyles = (size = 'md', customStyles = {}) => {
  return {
    fontWeight: 500,
    fontSize: meterTheme.sizes[size].labelFontSize,
    color: meterTheme.colors.label.light,
    flex: 1,
    ...customStyles,
  };
};

export const getMeterValueStyles = (size = 'md', customStyles = {}) => {
  return {
    fontWeight: 600,
    fontSize: meterTheme.sizes[size].valueFontSize,
    color: meterTheme.colors.value.light,
    textAlign: 'right',
    minWidth: '3rem',
    ...customStyles,
  };
};

// Animation configurations
export const meterAnimations = {
  fill: {
    duration: '0.6s',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  stripes: {
    duration: '1s',
    easing: 'linear',
    iteration: 'infinite',
  },
};

// Accessibility helpers
export const getAccessibilityProps = (value, min, max, label) => {
  const percentage = Math.round(((value - min) / (max - min)) * 100);
  
  return {
    role: 'meter',
    'aria-valuenow': value,
    'aria-valuemin': min,
    'aria-valuemax': max,
    'aria-valuetext': `${percentage}%`,
    'aria-label': label || `Progress: ${percentage}%`,
  };
};

// Threshold utilities
export const validateThresholds = (thresholds) => {
  return thresholds.filter(threshold => 
    typeof threshold.value === 'number' && 
    threshold.value >= 0 && 
    threshold.value <= 100
  ).sort((a, b) => a.value - b.value);
};

// Responsive breakpoints
export const meterBreakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};

// Export default theme
export default meterTheme;
