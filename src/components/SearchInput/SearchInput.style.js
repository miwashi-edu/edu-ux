export const searchInputStyles = {
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
  inputWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  searchIcon: {
    position: 'absolute',
    left: '0.75em',
    color: '#6b7280',
    fontSize: '1em',
    pointerEvents: 'none',
  },
  input: {
    width: '100%',
    padding: '0.5em 1em 0.5em 2.5em',
    border: '1px solid #d1d5db',
    borderRadius: 4,
    fontSize: '1em',
    transition: 'border-color 0.2s',
    outline: 'none',
  },
  clearButton: {
    position: 'absolute',
    right: '0.5em',
    background: 'none',
    border: 'none',
    color: '#6b7280',
    cursor: 'pointer',
    padding: '0.25em',
    borderRadius: '50%',
    fontSize: '0.9em',
    transition: 'background 0.2s',
  },
  error: {
    borderColor: '#dc2626',
  },
  errorMsg: {
    color: '#dc2626',
    fontSize: '0.9em',
  },
};
