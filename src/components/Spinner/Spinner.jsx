import React from 'react';
import PropTypes from 'prop-types';
import styles from './Spinner.module.css';
import { getSpinnerStyles } from './Spinner.style';

/**
 * Spinner component for indicating loading states
 * Provides accessibility features, smooth animations, and multiple visual variants
 */
const Spinner = ({
  variant = 'default',
  size = 'medium',
  color = 'primary',
  speed = 'normal',
  label = 'Loading...',
  className = '',
  style = {},
  ...props
}) => {
  const spinnerStyles = getSpinnerStyles({ variant, size, color, speed });
  const combinedClassName = `${styles.spinner} ${spinnerStyles.spinner} ${className}`.trim();

  const spinnerId = `spinner-${Math.random().toString(36).substr(2, 9)}`;

  // Render different spinner variants
  const renderSpinner = () => {
    switch (variant) {
      case 'dots':
        return (
          <div className={styles.dotsContainer}>
            <div className={styles.dot} />
            <div className={styles.dot} />
            <div className={styles.dot} />
          </div>
        );

      case 'bars':
        return (
          <div className={styles.barsContainer}>
            <div className={styles.bar} />
            <div className={styles.bar} />
            <div className={styles.bar} />
            <div className={styles.bar} />
            <div className={styles.bar} />
          </div>
        );

      case 'pulse':
        return (
          <div className={styles.pulseContainer}>
            <div className={styles.pulse} />
          </div>
        );

      case 'ripple':
        return (
          <div className={styles.rippleContainer}>
            <div className={styles.ripple} />
            <div className={styles.ripple} />
          </div>
        );

      case 'grid':
        return (
          <div className={styles.gridContainer}>
            <div className={styles.gridCell} />
            <div className={styles.gridCell} />
            <div className={styles.gridCell} />
            <div className={styles.gridCell} />
            <div className={styles.gridCell} />
            <div className={styles.gridCell} />
            <div className={styles.gridCell} />
            <div className={styles.gridCell} />
            <div className={styles.gridCell} />
          </div>
        );

      case 'orbit':
        return (
          <div className={styles.orbitContainer}>
            <div className={styles.orbitRing}>
              <div className={styles.orbitDot} />
            </div>
            <div className={styles.orbitRing}>
              <div className={styles.orbitDot} />
            </div>
          </div>
        );

      case 'custom':
        return (
          <div className={styles.customContainer}>
            <div className={styles.customSpinner} />
          </div>
        );

      default:
        return (
          <div className={styles.defaultContainer}>
            <div className={styles.defaultSpinner} />
          </div>
        );
    }
  };

  return (
    <div
      className={combinedClassName}
      style={{ ...spinnerStyles.style, ...style }}
      role="status"
      aria-label={label}
      aria-live="polite"
      id={spinnerId}
      {...props}
    >
      {renderSpinner()}
      {label && (
        <span className={styles.label} aria-hidden="true">
          {label}
        </span>
      )}
    </div>
  );
};

Spinner.propTypes = {
  /** Visual variant of the spinner */
  variant: PropTypes.oneOf(['default', 'dots', 'bars', 'pulse', 'ripple', 'grid', 'orbit', 'custom']),
  /** Size of the spinner */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Color theme of the spinner */
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'error', 'light', 'dark']),
  /** Animation speed of the spinner */
  speed: PropTypes.oneOf(['slow', 'normal', 'fast']),
  /** Accessible label for screen readers */
  label: PropTypes.string,
  /** Additional CSS class name */
  className: PropTypes.string,
  /** Additional inline styles */
  style: PropTypes.object,
  /** Accessibility label (overrides label prop) */
  'aria-label': PropTypes.string,
};

export default Spinner;
