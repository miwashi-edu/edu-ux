import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Toggle.module.css';

const Toggle = forwardRef(function Toggle({
  checked = false,
  disabled = false,
  label,
  size = 'md',
  className = '',
  onChange,
  ...props
}, ref) {
  return (
    <label className={[styles.toggle, disabled ? styles.disabled : '', className].filter(Boolean).join(' ')}>
      <input
        ref={ref}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        className={styles.input}
        {...props}
      />
      <span className={[styles.slider, styles[size]].join(' ')} />
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
});

Toggle.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.node,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
  onChange: PropTypes.func
};

Toggle.displayName = 'Toggle';

export { Toggle };
