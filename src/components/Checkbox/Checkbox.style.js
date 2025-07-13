export const checkboxStyles = {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    cursor: 'pointer',
    userSelect: 'none',
    gap: '0.5em',
  },
  icon: {
    width: '1.25em',
    height: '1.25em',
    border: '2px solid #2563eb',
    borderRadius: 4,
    background: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'border-color 0.2s, background 0.2s',
  },
  checked: {
    width: '0.75em',
    height: '0.75em',
    background: '#2563eb',
    borderRadius: 2,
    display: 'block',
  },
  indeterminate: {
    width: '0.75em',
    height: '0.2em',
    background: '#2563eb',
    borderRadius: 1,
    display: 'block',
  },
};
