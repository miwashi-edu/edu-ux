// Table theme and style utilities
export const tableTheme = {
  variants: {
    default: {},
    striped: {},
    bordered: {},
    hover: {},
    compact: {},
  },
  sizes: {
    sm: { fontSize: '0.875rem' },
    md: { fontSize: '1rem' },
    lg: { fontSize: '1.125rem' },
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
};

export const getTableStyles = (variant = 'default', size = 'md', custom = {}) => ({
  width: '100%',
  borderCollapse: 'collapse',
  fontSize: tableTheme.sizes[size].fontSize,
  ...custom,
});

export const getCellStyles = (custom = {}) => ({
  padding: '0.75rem 1rem',
  borderBottom: '1px solid #e5e7eb',
  textAlign: 'left',
  verticalAlign: 'middle',
  ...custom,
});

export const getHeaderCellStyles = (custom = {}) => ({
  padding: '0.75rem 1rem',
  borderBottom: '2px solid #e5e7eb',
  textAlign: 'left',
  fontWeight: 700,
  background: '#f3f4f6',
  ...custom,
});

export const getFooterStyles = (custom = {}) => ({
  background: '#f9fafb',
  color: '#6b7280',
  fontWeight: 500,
  ...custom,
});

export const getCaptionStyles = (custom = {}) => ({
  captionSide: 'bottom',
  padding: '0.5rem',
  color: '#6b7280',
  fontSize: '0.95em',
  textAlign: 'left',
  ...custom,
});

export const tableBreakpoints = tableTheme.breakpoints;

export default tableTheme;
