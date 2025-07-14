import React from 'react';
import PropTypes from 'prop-types';
import { getLinkStyles } from './Link.style.js';
import './Link.module.css';

// Atomic subcomponents
export const LinkAtom = ({ 
  children, 
  variant = 'default', 
  size = 'medium',
  disabled = false,
  external = false,
  className = '', 
  ...props 
}) => {
  const styles = getLinkStyles();
  const baseClass = styles.link;
  const variantClass = styles[variant] || '';
  const sizeClass = styles[size] || '';
  const disabledClass = disabled ? styles.disabled : '';
  const externalClass = external ? styles.external : '';
  
  return (
    <a 
      className={`${baseClass} ${variantClass} ${sizeClass} ${disabledClass} ${externalClass} ${className}`.trim()}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      {...props}
    >
      {children}
      {external && (
        <svg 
          className={styles.externalIcon}
          width="12" 
          height="12" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path 
            d="M18 13V19A2 2 0 0 1 16 21H5A2 2 0 0 1 3 19V8A2 2 0 0 1 5 6H11M15 3H21V9M10 14L21 3" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      )}
    </a>
  );
};

LinkAtom.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'warning', 'error']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  external: PropTypes.bool,
  className: PropTypes.string
};

// Main component
const Link = ({ 
  href,
  children,
  variant = 'default',
  size = 'medium',
  disabled = false,
  external = false,
  className = '',
  ...props 
}) => {
  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    props.onClick?.(e);
  };

  return (
    <LinkAtom 
      href={disabled ? '#' : href}
      variant={variant}
      size={size}
      disabled={disabled}
      external={external}
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </LinkAtom>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'warning', 'error']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  external: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default Link;
