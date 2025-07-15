import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Toggle.module.css';

// Atomic subcomponents (for advanced use)
export const ToggleInput = forwardRef(function ToggleInput({
  checked = false,
  disabled = false,
  onChange,
  className = '',
  ...props
}, ref) {
  return (
    <input
      ref={ref}
      type="checkbox"
      checked={checked}
      disabled={disabled}
      onChange={onChange}
      className={`${styles.input} ${className}`.trim()}
      {...props}
    />
  );
});

ToggleInput.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string
};

ToggleInput.displayName = 'ToggleInput';

export const ToggleSlider = ({ size = 'md', className = '', ...props }) => {
  return (
    <span 
      className={`${styles.slider} ${styles[size]} ${className}`.trim()}
      {...props}
    />
  );
};

ToggleSlider.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string
};

export const ToggleLabel = ({ children, className = '', ...props }) => {
  return (
    <span className={`${styles.label} ${className}`.trim()} {...props}>
      {children}
    </span>
  );
};

ToggleLabel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

// Main component: input and span.slider must be direct siblings for CSS to work
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
    <label className={`${styles.toggle} ${disabled ? styles.disabled : ''} ${className}`.trim()}>
      <input
        ref={ref}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        className={styles.input}
        {...props}
      />
      <span className={`${styles.slider} ${styles[size]}`.trim()} />
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
export default Toggle;
