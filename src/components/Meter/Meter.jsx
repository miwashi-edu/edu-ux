import React from 'react';
import PropTypes from 'prop-types';
import styles from './Meter.module.css';
import { MeterTrack, MeterFill, MeterLabel, MeterValue, MeterThreshold } from './Meter.atom';

/**
 * Meter - A progress indicator component for displaying values within a range
 * 
 * @param {Object} props - Component props
 * @param {number} props.value - Current value (required)
 * @param {number} props.max - Maximum value (required)
 * @param {number} props.min - Minimum value (default: 0)
 * @param {string} props.variant - Visual variant (default, success, warning, danger, info)
 * @param {string} props.size - Size variant (sm, md, lg, xl)
 * @param {string} props.label - Label text
 * @param {boolean} props.showValue - Whether to show the value
 * @param {boolean} props.showPercentage - Whether to show percentage instead of value
 * @param {Array} props.thresholds - Array of threshold objects with value and label
 * @param {boolean} props.animated - Whether to animate the fill
 * @param {boolean} props.striped - Whether to show striped pattern
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.style - Inline styles
 * @param {Object} props... - Additional props passed to the meter element
 */
export function Meter({
  value,
  max,
  min = 0,
  variant = 'default',
  size = 'md',
  label,
  showValue = true,
  showPercentage = false,
  thresholds = [],
  animated = true,
  striped = false,
  className = '',
  style,
  ...props
}) {
  // Validate and clamp values
  const clampedValue = Math.min(Math.max(value, min), max);
  const percentage = ((clampedValue - min) / (max - min)) * 100;
  
  // Determine variant based on percentage if not explicitly set
  const getVariant = () => {
    if (variant !== 'default') return variant;
    
    if (percentage >= 80) return 'danger';
    if (percentage >= 60) return 'warning';
    if (percentage >= 40) return 'info';
    return 'success';
  };
  
  const currentVariant = getVariant();
  
  const meterClasses = [
    styles.meter,
    styles[`size${size.charAt(0).toUpperCase() + size.slice(1)}`],
    animated && styles.animated,
    striped && styles.striped,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={meterClasses} style={style} {...props}>
      {(label || showValue) && (
        <div className={styles.meterHeader}>
          {label && (
            <MeterLabel className={styles.label}>
              {label}
            </MeterLabel>
          )}
          {showValue && (
            <MeterValue 
              value={clampedValue} 
              max={max} 
              showPercentage={showPercentage}
              className={styles.value}
            />
          )}
        </div>
      )}
      
      <MeterTrack className={styles.track}>
        <MeterFill 
          value={clampedValue} 
          max={max} 
          variant={currentVariant}
          className={styles.fill}
        />
        {thresholds.length > 0 && (
          <MeterThreshold 
            thresholds={thresholds}
            className={styles.thresholds}
          />
        )}
      </MeterTrack>
      
      <meter
        value={clampedValue}
        min={min}
        max={max}
        className={styles.nativeMeter}
        aria-label={label || `Progress: ${Math.round(percentage)}%`}
        aria-valuenow={clampedValue}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuetext={`${Math.round(percentage)}%`}
      />
    </div>
  );
}

Meter.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  min: PropTypes.number,
  variant: PropTypes.oneOf(['default', 'success', 'warning', 'danger', 'info']),
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  label: PropTypes.string,
  showValue: PropTypes.bool,
  showPercentage: PropTypes.bool,
  thresholds: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number.isRequired,
    label: PropTypes.string,
  })),
  animated: PropTypes.bool,
  striped: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
};
