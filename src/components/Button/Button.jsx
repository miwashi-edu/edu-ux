import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

// Atomic subcomponent for icon
export const ButtonIcon = ({ icon, position }) => (
  <span className={styles[`icon${position === 'right' ? 'Right' : 'Left'}`]}>{icon}</span>
);
ButtonIcon.propTypes = {
  icon: PropTypes.node.isRequired,
  position: PropTypes.oneOf(['left', 'right'])
};

const Button = forwardRef(function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  fullWidth = false,
  icon,
  iconPosition = 'left',
  className = '',
  type = 'button',
  ...props
}, ref) {
  const isIconOnly = icon && !children;
  return (
    <button
      ref={ref}
      type={type}
      className={[
        styles.button,
        styles[variant],
        styles[size],
        fullWidth ? styles.fullWidth : '',
        loading ? styles.loading : '',
        isIconOnly ? styles.iconOnly : '',
        className
      ].filter(Boolean).join(' ')}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading && <span className={styles.loader} aria-hidden="true" />}
      {icon && iconPosition === 'left' && <ButtonIcon icon={icon} position="left" />}
      {children && <span className={styles.label}>{children}</span>}
      {icon && iconPosition === 'right' && <ButtonIcon icon={icon} position="right" />}
    </button>
  );
});

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost', 'danger']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  fullWidth: PropTypes.bool,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset'])
};

Button.displayName = 'Button';
Button.Icon = ButtonIcon;

export { Button };
export default Button;
