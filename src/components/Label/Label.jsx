import React from 'react';
import PropTypes from 'prop-types';
import styles from './Label.module.css';
import { LabelText, LabelIcon, LabelBadge } from './Label.atom';

/**
 * Label - A versatile label component for displaying text, icons, and badges
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Label content
 * @param {string} props.variant - Visual variant (default, primary, success, warning, danger, info, outline, ghost)
 * @param {string} props.size - Size variant (xs, sm, md, lg, xl)
 * @param {React.ElementType|string} props.icon - Icon to display before text
 * @param {React.ElementType|string} props.iconAfter - Icon to display after text
 * @param {React.ReactNode} props.badge - Badge content to display
 * @param {string} props.badgeVariant - Badge variant
 * @param {boolean} props.removable - Whether the label can be removed
 * @param {Function} props.onRemove - Callback when remove button is clicked
 * @param {boolean} props.disabled - Whether the label is disabled
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.style - Inline styles
 * @param {Object} props... - Additional props passed to the label element
 */
export function Label({
  children,
  variant = 'default',
  size = 'md',
  icon,
  iconAfter,
  badge,
  badgeVariant = 'default',
  removable = false,
  onRemove,
  disabled = false,
  className = '',
  style,
  ...props
}) {
  const handleRemove = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onRemove && !disabled) {
      onRemove(e);
    }
  };

  const labelClasses = [
    styles.label,
    styles[`variant${variant.charAt(0).toUpperCase() + variant.slice(1)}`],
    styles[`size${size.charAt(0).toUpperCase() + size.slice(1)}`],
    disabled && styles.disabled,
    className
  ].filter(Boolean).join(' ');

  return (
    <span
      className={labelClasses}
      style={style}
      role={removable ? 'button' : undefined}
      tabIndex={removable && !disabled ? 0 : undefined}
      onKeyDown={removable ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleRemove(e);
        }
      } : undefined}
      {...props}
    >
      {icon && (
        <LabelIcon 
          icon={icon} 
          size={size}
          className={styles.iconBefore}
        />
      )}
      
      <LabelText className={styles.text}>
        {children}
      </LabelText>
      
      {iconAfter && (
        <LabelIcon 
          icon={iconAfter} 
          size={size}
          className={styles.iconAfter}
        />
      )}
      
      {badge && (
        <LabelBadge 
          variant={badgeVariant}
          className={styles.badge}
        >
          {badge}
        </LabelBadge>
      )}
      
      {removable && (
        <button
          type="button"
          className={styles.removeButton}
          onClick={handleRemove}
          disabled={disabled}
          aria-label="Remove label"
          title="Remove label"
        >
          <span className={styles.removeIcon}>×</span>
        </button>
      )}
    </span>
  );
}

Label.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'danger', 'info', 'outline', 'ghost']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  icon: PropTypes.oneOfType([PropTypes.elementType, PropTypes.string]),
  iconAfter: PropTypes.oneOfType([PropTypes.elementType, PropTypes.string]),
  badge: PropTypes.node,
  badgeVariant: PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'danger', 'info']),
  removable: PropTypes.bool,
  onRemove: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
};
