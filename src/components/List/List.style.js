// List component theme and utility functions

export const listTheme = {
  variants: {
    plain: {
      background: 'none',
      border: 'none',
    },
    bordered: {
      background: '#fff',
      border: '1px solid #e5e7eb',
    },
    inset: {
      background: '#f9fafb',
      border: 'none',
      padding: '0.5rem 1rem',
    },
    elevated: {
      background: '#fff',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      border: 'none',
    },
  },
  sizes: {
    sm: {
      fontSize: '0.875rem',
      gap: '0.25rem',
    },
    md: {
      fontSize: '1rem',
      gap: '0.5rem',
    },
    lg: {
      fontSize: '1.125rem',
      gap: '0.75rem',
    },
  },
};

export const getListStyles = (variant = 'plain', size = 'md', custom = {}) => ({
  ...listTheme.variants[variant],
  ...listTheme.sizes[size],
  ...custom,
});

export const getListItemStyles = (size = 'md', custom = {}) => ({
  fontSize: listTheme.sizes[size].fontSize,
  ...custom,
});

export const getListIconStyles = (custom = {}) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '1.25em',
  minHeight: '1.25em',
  fontSize: '1em',
  color: '#6b7280',
  flexShrink: 0,
  ...custom,
});

export const getAccessibilityProps = (as = 'ul') => ({
  role: 'list',
  'aria-label': as === 'ul' ? 'List' : 'Ordered List',
});
