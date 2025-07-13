import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styles from './InputField.module.css';

const InputField = forwardRef(function InputField({
  type = 'text',
  value,
  placeholder = '',
  disabled = false,
  label,
  error,
  className = '',
  onChange,
  ...props
}, ref) {
  return (
    <label className={[styles.inputField, disabled ? styles.disabled : '', error ? styles.error : '', className].filter(Boolean).join(' ')}>
      {label && <span className={styles.label}>{label}</span>}
      <input
        ref={ref}
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={!!error}
        onChange={onChange}
        className={styles.input}
        {...props}
      />
      {error && <span className={styles.errorMsg}>{error}</span>}
    </label>
  );
});

InputField.propTypes = {
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.node,
  error: PropTypes.node,
  className: PropTypes.string,
  onChange: PropTypes.func
};

InputField.displayName = 'InputField';

export { InputField };
