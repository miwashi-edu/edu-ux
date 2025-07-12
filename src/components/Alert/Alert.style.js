export const AlertStyles = {
  // Base styles
  base: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    borderRadius: '8px',
    border: '1px solid transparent',
    fontSize: '14px',
    lineHeight: 1.5,
    marginBottom: '16px',
    transition: 'all 0.2s ease',
  },

  // Alert types
  types: {
    info: {
      backgroundColor: '#eff6ff',
      borderColor: '#bfdbfe',
      color: '#1e40af',
      iconColor: '#3b82f6',
    },
    success: {
      backgroundColor: '#f0fdf4',
      borderColor: '#bbf7d0',
      color: '#166534',
      iconColor: '#22c55e',
    },
    warning: {
      backgroundColor: '#fffbeb',
      borderColor: '#fed7aa',
      color: '#92400e',
      iconColor: '#f59e0b',
    },
    error: {
      backgroundColor: '#fef2f2',
      borderColor: '#fecaca',
      color: '#991b1b',
      iconColor: '#ef4444',
    },
  },

  // Alert variants
  variants: {
    default: {
      padding: '12px 16px',
    },
    bordered: {
      borderWidth: '2px',
    },
    flat: {
      border: 'none',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    },
    compact: {
      padding: '8px 12px',
      fontSize: '13px',
    },
  },

  // Content layout
  content: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
  },

  // Message styles
  message: {
    flex: 1,
    minWidth: 0,
  },

  // Icon styles
  icon: {
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20px',
    height: '20px',
    marginTop: '2px',
  },

  // Close button styles
  close: {
    flexShrink: 0,
    background: 'none',
    border: 'none',
    padding: '4px',
    cursor: 'pointer',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '24px',
    height: '24px',
    transition: 'all 0.2s ease',
    opacity: 0.7,
  },

  closeHover: {
    opacity: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },

  closeFocus: {
    outline: '2px solid currentColor',
    outlineOffset: '2px',
  },

  // Dark theme styles
  dark: {
    info: {
      backgroundColor: '#1e3a8a',
      borderColor: '#3b82f6',
      color: '#dbeafe',
      iconColor: '#60a5fa',
    },
    success: {
      backgroundColor: '#14532d',
      borderColor: '#22c55e',
      color: '#dcfce7',
      iconColor: '#4ade80',
    },
    warning: {
      backgroundColor: '#78350f',
      borderColor: '#f59e0b',
      color: '#fef3c7',
      iconColor: '#fbbf24',
    },
    error: {
      backgroundColor: '#7f1d1d',
      borderColor: '#ef4444',
      color: '#fee2e2',
      iconColor: '#f87171',
    },
    closeHover: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  },

  // Responsive breakpoints
  responsive: {
    tablet: {
      padding: '10px 14px',
      fontSize: '13px',
      gap: '10px',
      iconSize: '18px',
      closeSize: '22px',
    },
    mobile: {
      padding: '8px 12px',
      fontSize: '12px',
      gap: '8px',
      iconSize: '16px',
      closeSize: '20px',
    },
  },

  // Animation configurations
  animations: {
    slideIn: {
      keyframes: {
        from: {
          opacity: 0,
          transform: 'translateY(-10px)',
        },
        to: {
          opacity: 1,
          transform: 'translateY(0)',
        },
      },
      duration: '0.3s',
      easing: 'ease-out',
    },
    slideOut: {
      keyframes: {
        from: {
          opacity: 1,
          transform: 'translateY(0)',
        },
        to: {
          opacity: 0,
          transform: 'translateY(-10px)',
        },
      },
      duration: '0.2s',
      easing: 'ease-in',
    },
  },

  // Accessibility styles
  accessibility: {
    focusVisible: {
      outline: '2px solid currentColor',
      outlineOffset: '2px',
    },
    highContrast: {
      borderWidth: '2px',
      closeBorder: '1px solid currentColor',
      closeFocus: {
        outline: '3px solid currentColor',
        outlineOffset: '1px',
      },
    },
    reducedMotion: {
      animation: 'none',
      transition: 'none',
    },
  },

  // Auto-dismiss configurations
  autoDismiss: {
    defaultTimeout: 5000,
    warningTimeout: 8000,
    errorTimeout: 10000,
    successTimeout: 3000,
  },
};
