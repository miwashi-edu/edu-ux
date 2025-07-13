import React from 'react';
import PropTypes from 'prop-types';
import styles from './StatCard.module.css';

/**
 * StatCardHeader - Header section of the stat card
 */
export function StatCardHeader({ children, className, ...props }) {
  return (
    <div 
      className={`${styles.statCardHeader} ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  );
}

StatCardHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

/**
 * StatCardValue - Main value display
 */
export function StatCardValue({ 
  children, 
  variant = 'default', 
  size = 'md',
  className, 
  ...props 
}) {
  return (
    <div 
      className={`${styles.statCardValue} ${styles[`value${variant.charAt(0).toUpperCase() + variant.slice(1)}`]} ${styles[`valueSize${size.charAt(0).toUpperCase() + size.slice(1)}`]} ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  );
}

StatCardValue.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'success', 'warning', 'danger', 'info']),
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  className: PropTypes.string,
};

/**
 * StatCardLabel - Label for the stat
 */
export function StatCardLabel({ children, className, ...props }) {
  return (
    <div 
      className={`${styles.statCardLabel} ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  );
}

StatCardLabel.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

/**
 * StatCardIcon - Icon component for stat cards
 */
export function StatCardIcon({ 
  icon: Icon, 
  variant = 'default',
  size = 'md',
  className, 
  ...props 
}) {
  return (
    <div 
      className={`${styles.statCardIcon} ${styles[`icon${variant.charAt(0).toUpperCase() + variant.slice(1)}`]} ${styles[`iconSize${size.charAt(0).toUpperCase() + size.slice(1)}`]} ${className || ''}`}
      {...props}
    >
      {typeof Icon === 'string' ? (
        <span className={styles.iconText}>{Icon}</span>
      ) : (
        <Icon />
      )}
    </div>
  );
}

StatCardIcon.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.elementType, PropTypes.string]).isRequired,
  variant: PropTypes.oneOf(['default', 'success', 'warning', 'danger', 'info']),
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  className: PropTypes.string,
};

/**
 * StatCardTrend - Trend indicator (up/down with percentage)
 */
export function StatCardTrend({ 
  value, 
  direction = 'up', 
  variant = 'default',
  showPercentage = true,
  className, 
  ...props 
}) {
  const getTrendIcon = () => {
    if (direction === 'up') return '↗';
    if (direction === 'down') return '↘';
    return '→';
  };

  const getTrendClass = () => {
    if (direction === 'up') return styles.trendUp;
    if (direction === 'down') return styles.trendDown;
    return styles.trendNeutral;
  };

  return (
    <div 
      className={`${styles.statCardTrend} ${getTrendClass()} ${styles[`trend${variant.charAt(0).toUpperCase() + variant.slice(1)}`]} ${className || ''}`}
      {...props}
    >
      <span className={styles.trendIcon}>{getTrendIcon()}</span>
      {showPercentage && (
        <span className={styles.trendValue}>
          {value}%
        </span>
      )}
    </div>
  );
}

StatCardTrend.propTypes = {
  value: PropTypes.number.isRequired,
  direction: PropTypes.oneOf(['up', 'down', 'neutral']),
  variant: PropTypes.oneOf(['default', 'success', 'warning', 'danger', 'info']),
  showPercentage: PropTypes.bool,
  className: PropTypes.string,
};

/**
 * StatCardFooter - Footer section for additional info
 */
export function StatCardFooter({ children, className, ...props }) {
  return (
    <div 
      className={`${styles.statCardFooter} ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  );
}

StatCardFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}; 