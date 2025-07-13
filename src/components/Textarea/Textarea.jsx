import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Textarea.module.css';

const Textarea = forwardRef(function Textarea({
  value,
  placeholder = '',
  disabled = false,
  label,
  error,
  rows = 4,
  cols,
  className = '',
  onChange,
  ...props
}, ref) {
  return (
    <label className={[styles.textareaField, disabled ? styles.disabled : '', error ? styles.error : '', className].filter(Boolean).join(' ')}>
      {label && <span className={styles.label}>{label}</span>}
      <textarea
        ref={ref}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        cols={cols}
        aria-invalid={!!error}
        onChange={onChange}
        className={styles.textarea}
        {...props}
      />
      {error && <span className={styles.errorMsg}>{error}</span>}
    </label>
  );
});

Textarea.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.node,
  error: PropTypes.node,
  rows: PropTypes.number,
  cols: PropTypes.number,
  className: PropTypes.string,
  onChange: PropTypes.func
};

Textarea.displayName = 'Textarea';

export { Textarea };
