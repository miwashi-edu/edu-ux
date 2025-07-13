import React from 'react';
import PropTypes from 'prop-types';
import { getValidationMessageStyles } from './ValidationMessage.style.js';
import './ValidationMessage.module.css';

// Atomic subcomponents
export const ValidationMessageAtom = ({ 
  children, 
  type = 'info', 
  className = '', 
  ...props 
}) => {
  const styles = getValidationMessageStyles();
  const baseClass = styles.validationMessage;
  const typeClass = styles[type] || '';
  
  return (
    <div 
      className={`${baseClass} ${typeClass} ${className}`.trim()}
      role="alert"
      aria-live="polite"
      {...props}
    >
      {children}
    </div>
  );
};

ValidationMessageAtom.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
  className: PropTypes.string
};

// Main component
const ValidationMessage = ({ 
  message,
  type = 'info',
  show = true,
  className = '',
  ...props 
}) => {
  if (!show || !message) {
    return null;
  }

  return (
    <ValidationMessageAtom 
      type={type}
      className={className}
      {...props}
    >
      {message}
    </ValidationMessageAtom>
  );
};

ValidationMessage.propTypes = {
  message: PropTypes.string,
  type: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
  show: PropTypes.bool,
  className: PropTypes.string
};

export default ValidationMessage;
