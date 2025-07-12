// Chart Component Styles
export const chartStyles = {
  // CSS Custom Properties
  cssVariables: {
    '--chart-bg': '#ffffff',
    '--chart-bg-dark': '#1f2937',
    '--chart-axis-color': '#e2e8f0',
    '--chart-axis-color-dark': '#4b5563',
    '--chart-text-color': '#374151',
    '--chart-text-color-dark': '#f9fafb',
    '--chart-text-secondary': '#6b7280',
    '--chart-text-secondary-dark': '#9ca3af',
    '--chart-border-color': '#e2e8f0',
    '--chart-border-color-dark': '#4b5563',
    '--chart-focus-color': '#007bff',
    '--chart-transition-duration': '0.2s',
    '--chart-transition-timing': 'ease-in-out',
    '--chart-border-radius': '8px',
    '--chart-shadow': '0 2px 8px rgba(0, 0, 0, 0.1)',
  },

  // Color palettes
  colorPalettes: {
    default: ['#4f46e5', '#059669', '#dc2626', '#ea580c', '#7c3aed'],
    pastel: ['#a78bfa', '#34d399', '#f87171', '#fb923c', '#c084fc'],
    monochrome: ['#1f2937', '#374151', '#4b5563', '#6b7280', '#9ca3af'],
    vibrant: ['#ef4444', '#f97316', '#eab308', '#22c55e', '#3b82f6'],
    cool: ['#06b6d4', '#0891b2', '#0e7490', '#155e75', '#164e63'],
    warm: ['#f59e0b', '#d97706', '#b45309', '#92400e', '#78350f'],
  },

  // Size variants
  sizes: {
    small: {
      width: 300,
      height: 200,
      fontSize: '10px',
      legendFontSize: '11px',
    },
    medium: {
      width: 600,
      height: 400,
      fontSize: '12px',
      legendFontSize: '14px',
    },
    large: {
      width: 800,
      height: 500,
      fontSize: '14px',
      legendFontSize: '16px',
    },
  },

  // Theme variants
  themes: {
    light: {
      '--chart-bg': '#ffffff',
      '--chart-text-color': '#374151',
      '--chart-text-secondary': '#6b7280',
      '--chart-axis-color': '#e2e8f0',
      '--chart-border-color': '#e2e8f0',
    },
    dark: {
      '--chart-bg': '#1f2937',
      '--chart-text-color': '#f9fafb',
      '--chart-text-secondary': '#9ca3af',
      '--chart-axis-color': '#4b5563',
      '--chart-border-color': '#4b5563',
    },
    blue: {
      '--chart-bg': '#eff6ff',
      '--chart-text-color': '#1e40af',
      '--chart-text-secondary': '#3b82f6',
      '--chart-axis-color': '#bfdbfe',
      '--chart-border-color': '#bfdbfe',
    },
    green: {
      '--chart-bg': '#f0fdf4',
      '--chart-text-color': '#166534',
      '--chart-text-secondary': '#22c55e',
      '--chart-axis-color': '#bbf7d0',
      '--chart-border-color': '#bbf7d0',
    },
  },

  // Utility functions
  utils: {
    // Get color palette
    getColorPalette: (palette = 'default') => {
      return chartStyles.colorPalettes[palette] || chartStyles.colorPalettes.default;
    },

    // Get size styles
    getSizeStyles: (size = 'medium') => {
      return chartStyles.sizes[size] || chartStyles.sizes.medium;
    },

    // Get theme styles
    getThemeStyles: (theme = 'light') => {
      return chartStyles.themes[theme] || chartStyles.themes.light;
    },

    // Get combined styles
    getStyles: (size = 'medium', theme = 'light', palette = 'default') => {
      return {
        ...chartStyles.cssVariables,
        ...chartStyles.sizes[size],
        ...chartStyles.themes[theme],
        '--chart-colors': chartStyles.colorPalettes[palette].join(', '),
      };
    },

    // Calculate chart dimensions
    getChartDimensions: (width, height, margin = { top: 20, right: 20, bottom: 40, left: 60 }) => {
      const chartWidth = width - margin.left - margin.right;
      const chartHeight = height - margin.top - margin.bottom;
      return { chartWidth, chartHeight };
    },

    // Generate random data for testing
    generateTestData: (type, count = 5) => {
      switch (type) {
        case 'bar':
          return Array.from({ length: count }, (_, i) => ({
            label: `Item ${i + 1}`,
            value: Math.floor(Math.random() * 100) + 10,
          }));

        case 'line':
          return [
            {
              name: 'Series 1',
              data: Array.from({ length: count }, (_, i) => ({
                x: i,
                y: Math.floor(Math.random() * 100) + 10,
                label: `Point ${i + 1}`,
              })),
            },
            {
              name: 'Series 2',
              data: Array.from({ length: count }, (_, i) => ({
                x: i,
                y: Math.floor(Math.random() * 100) + 10,
                label: `Point ${i + 1}`,
              })),
            },
          ];

        case 'pie':
          return Array.from({ length: count }, (_, i) => ({
            label: `Slice ${i + 1}`,
            value: Math.floor(Math.random() * 100) + 10,
          }));

        default:
          return [];
      }
    },

    // Format numbers for display
    formatNumber: (value, format = 'number') => {
      switch (format) {
        case 'currency':
          return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(value);
        case 'percent':
          return `${value.toFixed(1)}%`;
        case 'decimal':
          return value.toFixed(2);
        default:
          return value.toLocaleString();
      }
    },

    // Calculate accessible colors
    getContrastColor: (backgroundColor) => {
      // Simple contrast calculation (in production, use a proper library)
      const hex = backgroundColor.replace('#', '');
      const r = parseInt(hex.substr(0, 2), 16);
      const g = parseInt(hex.substr(2, 2), 16);
      const b = parseInt(hex.substr(4, 2), 16);
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;
      return brightness > 128 ? '#000000' : '#ffffff';
    },
  },

  // Animation presets
  animations: {
    barEnter: {
      from: { height: 0, opacity: 0 },
      to: { height: '100%', opacity: 1 },
    },
    lineDraw: {
      from: { strokeDasharray: '0 1000', opacity: 0 },
      to: { strokeDasharray: 'none', opacity: 1 },
    },
    pieSlice: {
      from: { opacity: 0, transform: 'scale(0)' },
      to: { opacity: 1, transform: 'scale(1)' },
    },
    tooltipFade: {
      from: { opacity: 0, transform: 'translateY(-4px)' },
      to: { opacity: 1, transform: 'translateY(0)' },
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
    chart: 1,
    legend: 10,
    tooltip: 1000,
    overlay: 10000,
  },
};

export default chartStyles;
