import React from 'react';
import PropTypes from 'prop-types';
import { getChipStyles } from './Chip.style.js';
import './Chip.module.css';

// Atomic subcomponents
export const ChipAtom = ({ 
  children, 
  variant = 'default', 
  size = 'medium',
  disabled = false,
  removable = false,
  onRemove,
  className = '', 
  ...props 
}) => {
  const styles = getChipStyles();
  const baseClass = styles.chip;
  const variantClass = styles[variant] || '';
  const sizeClass = styles[size] || '';
  const disabledClass = disabled ? styles.disabled : '';
  
  return (
    <div 
      className={`${baseClass} ${variantClass} ${sizeClass} ${disabledClass} ${className}`.trim()}
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
      {...props}
    >
      <span className={styles.content}>
        {children}
      </span>
      {removable && !disabled && (
        <button
          type="button"
          className={styles.removeButton}
          onClick={(e) => {
            e.stopPropagation();
            onRemove?.(e);
          }}
          aria-label="Remove chip"
        >
          <svg 
            width="12" 
            height="12" 
            viewBox="0 0 12 12" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M9 3L3 9M3 3L9 9" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

ChipAtom.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'error', 'outline']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  removable: PropTypes.bool,
  onRemove: PropTypes.func,
  className: PropTypes.string
};

// Main component
const Chip = ({ 
  label,
  variant = 'default',
  size = 'medium',
  disabled = false,
  removable = false,
  onRemove,
  className = '',
  ...props 
}) => {
  return (
    <ChipAtom 
      variant={variant}
      size={size}
      disabled={disabled}
      removable={removable}
      onRemove={onRemove}
      className={className}
      {...props}
    >
      {label}
    </ChipAtom>
  );
};

Chip.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'error', 'outline']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  removable: PropTypes.bool,
  onRemove: PropTypes.func,
  className: PropTypes.string
};

export default Chip;
