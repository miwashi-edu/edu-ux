import React from 'react';
import PropTypes from 'prop-types';
import styles from './Meter.module.css';

/**
 * MeterTrack - The background track of the meter
 */
export function MeterTrack({ children, className, ...props }) {
  return (
    <div 
      className={`${styles.meterTrack} ${className || ''}`}
      role="presentation"
      {...props}
    >
      {children}
    </div>
  );
}

MeterTrack.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

/**
 * MeterFill - The filled portion of the meter
 */
export function MeterFill({ 
  value, 
  max, 
  variant = 'default', 
  className, 
  ...props 
}) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  
  return (
    <div 
      className={`${styles.meterFill} ${styles[`fill${variant.charAt(0).toUpperCase() + variant.slice(1)}`]} ${className || ''}`}
      style={{ width: `${percentage}%` }}
      role="presentation"
      {...props}
    />
  );
}

MeterFill.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  variant: PropTypes.oneOf(['default', 'success', 'warning', 'danger', 'info']),
  className: PropTypes.string,
};

/**
 * MeterLabel - Label for the meter
 */
export function MeterLabel({ children, className, ...props }) {
  return (
    <div 
      className={`${styles.meterLabel} ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  );
}

MeterLabel.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

/**
 * MeterValue - Display the current value
 */
export function MeterValue({ 
  value, 
  max, 
  showPercentage = false, 
  className, 
  ...props 
}) {
  const percentage = Math.round((value / max) * 100);
  
  return (
    <div 
      className={`${styles.meterValue} ${className || ''}`}
      {...props}
    >
      {showPercentage ? `${percentage}%` : value}
    </div>
  );
}

MeterValue.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  showPercentage: PropTypes.bool,
  className: PropTypes.string,
};

/**
 * MeterThreshold - Visual threshold indicators
 */
export function MeterThreshold({ 
  thresholds = [], 
  className, 
  ...props 
}) {
  if (!thresholds.length) return null;
  
  return (
    <div 
      className={`${styles.meterThresholds} ${className || ''}`}
      role="presentation"
      {...props}
    >
      {thresholds.map((threshold, index) => (
        <div
          key={index}
          className={styles.meterThreshold}
          style={{ left: `${threshold.value}%` }}
          title={threshold.label || `${threshold.value}%`}
        />
      ))}
    </div>
  );
}

MeterThreshold.propTypes = {
  thresholds: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number.isRequired,
    label: PropTypes.string,
  })),
  className: PropTypes.string,
}; 