/**
 * Label Component Styles Configuration
 * Provides theme variables and utility functions for the Label component
 */

// Theme configuration for Label variants
export const labelTheme = {
  variants: {
    default: {
      backgroundColor: '#f3f4f6',
      color: '#374151',
      borderColor: '#d1d5db',
    },
    primary: {
      backgroundColor: '#3b82f6',
      color: '#ffffff',
      borderColor: '#2563eb',
    },
    success: {
      backgroundColor: '#10b981',
      color: '#ffffff',
      borderColor: '#059669',
    },
    warning: {
      backgroundColor: '#f59e0b',
      color: '#ffffff',
      borderColor: '#d97706',
    },
    danger: {
      backgroundColor: '#ef4444',
      color: '#ffffff',
      borderColor: '#dc2626',
    },
    info: {
      backgroundColor: '#06b6d4',
      color: '#ffffff',
      borderColor: '#0891b2',
    },
    outline: {
      backgroundColor: 'transparent',
      color: '#374151',
      borderColor: '#d1d5db',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: '#6b7280',
      borderColor: 'transparent',
    },
  },
  sizes: {
    xs: {
      padding: '0.125rem 0.375rem',
      fontSize: '0.75rem',
      gap: '0.125rem',
    },
    sm: {
      padding: '0.25rem 0.5rem',
      fontSize: '0.875rem',
      gap: '0.25rem',
    },
    md: {
      padding: '0.375rem 0.75rem',
      fontSize: '0.875rem',
      gap: '0.25rem',
    },
    lg: {
      padding: '0.5rem 1rem',
      fontSize: '1rem',
      gap: '0.375rem',
    },
    xl: {
      padding: '0.75rem 1.25rem',
      fontSize: '1.125rem',
      gap: '0.5rem',
    },
  },
  badgeVariants: {
    default: {
      backgroundColor: '#6b7280',
      color: '#ffffff',
    },
    primary: {
      backgroundColor: '#3b82f6',
      color: '#ffffff',
    },
    success: {
      backgroundColor: '#10b981',
      color: '#ffffff',
    },
    warning: {
      backgroundColor: '#f59e0b',
      color: '#ffffff',
    },
    danger: {
      backgroundColor: '#ef4444',
      color: '#ffffff',
    },
    info: {
      backgroundColor: '#06b6d4',
      color: '#ffffff',
    },
  },
  iconSizes: {
    xs: {
      fontSize: '0.75rem',
      width: '0.75rem',
      height: '0.75rem',
    },
    sm: {
      fontSize: '0.875rem',
      width: '0.875rem',
      height: '0.875rem',
    },
    md: {
      fontSize: '1rem',
      width: '1rem',
      height: '1rem',
    },
    lg: {
      fontSize: '1.125rem',
      width: '1.125rem',
      height: '1.125rem',
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
  },
};

// Dark theme overrides
export const labelDarkTheme = {
  variants: {
    default: {
      backgroundColor: '#374151',
      color: '#f9fafb',
      borderColor: '#4b5563',
    },
    outline: {
      backgroundColor: 'transparent',
      color: '#f9fafb',
      borderColor: '#4b5563',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: '#9ca3af',
      borderColor: 'transparent',
    },
  },
};

// Utility functions
export const getLabelStyles = (variant = 'default', size = 'md', customStyles = {}) => {
  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: labelTheme.sizes[size].gap,
    padding: labelTheme.sizes[size].padding,
    fontSize: labelTheme.sizes[size].fontSize,
    fontWeight: 500,
    lineHeight: 1.25,
    whiteSpace: 'nowrap',
    borderRadius: '0.375rem',
    border: '1px solid transparent',
    transition: 'all 0.2s ease-in-out',
    cursor: 'default',
    userSelect: 'none',
    ...labelTheme.variants[variant],
    ...customStyles,
  };

  return baseStyles;
};

export const getBadgeStyles = (variant = 'default', customStyles = {}) => {
  return {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '1.25rem',
    height: '1.25rem',
    padding: '0 0.375rem',
    borderRadius: '0.625rem',
    fontSize: '0.75rem',
    fontWeight: 600,
    lineHeight: 1,
    whiteSpace: 'nowrap',
    flexShrink: 0,
    ...labelTheme.badgeVariants[variant],
    ...customStyles,
  };
};

export const getIconStyles = (size = 'sm', customStyles = {}) => {
  return {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    ...labelTheme.iconSizes[size],
    ...customStyles,
  };
};

// Animation configurations
export const labelAnimations = {
  enter: {
    from: {
      opacity: 0,
      transform: 'scale(0.8) translateY(-4px)',
    },
    to: {
      opacity: 1,
      transform: 'scale(1) translateY(0)',
    },
    duration: '0.2s',
    easing: 'ease-out',
  },
  hover: {
    transform: 'translateY(-1px)',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  active: {
    transform: 'translateY(0)',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
  },
};

// Accessibility helpers
export const getAccessibilityProps = (removable = false, disabled = false) => {
  const props = {};
  
  if (removable) {
    props.role = 'button';
    if (!disabled) {
      props.tabIndex = 0;
    }
  }
  
  return props;
};

// Responsive breakpoints
export const labelBreakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};

// Export default theme
export default labelTheme;
