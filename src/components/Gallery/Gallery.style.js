// Gallery Component Styles
export const galleryStyles = {
  // CSS Custom Properties
  cssVariables: {
    '--gallery-item-bg': '#f8f9fa',
    '--gallery-item-bg-dark': '#1f2937',
    '--gallery-filter-bg': '#ffffff',
    '--gallery-filter-bg-dark': '#374151',
    '--gallery-filter-hover-bg': '#f8f9fa',
    '--gallery-filter-hover-bg-dark': '#4b5563',
    '--gallery-filter-active-bg': '#007bff',
    '--gallery-border-color': '#e2e8f0',
    '--gallery-border-color-dark': '#4b5563',
    '--gallery-border-hover-color': '#cbd5e1',
    '--gallery-text-color': '#374151',
    '--gallery-text-color-dark': '#f9fafb',
    '--gallery-text-secondary': '#6b7280',
    '--gallery-text-secondary-dark': '#9ca3af',
    '--gallery-focus-color': '#007bff',
    '--gallery-transition-duration': '0.3s',
    '--gallery-transition-timing': 'ease-in-out',
    '--gallery-border-radius': '8px',
    '--gallery-shadow': '0 2px 8px rgba(0, 0, 0, 0.1)',
  },

  // Grid configurations
  gridConfigs: {
    compact: {
      columns: 4,
      gap: 12,
      aspectRatio: '1:1',
    },
    standard: {
      columns: 3,
      gap: 16,
      aspectRatio: '1:1',
    },
    spacious: {
      columns: 2,
      gap: 24,
      aspectRatio: '4:3',
    },
    masonry: {
      columns: 3,
      gap: 16,
      aspectRatio: 'auto',
    },
  },

  // Responsive breakpoints
  breakpoints: {
    mobile: {
      columns: 1,
      gap: 12,
      '--gallery-columns-mobile': 1,
    },
    tablet: {
      columns: 2,
      gap: 16,
      '--gallery-columns-tablet': 2,
    },
    desktop: {
      columns: 3,
      gap: 16,
      '--gallery-columns': 3,
    },
    wide: {
      columns: 4,
      gap: 20,
      '--gallery-columns': 4,
    },
  },

  // Aspect ratio presets
  aspectRatios: {
    square: '1:1',
    portrait: '3:4',
    landscape: '4:3',
    wide: '16:9',
    ultrawide: '21:9',
    auto: 'auto',
  },

  // Theme variants
  themes: {
    light: {
      '--gallery-item-bg': '#f8f9fa',
      '--gallery-filter-bg': '#ffffff',
      '--gallery-text-color': '#374151',
      '--gallery-text-secondary': '#6b7280',
      '--gallery-border-color': '#e2e8f0',
    },
    dark: {
      '--gallery-item-bg': '#1f2937',
      '--gallery-filter-bg': '#374151',
      '--gallery-text-color': '#f9fafb',
      '--gallery-text-secondary': '#9ca3af',
      '--gallery-border-color': '#4b5563',
    },
    minimal: {
      '--gallery-item-bg': '#ffffff',
      '--gallery-filter-bg': '#ffffff',
      '--gallery-text-color': '#000000',
      '--gallery-text-secondary': '#666666',
      '--gallery-border-color': '#e5e5e5',
    },
  },

  // Utility functions
  utils: {
    // Get grid configuration
    getGridConfig: (variant = 'standard') => {
      return galleryStyles.gridConfigs[variant] || galleryStyles.gridConfigs.standard;
    },

    // Get responsive configuration
    getResponsiveConfig: (breakpoint = 'desktop') => {
      return galleryStyles.breakpoints[breakpoint] || galleryStyles.breakpoints.desktop;
    },

    // Get aspect ratio
    getAspectRatio: (ratio = 'square') => {
      return galleryStyles.aspectRatios[ratio] || galleryStyles.aspectRatios.square;
    },

    // Get theme styles
    getThemeStyles: (theme = 'light') => {
      return galleryStyles.themes[theme] || galleryStyles.themes.light;
    },

    // Get combined styles
    getStyles: (variant = 'standard', theme = 'light', breakpoint = 'desktop') => {
      return {
        ...galleryStyles.cssVariables,
        ...galleryStyles.gridConfigs[variant],
        ...galleryStyles.themes[theme],
        ...galleryStyles.breakpoints[breakpoint],
      };
    },

    // Calculate grid columns based on screen size
    getResponsiveColumns: (screenWidth) => {
      if (screenWidth < 480) return 1;
      if (screenWidth < 768) return 2;
      if (screenWidth < 1024) return 3;
      return 4;
    },

    // Generate sample images for testing
    generateSampleImages: (count = 6, categories = ['Nature', 'Urban', 'Abstract']) => {
      return Array.from({ length: count }, (_, i) => ({
        src: `https://picsum.photos/400/400?random=${i + 1}`,
        alt: `Sample image ${i + 1}`,
        title: `Image ${i + 1}`,
        description: `This is a sample image for testing purposes.`,
        category: categories[i % categories.length],
      }));
    },

    // Format image dimensions
    formatImageDimensions: (width, height) => {
      return `${width}x${height}`;
    },

    // Calculate image aspect ratio
    calculateAspectRatio: (width, height) => {
      const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
      const divisor = gcd(width, height);
      return `${width / divisor}:${height / divisor}`;
    },

    // Validate image URL
    isValidImageUrl: (url) => {
      try {
        new URL(url);
        return true;
      } catch {
        return false;
      }
    },

    // Get image file extension
    getImageExtension: (url) => {
      const match = url.match(/\.([^.]+)$/);
      return match ? match[1].toLowerCase() : null;
    },

    // Check if image is supported
    isSupportedImage: (url) => {
      const extension = galleryStyles.utils.getImageExtension(url);
      const supportedFormats = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'];
      return supportedFormats.includes(extension);
    },
  },

  // Animation presets
  animations: {
    fadeIn: {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
    slideUp: {
      from: { opacity: 0, transform: 'translateY(20px)' },
      to: { opacity: 1, transform: 'translateY(0)' },
    },
    scaleIn: {
      from: { opacity: 0, transform: 'scale(0.9)' },
      to: { opacity: 1, transform: 'scale(1)' },
    },
    slideInLeft: {
      from: { opacity: 0, transform: 'translateX(-20px)' },
      to: { opacity: 1, transform: 'translateX(0)' },
    },
    slideInRight: {
      from: { opacity: 0, transform: 'translateX(20px)' },
      to: { opacity: 1, transform: 'translateX(0)' },
    },
  },

  // Z-index layers
  zIndex: {
    gallery: 1,
    overlay: 10,
    lightbox: 1000,
    modal: 10000,
  },

  // Performance optimizations
  performance: {
    lazyLoadingThreshold: 100, // pixels from viewport
    imagePreloadCount: 2, // number of images to preload
    debounceDelay: 150, // milliseconds for resize events
    animationDuration: 300, // milliseconds for animations
  },
};

export default galleryStyles;
