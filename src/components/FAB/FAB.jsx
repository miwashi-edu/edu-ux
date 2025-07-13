import React from 'react';
import PropTypes from 'prop-types';
import { getFABStyles } from './FAB.style.js';
import './FAB.module.css';

// Atomic subcomponents
export const FABAtom = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  position = 'bottom-right',
  disabled = false,
  className = '', 
  ...props 
}) => {
  const styles = getFABStyles();
  const baseClass = styles.fab;
  const variantClass = styles[variant] || '';
  const sizeClass = styles[size] || '';
  const positionClass = styles[position] || '';
  const disabledClass = disabled ? styles.disabled : '';
  
  return (
    <button 
      className={`${baseClass} ${variantClass} ${sizeClass} ${positionClass} ${disabledClass} ${className}`.trim()}
      disabled={disabled}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};

FABAtom.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'error']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  position: PropTypes.oneOf(['top-left', 'top-right', 'bottom-left', 'bottom-right', 'center']),
  disabled: PropTypes.bool,
  className: PropTypes.string
};

// Main component
const FAB = ({ 
  icon,
  label,
  variant = 'primary',
  size = 'medium',
  position = 'bottom-right',
  disabled = false,
  className = '',
  ...props 
}) => {
  return (
    <FABAtom 
      variant={variant}
      size={size}
      position={position}
      disabled={disabled}
      className={className}
      aria-label={label}
      {...props}
    >
      {icon}
      {label && <span className="fab-label">{label}</span>}
    </FABAtom>
  );
};

FAB.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'error']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  position: PropTypes.oneOf(['top-left', 'top-right', 'bottom-left', 'bottom-right', 'center']),
  disabled: PropTypes.bool,
  className: PropTypes.string
};

export default FAB;
