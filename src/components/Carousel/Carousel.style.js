// Carousel Component Styles
export const carouselStyles = {
  // CSS Custom Properties
  cssVariables: {
    '--carousel-bg': '#f8f9fa',
    '--carousel-bg-dark': '#2d3748',
    '--carousel-arrow-color': '#333',
    '--carousel-arrow-color-dark': '#e2e8f0',
    '--carousel-focus-color': '#007bff',
    '--carousel-transition-duration': '0.3s',
    '--carousel-transition-timing': 'ease-in-out',
    '--carousel-border-radius': '8px',
    '--carousel-shadow': '0 2px 8px rgba(0, 0, 0, 0.1)',
    '--carousel-arrow-size': '48px',
    '--carousel-arrow-size-mobile': '40px',
    '--carousel-indicator-size': '8px',
    '--carousel-indicator-size-mobile': '6px',
  },

  // Size variants
  sizes: {
    small: {
      '--carousel-arrow-size': '36px',
      '--carousel-arrow-size-mobile': '32px',
      '--carousel-indicator-size': '6px',
      '--carousel-indicator-size-mobile': '4px',
    },
    medium: {
      '--carousel-arrow-size': '48px',
      '--carousel-arrow-size-mobile': '40px',
      '--carousel-indicator-size': '8px',
      '--carousel-indicator-size-mobile': '6px',
    },
    large: {
      '--carousel-arrow-size': '56px',
      '--carousel-arrow-size-mobile': '48px',
      '--carousel-indicator-size': '10px',
      '--carousel-indicator-size-mobile': '8px',
    },
  },

  // Theme variants
  themes: {
    light: {
      '--carousel-bg': '#f8f9fa',
      '--carousel-arrow-color': '#333',
      '--carousel-focus-color': '#007bff',
    },
    dark: {
      '--carousel-bg': '#2d3748',
      '--carousel-arrow-color': '#e2e8f0',
      '--carousel-focus-color': '#63b3ed',
    },
    primary: {
      '--carousel-bg': '#e3f2fd',
      '--carousel-arrow-color': '#1976d2',
      '--carousel-focus-color': '#1976d2',
    },
    secondary: {
      '--carousel-bg': '#f3e5f5',
      '--carousel-arrow-color': '#7b1fa2',
      '--carousel-focus-color': '#7b1fa2',
    },
  },

  // Utility functions
  utils: {
    // Apply size variant
    getSizeStyles: (size = 'medium') => {
      return carouselStyles.sizes[size] || carouselStyles.sizes.medium;
    },

    // Apply theme variant
    getThemeStyles: (theme = 'light') => {
      return carouselStyles.themes[theme] || carouselStyles.themes.light;
    },

    // Get combined styles
    getStyles: (size = 'medium', theme = 'light') => {
      return {
        ...carouselStyles.cssVariables,
        ...carouselStyles.sizes[size],
        ...carouselStyles.themes[theme],
      };
    },

    // Calculate track transform
    getTrackTransform: (activeIndex, dragOffset = 0) => {
      const baseTransform = `translateX(-${activeIndex * 100}%)`;
      if (dragOffset === 0) return baseTransform;
      return `translateX(calc(-${activeIndex * 100}% + ${dragOffset}px))`;
    },

    // Get transition style
    getTransitionStyle: (isDragging = false) => {
      if (isDragging) return 'none';
      return `transform var(--carousel-transition-duration) var(--carousel-transition-timing)`;
    },

    // Get responsive arrow size
    getArrowSize: (size = 'medium', isMobile = false) => {
      const sizes = carouselStyles.sizes[size];
      return isMobile 
        ? sizes['--carousel-arrow-size-mobile'] 
        : sizes['--carousel-arrow-size'];
    },

    // Get responsive indicator size
    getIndicatorSize: (size = 'medium', isMobile = false) => {
      const sizes = carouselStyles.sizes[size];
      return isMobile 
        ? sizes['--carousel-indicator-size-mobile'] 
        : sizes['--carousel-indicator-size'];
    },
  },

  // Animation presets
  animations: {
    slideIn: {
      from: { opacity: 0, transform: 'translateX(100%)' },
      to: { opacity: 1, transform: 'translateX(0)' },
    },
    slideOut: {
      from: { opacity: 1, transform: 'translateX(0)' },
      to: { opacity: 0, transform: 'translateX(-100%)' },
    },
    fadeIn: {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
    fadeOut: {
      from: { opacity: 1 },
      to: { opacity: 0 },
    },
    scaleIn: {
      from: { opacity: 0, transform: 'scale(0.8)' },
      to: { opacity: 1, transform: 'scale(1)' },
    },
    scaleOut: {
      from: { opacity: 1, transform: 'scale(1)' },
      to: { opacity: 0, transform: 'scale(0.8)' },
    },
  },

  // Breakpoints for responsive design
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1200px',
  },

  // Z-index layers
  zIndex: {
    track: 1,
    controls: 10,
    indicators: 10,
    overlay: 100,
  },
};

export default carouselStyles;
