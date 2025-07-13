import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styles from './RangeInput.module.css';

const RangeInput = forwardRef(function RangeInput({
  value = 50,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  label,
  error,
  showValue = true,
  className = '',
  onChange,
  ...props
}, ref) {
  return (
    <label className={[styles.rangeField, disabled ? styles.disabled : '', error ? styles.error : '', className].filter(Boolean).join(' ')}>
      {label && <span className={styles.label}>{label}</span>}
      <div className={styles.rangeWrapper}>
        <input
          ref={ref}
          type="range"
          value={value}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          aria-invalid={!!error}
          onChange={onChange}
          className={styles.input}
          {...props}
        />
        {showValue && <span className={styles.value}>{value}</span>}
      </div>
      {error && <span className={styles.errorMsg}>{error}</span>}
    </label>
  );
});

RangeInput.propTypes = {
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  disabled: PropTypes.bool,
  label: PropTypes.node,
  error: PropTypes.node,
  showValue: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func
};

RangeInput.displayName = 'RangeInput';

export { RangeInput };
