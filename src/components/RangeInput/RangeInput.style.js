export const rangeInputStyles = {
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
  rangeWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '1em',
  },
  input: {
    flex: 1,
    height: '0.5em',
    borderRadius: '0.25em',
    background: '#e5e7eb',
    outline: 'none',
    WebkitAppearance: 'none',
    appearance: 'none',
  },
  value: {
    minWidth: '3em',
    textAlign: 'center',
    fontWeight: 500,
    color: '#2563eb',
  },
  error: {
    background: '#fef2f2',
  },
  errorMsg: {
    color: '#dc2626',
    fontSize: '0.9em',
  },
};
