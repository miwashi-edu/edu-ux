export const fileInputStyles = {
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25em',
    fontSize: '1em',
  },
  label: {
    fontWeight: 500,
    color: '#222',
  },
  fileDisplay: {
    padding: '0.5em 1em',
    border: '1px solid #d1d5db',
    borderRadius: 4,
    background: '#fff',
    fontSize: '1em',
    minHeight: '2.5em',
    display: 'flex',
    alignItems: 'center',
    color: '#444',
    cursor: 'pointer',
    transition: 'border-color 0.2s',
  },
  error: {
    borderColor: '#dc2626',
  },
  errorMsg: {
    color: '#dc2626',
    fontSize: '0.9em',
  },
};
