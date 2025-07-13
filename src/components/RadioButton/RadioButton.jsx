import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styles from './RadioButton.module.css';

const RadioIcon = ({ checked }) => (
  <span className={styles.icon} aria-hidden="true">
    {checked ? <span className={styles.checked} /> : null}
  </span>
);

RadioIcon.propTypes = {
  checked: PropTypes.bool
};

const RadioButton = forwardRef(function RadioButton({
  checked = false,
  disabled = false,
  label,
  name,
  value,
  className = '',
  onChange,
  ...props
}, ref) {
  return (
    <label className={[styles.radio, disabled ? styles.disabled : '', className].filter(Boolean).join(' ')}>
      <input
        ref={ref}
        type="radio"
        checked={checked}
        disabled={disabled}
        name={name}
        value={value}
        onChange={onChange}
        className={styles.input}
        {...props}
      />
      <RadioIcon checked={checked} />
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
});

RadioButton.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.node,
  name: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func
};

RadioButton.displayName = 'RadioButton';
RadioButton.Icon = RadioIcon;

export { RadioButton };
