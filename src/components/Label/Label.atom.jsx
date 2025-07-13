import React from 'react';
import PropTypes from 'prop-types';
import styles from './Label.module.css';

/**
 * LabelText - The main text content of a label
 */
export function LabelText({ children, className, ...props }) {
  return (
    <span 
      className={`${styles.labelText} ${className || ''}`}
      {...props}
    >
      {children}
    </span>
  );
}

LabelText.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

/**
 * LabelIcon - Icon component for labels
 */
export function LabelIcon({ icon: Icon, className, size = 'sm', ...props }) {
  return (
    <span 
      className={`${styles.labelIcon} ${styles[`iconSize${size.charAt(0).toUpperCase() + size.slice(1)}`]} ${className || ''}`}
      {...props}
    >
      {typeof Icon === 'string' ? (
        <span className={styles.iconText}>{Icon}</span>
      ) : (
        <Icon />
      )}
    </span>
  );
}

LabelIcon.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.elementType, PropTypes.string]).isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
};

/**
 * LabelBadge - Badge component for labels with counts or status
 */
export function LabelBadge({ children, variant = 'default', className, ...props }) {
  return (
    <span 
      className={`${styles.labelBadge} ${styles[`badge${variant.charAt(0).toUpperCase() + variant.slice(1)}`]} ${className || ''}`}
      {...props}
    >
      {children}
    </span>
  );
}

LabelBadge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'danger', 'info']),
  className: PropTypes.string,
};

/**
 * LabelGroup - Container for multiple labels
 */
export function LabelGroup({ children, className, spacing = 'sm', wrap = true, ...props }) {
  return (
    <div 
      className={`${styles.labelGroup} ${styles[`groupSpacing${spacing.charAt(0).toUpperCase() + spacing.slice(1)}`]} ${wrap ? styles.groupWrap : ''} ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  );
}

LabelGroup.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  spacing: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  wrap: PropTypes.bool,
}; 