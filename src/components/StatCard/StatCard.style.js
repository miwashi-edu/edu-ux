/**
 * StatCard Component Styles Configuration
 * Provides theme variables and utility functions for the StatCard component
 */

// Theme configuration for StatCard variants
export const statCardTheme = {
  variants: {
    default: {
      borderColor: '#e5e7eb',
      iconBackground: '#f3f4f6',
      iconColor: '#6b7280',
    },
    success: {
      borderColor: '#10b981',
      iconBackground: '#d1fae5',
      iconColor: '#059669',
    },
    warning: {
      borderColor: '#f59e0b',
      iconBackground: '#fef3c7',
      iconColor: '#d97706',
    },
    danger: {
      borderColor: '#ef4444',
      iconBackground: '#fee2e2',
      iconColor: '#dc2626',
    },
    info: {
      borderColor: '#06b6d4',
      iconBackground: '#cffafe',
      iconColor: '#0891b2',
    },
  },
  sizes: {
    sm: {
      padding: '1rem',
      gap: '0.5rem',
      valueFontSize: '1.5rem',
      labelFontSize: '0.875rem',
      iconSize: '2rem',
      iconFontSize: '1rem',
    },
    md: {
      padding: '1.5rem',
      gap: '0.75rem',
      valueFontSize: '2rem',
      labelFontSize: '1rem',
      iconSize: '2.5rem',
      iconFontSize: '1.25rem',
    },
    lg: {
      padding: '2rem',
      gap: '1rem',
      valueFontSize: '2.5rem',
      labelFontSize: '1.125rem',
      iconSize: '3rem',
      iconFontSize: '1.5rem',
    },
    xl: {
      padding: '2.5rem',
      gap: '1.25rem',
      valueFontSize: '3rem',
      labelFontSize: '1.25rem',
      iconSize: '3.5rem',
      iconFontSize: '1.75rem',
    },
  },
  colors: {
    background: {
      light: '#ffffff',
      dark: '#1f2937',
    },
    border: {
      light: '#e5e7eb',
      dark: '#374151',
    },
    text: {
      primary: {
        light: '#111827',
        dark: '#f9fafb',
      },
      secondary: {
        light: '#6b7280',
        dark: '#9ca3af',
      },
    },
  },
};

// Utility functions
export const getStatCardStyles = (variant = 'default', size = 'md', customStyles = {}) => {
  const baseStyles = {
    display: 'flex',
    flexDirection: 'column',
    background: statCardTheme.colors.background.light,
    border: `1px solid ${statCardTheme.variants[variant].borderColor}`,
    borderRadius: '0.75rem',
    padding: statCardTheme.sizes[size].padding,
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.2s ease-in-out',
    position: 'relative',
    overflow: 'hidden',
    gap: statCardTheme.sizes[size].gap,
    ...customStyles,
  };

  return baseStyles;
};

export const getStatCardValueStyles = (variant = 'default', size = 'md', customStyles = {}) => {
  return {
    fontSize: statCardTheme.sizes[size].valueFontSize,
    fontWeight: 700,
    color: statCardTheme.colors.text.primary.light,
    lineHeight: 1,
    ...customStyles,
  };
};

export const getStatCardLabelStyles = (size = 'md', customStyles = {}) => {
  return {
    fontSize: statCardTheme.sizes[size].labelFontSize,
    fontWeight: 500,
    color: statCardTheme.colors.text.secondary.light,
    ...customStyles,
  };
};

export const getStatCardIconStyles = (variant = 'default', size = 'md', customStyles = {}) => {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: statCardTheme.sizes[size].iconSize,
    height: statCardTheme.sizes[size].iconSize,
    fontSize: statCardTheme.sizes[size].iconFontSize,
    backgroundColor: statCardTheme.variants[variant].iconBackground,
    color: statCardTheme.variants[variant].iconColor,
    borderRadius: '0.5rem',
    flexShrink: 0,
    ...customStyles,
  };
};

export const getStatCardTrendStyles = (direction = 'up', customStyles = {}) => {
  const directionColors = {
    up: '#059669',
    down: '#dc2626',
    neutral: '#6b7280',
  };

  return {
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
    fontSize: '0.875rem',
    fontWeight: 500,
    color: directionColors[direction],
    ...customStyles,
  };
};

// Animation configurations
export const statCardAnimations = {
  hover: {
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    duration: '0.2s',
    easing: 'ease-in-out',
  },
  loading: {
    duration: '1.5s',
    easing: 'linear',
    iteration: 'infinite',
  },
};

// Accessibility helpers
export const getAccessibilityProps = (clickable = false, loading = false) => {
  const props = {};
  
  if (clickable) {
    props.role = 'button';
    if (!loading) {
      props.tabIndex = 0;
    }
  }
  
  return props;
};

// Responsive breakpoints
export const statCardBreakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};

// Export default theme
export default statCardTheme;
