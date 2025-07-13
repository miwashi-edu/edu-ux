import React from 'react';
import PropTypes from 'prop-types';
import { getIconButtonStyles } from './IconButton.style.js';
import './IconButton.module.css';

// Atomic subcomponents
export const IconButtonAtom = ({ 
  children, 
  variant = 'default', 
  size = 'medium',
  disabled = false,
  loading = false,
  className = '', 
  ...props 
}) => {
  const styles = getIconButtonStyles();
  const baseClass = styles.iconButton;
  const variantClass = styles[variant] || '';
  const sizeClass = styles[size] || '';
  const disabledClass = disabled ? styles.disabled : '';
  const loadingClass = loading ? styles.loading : '';
  
  return (
    <button 
      className={`${baseClass} ${variantClass} ${sizeClass} ${disabledClass} ${loadingClass} ${className}`.trim()}
      disabled={disabled || loading}
      type="button"
      {...props}
    >
      {loading ? (
        <div className={styles.spinner}>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="31.416" strokeDashoffset="31.416">
              <animate attributeName="stroke-dasharray" dur="2s" values="0 31.416;15.708 15.708;0 31.416" repeatCount="indefinite"/>
              <animate attributeName="stroke-dashoffset" dur="2s" values="0;-15.708;-31.416" repeatCount="indefinite"/>
            </circle>
          </svg>
        </div>
      ) : (
        children
      )}
    </button>
  );
};

IconButtonAtom.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'warning', 'error', 'ghost']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  className: PropTypes.string
};

// Main component
const IconButton = ({ 
  icon,
  variant = 'default',
  size = 'medium',
  disabled = false,
  loading = false,
  className = '',
  ...props 
}) => {
  return (
    <IconButtonAtom 
      variant={variant}
      size={size}
      disabled={disabled}
      loading={loading}
      className={className}
      {...props}
    >
      {icon}
    </IconButtonAtom>
  );
};

IconButton.propTypes = {
  icon: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'warning', 'error', 'ghost']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  className: PropTypes.string
};

export default IconButton;
