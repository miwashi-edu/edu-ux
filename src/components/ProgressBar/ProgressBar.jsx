import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ProgressBar.module.css';
import { getProgressBarStyles } from './ProgressBar.style';

/**
 * ProgressBar component for indicating task or loading progress
 * Provides accessibility features, smooth animations, and multiple variants
 */
const ProgressBar = ({
  value = 0,
  max = 100,
  variant = 'default',
  size = 'medium',
  animated = true,
  showLabel = false,
  labelPosition = 'top',
  className = '',
  style = {},
  ...props
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Calculate percentage
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  const isIndeterminate = value === null || value === undefined;

  // Animate progress changes
  useEffect(() => {
    if (animated && !isIndeterminate) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        setDisplayValue(percentage);
        setIsAnimating(false);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setDisplayValue(percentage);
    }
  }, [percentage, animated, isIndeterminate]);

  const progressBarStyles = getProgressBarStyles({ variant, size, animated });
  const combinedClassName = `${styles.progressBar} ${progressBarStyles.progressBar} ${className}`.trim();

  const progressBarId = `progress-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div
      className={combinedClassName}
      style={{ ...progressBarStyles.style, ...style }}
      role="progressbar"
      aria-valuenow={isIndeterminate ? undefined : value}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuetext={isIndeterminate ? 'Loading...' : `${Math.round(percentage)}%`}
      aria-label={props['aria-label'] || 'Progress'}
      id={progressBarId}
      {...props}
    >
      {/* Label */}
      {showLabel && labelPosition === 'top' && (
        <div className={styles.label}>
          {isIndeterminate ? 'Loading...' : `${Math.round(percentage)}%`}
        </div>
      )}

      {/* Progress Bar Container */}
      <div className={styles.progressContainer}>
        {/* Progress Fill */}
        <div
          className={`${styles.progressFill} ${isAnimating ? styles.animating : ''} ${
            isIndeterminate ? styles.indeterminate : ''
          }`}
          style={{
            width: isIndeterminate ? '100%' : `${displayValue}%`,
            transition: animated && !isIndeterminate ? 'width 0.3s ease-out' : 'none'
          }}
        >
          {/* Striped pattern for certain variants */}
          {(variant === 'striped' || variant === 'animated') && !isIndeterminate && (
            <div className={styles.stripes} />
          )}
        </div>

        {/* Indeterminate animation */}
        {isIndeterminate && (
          <div className={styles.indeterminateBar} />
        )}
      </div>

      {/* Label */}
      {showLabel && labelPosition === 'bottom' && (
        <div className={styles.label}>
          {isIndeterminate ? 'Loading...' : `${Math.round(percentage)}%`}
        </div>
      )}
    </div>
  );
};

ProgressBar.propTypes = {
  /** Current progress value */
  value: PropTypes.number,
  /** Maximum progress value */
  max: PropTypes.number,
  /** Visual variant of the progress bar */
  variant: PropTypes.oneOf(['default', 'striped', 'animated', 'gradient', 'success', 'warning', 'error']),
  /** Size of the progress bar */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Whether to animate progress changes */
  animated: PropTypes.bool,
  /** Whether to show the progress label */
  showLabel: PropTypes.bool,
  /** Position of the progress label */
  labelPosition: PropTypes.oneOf(['top', 'bottom']),
  /** Additional CSS class name */
  className: PropTypes.string,
  /** Additional inline styles */
  style: PropTypes.object,
  /** Accessibility label */
  'aria-label': PropTypes.string,
};

export default ProgressBar;
