import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styles from './DateInput.module.css';

const DateInput = forwardRef(function DateInput({
  value,
  placeholder = '',
  disabled = false,
  label,
  error,
  min,
  max,
  className = '',
  onChange,
  ...props
}, ref) {
  return (
    <label className={[styles.dateField, disabled ? styles.disabled : '', error ? styles.error : '', className].filter(Boolean).join(' ')}>
      {label && <span className={styles.label}>{label}</span>}
      <input
        ref={ref}
        type="date"
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        min={min}
        max={max}
        aria-invalid={!!error}
        onChange={onChange}
        className={styles.input}
        {...props}
      />
      {error && <span className={styles.errorMsg}>{error}</span>}
    </label>
  );
});

DateInput.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.node,
  error: PropTypes.node,
  min: PropTypes.string,
  max: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func
};

DateInput.displayName = 'DateInput';

export { DateInput };
