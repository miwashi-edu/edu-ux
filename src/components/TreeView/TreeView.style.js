/**
 * TreeView Component Styles Configuration
 * Provides theme variables and utility functions for the TreeView component
 */

// Theme configuration for TreeView variants
export const treeViewTheme = {
  variants: {
    default: {
      padding: '0.5rem',
      itemMargin: '0.125rem',
      contentPadding: '0.5rem 0.75rem',
    },
    compact: {
      padding: '0.25rem',
      itemMargin: '0.125rem',
      contentPadding: '0.25rem 0.5rem',
    },
    large: {
      padding: '1rem',
      itemMargin: '0.5rem',
      contentPadding: '0.75rem 1rem',
    },
  },
  sizes: {
    sm: {
      fontSize: '0.875rem',
      iconSize: '1rem',
      iconFontSize: '0.75rem',
      toggleSize: '1.25rem',
      toggleFontSize: '0.75rem',
    },
    md: {
      fontSize: '1rem',
      iconSize: '1.25rem',
      iconFontSize: '1rem',
      toggleSize: '1.5rem',
      toggleFontSize: '0.875rem',
    },
    lg: {
      fontSize: '1.125rem',
      iconSize: '1.5rem',
      iconFontSize: '1.25rem',
      toggleSize: '1.75rem',
      toggleFontSize: '1rem',
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
    selection: {
      light: '#eff6ff',
      dark: '#1e3a8a',
    },
    hover: {
      light: '#f9fafb',
      dark: '#374151',
    },
  },
  indentation: {
    level0: '0',
    level1: '1.5rem',
    level2: '3rem',
    level3: '4.5rem',
    level4: '6rem',
    level5: '7.5rem',
  },
};

// Utility functions
export const getTreeViewStyles = (variant = 'default', size = 'md', customStyles = {}) => {
  const baseStyles = {
    display: 'flex',
    flexDirection: 'column',
    background: treeViewTheme.colors.background.light,
    border: `1px solid ${treeViewTheme.colors.border.light}`,
    borderRadius: '0.5rem',
    padding: treeViewTheme.variants[variant].padding,
    fontSize: treeViewTheme.sizes[size].fontSize,
    lineHeight: 1.5,
    color: treeViewTheme.colors.text.primary.light,
    maxHeight: '100%',
    overflowY: 'auto',
    ...customStyles,
  };

  return baseStyles;
};

export const getTreeViewItemStyles = (level = 0, selected = false, customStyles = {}) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    margin: '0.125rem 0',
    marginLeft: treeViewTheme.indentation[`level${level}`] || '0',
    borderRadius: '0.375rem',
    background: selected ? treeViewTheme.colors.selection.light : 'transparent',
    border: selected ? `1px solid #3b82f6` : 'none',
    transition: 'all 0.2s ease-in-out',
    ...customStyles,
  };
};

export const getTreeViewContentStyles = (variant = 'default', customStyles = {}) => {
  return {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: treeViewTheme.variants[variant].contentPadding,
    borderRadius: '0.375rem',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease-in-out',
    ...customStyles,
  };
};

export const getTreeViewIconStyles = (variant = 'default', size = 'md', customStyles = {}) => {
  const iconColors = {
    default: treeViewTheme.colors.text.secondary.light,
    folder: '#f59e0b',
    file: treeViewTheme.colors.text.secondary.light,
    custom: '#8b5cf6',
  };

  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: treeViewTheme.sizes[size].iconSize,
    height: treeViewTheme.sizes[size].iconSize,
    fontSize: treeViewTheme.sizes[size].iconFontSize,
    color: iconColors[variant],
    flexShrink: 0,
    borderRadius: '0.25rem',
    ...customStyles,
  };
};

export const getTreeViewToggleStyles = (size = 'md', customStyles = {}) => {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: treeViewTheme.sizes[size].toggleSize,
    height: treeViewTheme.sizes[size].toggleSize,
    fontSize: treeViewTheme.sizes[size].toggleFontSize,
    background: 'transparent',
    border: 'none',
    borderRadius: '0.25rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    flexShrink: 0,
    ...customStyles,
  };
};

// Animation configurations
export const treeViewAnimations = {
  expand: {
    duration: '0.3s',
    easing: 'ease-in-out',
  },
  toggle: {
    duration: '0.2s',
    easing: 'ease-in-out',
  },
  hover: {
    duration: '0.2s',
    easing: 'ease-in-out',
  },
};

// Accessibility helpers
export const getAccessibilityProps = (level = 0, expanded = false, selected = false, disabled = false) => {
  return {
    role: 'treeitem',
    'aria-expanded': expanded,
    'aria-selected': selected,
    'aria-disabled': disabled,
    'aria-level': level + 1,
  };
};

// Responsive breakpoints
export const treeViewBreakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};

// Data structure helpers
export const createTreeItem = (id, label, options = {}) => {
  return {
    id,
    label,
    icon: options.icon,
    iconVariant: options.iconVariant || 'default',
    labelVariant: options.labelVariant || 'default',
    children: options.children || [],
    disabled: options.disabled || false,
  };
};

export const flattenTreeData = (data, result = []) => {
  data.forEach(item => {
    result.push(item);
    if (item.children && item.children.length > 0) {
      flattenTreeData(item.children, result);
    }
  });
  return result;
};

// Export default theme
export default treeViewTheme;
