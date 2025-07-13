export const textareaStyles = {
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
  textarea: {
    padding: '0.5em 1em',
    border: '1px solid #d1d5db',
    borderRadius: 4,
    fontSize: '1em',
    fontFamily: 'inherit',
    resize: 'vertical',
    minHeight: '2.5em',
    transition: 'border-color 0.2s',
    outline: 'none',
  },
  error: {
    borderColor: '#dc2626',
  },
  errorMsg: {
    color: '#dc2626',
    fontSize: '0.9em',
  },
};
