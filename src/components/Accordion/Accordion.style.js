export const AccordionStyles = {
  // Base styles
  base: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    borderRadius: '8px',
    overflow: 'hidden',
  },

  // Variant styles
  variants: {
    default: {
      border: '1px solid #e2e8f0',
      backgroundColor: '#ffffff',
    },
    bordered: {
      border: '2px solid #e2e8f0',
      backgroundColor: '#ffffff',
    },
    flat: {
      border: 'none',
      backgroundColor: '#f8fafc',
    },
    card: {
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      backgroundColor: '#ffffff',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    },
  },

  // Header styles
  header: {
    base: {
      width: '100%',
      padding: '16px 20px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      textAlign: 'left',
      fontSize: '16px',
      fontWeight: '500',
      color: '#1a202c',
      transition: 'all 0.2s ease',
      position: 'relative',
    },
    hover: {
      backgroundColor: '#f7fafc',
    },
    focus: {
      backgroundColor: '#edf2f7',
      outline: 'none',
    },
    expanded: {
      backgroundColor: '#f7fafc',
      borderBottom: '1px solid #e2e8f0',
    },
    disabled: {
      cursor: 'not-allowed',
      opacity: 0.6,
    },
  },

  // Content styles
  content: {
    base: {
      overflow: 'hidden',
      transition: 'height 0.3s ease',
      backgroundColor: '#ffffff',
    },
    expanded: {
      borderBottom: '1px solid #e2e8f0',
    },
    inner: {
      padding: '20px',
      color: '#4a5568',
      lineHeight: 1.6,
    },
  },

  // Icon styles
  icon: {
    base: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '20px',
      height: '20px',
      flexShrink: 0,
    },
    chevron: {
      transition: 'transform 0.2s ease',
      color: '#64748b',
    },
    rotated: {
      transform: 'rotate(180deg)',
    },
  },

  // Item styles
  item: {
    base: {
      borderBottom: '1px solid #e2e8f0',
      transition: 'all 0.2s ease',
    },
    last: {
      borderBottom: 'none',
    },
    disabled: {
      opacity: 0.6,
      pointerEvents: 'none',
    },
  },

  // Dark theme styles
  dark: {
    default: {
      backgroundColor: '#1a202c',
      borderColor: '#2d3748',
    },
    header: {
      color: '#e2e8f0',
    },
    headerHover: {
      backgroundColor: '#2d3748',
    },
    headerFocus: {
      backgroundColor: '#2d3748',
    },
    headerExpanded: {
      backgroundColor: '#2d3748',
      borderBottomColor: '#4a5568',
    },
    content: {
      backgroundColor: '#1a202c',
    },
    contentInner: {
      color: '#a0aec0',
    },
    icon: {
      color: '#a0aec0',
    },
  },

  // Responsive breakpoints
  responsive: {
    tablet: {
      header: {
        padding: '14px 16px',
        fontSize: '15px',
      },
      contentInner: {
        padding: '16px',
      },
      icon: {
        width: '18px',
        height: '18px',
      },
    },
    mobile: {
      header: {
        padding: '12px 14px',
        fontSize: '14px',
      },
      contentInner: {
        padding: '14px',
      },
    },
  },

  // Animation configurations
  animations: {
    content: {
      transition: 'height 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    header: {
      transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    chevron: {
      transition: 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },

  // Accessibility styles
  accessibility: {
    focusVisible: {
      outline: '2px solid #3182ce',
      outlineOffset: '-2px',
    },
    highContrast: {
      header: {
        borderBottom: '2px solid currentColor',
      },
      focus: {
        outline: '3px solid currentColor',
        outlineOffset: '-3px',
      },
    },
  },
};
