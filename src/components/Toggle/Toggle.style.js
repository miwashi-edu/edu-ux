export const toggleStyles = {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5em',
    cursor: 'pointer',
    userSelect: 'none',
  },
  slider: {
    position: 'relative',
    background: '#d1d5db',
    borderRadius: '1em',
    transition: 'background 0.2s',
    display: 'inline-block',
  },
  checked: {
    background: '#2563eb',
  },
  label: {
    fontSize: '1em',
    color: '#222',
  },
  sizes: {
    sm: {
      width: '2rem',
      height: '1rem',
    },
    md: {
      width: '3rem',
      height: '1.5rem',
    },
    lg: {
      width: '4rem',
      height: '2rem',
    },
  },
};
