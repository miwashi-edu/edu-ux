import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Checkbox.module.css';

const CheckboxIcon = ({ checked, indeterminate }) => (
  <span className={styles.icon} aria-hidden="true">
    {indeterminate ? <span className={styles.indeterminate} /> : checked ? <span className={styles.checked} /> : null}
  </span>
);

CheckboxIcon.propTypes = {
  checked: PropTypes.bool,
  indeterminate: PropTypes.bool
};

const Checkbox = forwardRef(function Checkbox({
  checked = false,
  indeterminate = false,
  disabled = false,
  label,
  className = '',
  onChange,
  ...props
}, ref) {
  return (
    <label className={[styles.checkbox, disabled ? styles.disabled : '', className].filter(Boolean).join(' ')}>
      <input
        ref={ref}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        aria-checked={indeterminate ? 'mixed' : checked}
        onChange={onChange}
        className={styles.input}
        {...props}
      />
      <CheckboxIcon checked={checked} indeterminate={indeterminate} />
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
});

Checkbox.propTypes = {
  checked: PropTypes.bool,
  indeterminate: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.node,
  className: PropTypes.string,
  onChange: PropTypes.func
};

Checkbox.displayName = 'Checkbox';
Checkbox.Icon = CheckboxIcon;

export { Checkbox };
