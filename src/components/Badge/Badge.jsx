import React from 'react';
import PropTypes from 'prop-types';
import styles from './Badge.module.css';
import { getBadgeStyles } from './Badge.style';

/**
 * Badge component for displaying notifications, counts, and status indicators
 * Provides accessibility features, multiple variants, and flexible content options
 */
const Badge = ({
  children = '',
  type = 'default',
  variant = 'default',
  size = 'medium',
  dot = false,
  max = null,
  showZero = false,
  className = '',
  style = {},
  onClick = null,
  ...props
}) => {
  const badgeStyles = getBadgeStyles({ type, variant, size });
  const combinedClassName = `${styles.badge} ${badgeStyles.badge} ${className}`.trim();

  // Handle numeric content with max limit
  const renderContent = () => {
    if (typeof children === 'number') {
      const value = children;
      
      // Don't render if zero and showZero is false
      if (value === 0 && !showZero) {
        return null;
      }
      
      // Apply max limit if specified
      if (max !== null && value > max) {
        return `${max}+`;
      }
      
      return value.toString();
    }
    
    return children;
  };

  // Don't render if no content and not showing zero
  if (!renderContent() && !dot) {
    return null;
  }

  return (
    <span
      className={`${combinedClassName} ${onClick ? styles.clickable : ''} ${dot ? styles.dot : ''}`}
      style={{ ...badgeStyles.style, ...style }}
      onClick={onClick}
      role={onClick ? 'button' : 'status'}
      aria-label={onClick ? 'Clickable badge' : undefined}
      tabIndex={onClick ? 0 : undefined}
      {...props}
    >
      {dot && <span className={styles.dotIndicator} />}
      {renderContent() && <span className={styles.content}>{renderContent()}</span>}
    </span>
  );
};

Badge.propTypes = {
  /** Content to display in the badge */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
  /** Type of badge */
  type: PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'error', 'info']),
  /** Visual variant of the badge */
  variant: PropTypes.oneOf(['default', 'filled', 'outlined', 'soft', 'minimal']),
  /** Size of the badge */
  size: PropTypes.oneOf(['xs', 'small', 'medium', 'large']),
  /** Show a dot indicator instead of content */
  dot: PropTypes.bool,
  /** Maximum value to display (for numeric badges) */
  max: PropTypes.number,
  /** Show badge even when value is zero */
  showZero: PropTypes.bool,
  /** Additional CSS class name */
  className: PropTypes.string,
  /** Additional inline styles */
  style: PropTypes.object,
  /** Click handler */
  onClick: PropTypes.func,
  /** Accessibility label */
  'aria-label': PropTypes.string,
};

export default Badge;
