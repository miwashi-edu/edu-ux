import React from 'react';
import PropTypes from 'prop-types';
import styles from './StatCard.module.css';
import { 
  StatCardHeader, 
  StatCardValue, 
  StatCardLabel, 
  StatCardIcon, 
  StatCardTrend, 
  StatCardFooter 
} from './StatCard.atom';

/**
 * StatCard - A card component for displaying key metrics and statistics
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.variant - Visual variant (default, success, warning, danger, info)
 * @param {string} props.size - Size variant (sm, md, lg, xl)
 * @param {React.ElementType|string} props.icon - Icon to display
 * @param {string} props.label - Label text
 * @param {React.ReactNode} props.value - Main value to display
 * @param {Object} props.trend - Trend object with value, direction, and variant
 * @param {React.ReactNode} props.footer - Footer content
 * @param {boolean} props.clickable - Whether the card is clickable
 * @param {Function} props.onClick - Click handler
 * @param {boolean} props.loading - Whether to show loading state
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.style - Inline styles
 * @param {Object} props... - Additional props passed to the card element
 */
export function StatCard({
  children,
  variant = 'default',
  size = 'md',
  icon,
  label,
  value,
  trend,
  footer,
  clickable = false,
  onClick,
  loading = false,
  className = '',
  style,
  ...props
}) {
  const handleClick = (e) => {
    if (clickable && onClick && !loading) {
      onClick(e);
    }
  };

  const cardClasses = [
    styles.statCard,
    styles[`variant${variant.charAt(0).toUpperCase() + variant.slice(1)}`],
    styles[`size${size.charAt(0).toUpperCase() + size.slice(1)}`],
    clickable && styles.clickable,
    loading && styles.loading,
    className
  ].filter(Boolean).join(' ');

  // If children are provided, render them directly
  if (children) {
    return (
      <div
        className={cardClasses}
        style={style}
        onClick={handleClick}
        role={clickable ? 'button' : undefined}
        tabIndex={clickable && !loading ? 0 : undefined}
        {...props}
      >
        {children}
      </div>
    );
  }

  // Otherwise, render with structured content
  return (
    <div
      className={cardClasses}
      style={style}
      onClick={handleClick}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable && !loading ? 0 : undefined}
      {...props}
    >
      <StatCardHeader className={styles.header}>
        {icon && (
          <StatCardIcon 
            icon={icon} 
            variant={variant}
            size={size}
            className={styles.headerIcon}
          />
        )}
        {label && (
          <StatCardLabel className={styles.headerLabel}>
            {label}
          </StatCardLabel>
        )}
      </StatCardHeader>

      <div className={styles.content}>
        {value && (
          <StatCardValue 
            variant={variant}
            size={size}
            className={styles.mainValue}
          >
            {value}
          </StatCardValue>
        )}
        
        {trend && (
          <StatCardTrend
            value={trend.value}
            direction={trend.direction}
            variant={trend.variant || variant}
            showPercentage={trend.showPercentage !== false}
            className={styles.trend}
          />
        )}
      </div>

      {footer && (
        <StatCardFooter className={styles.footer}>
          {footer}
        </StatCardFooter>
      )}
    </div>
  );
}

StatCard.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['default', 'success', 'warning', 'danger', 'info']),
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  icon: PropTypes.oneOfType([PropTypes.elementType, PropTypes.string]),
  label: PropTypes.string,
  value: PropTypes.node,
  trend: PropTypes.shape({
    value: PropTypes.number.isRequired,
    direction: PropTypes.oneOf(['up', 'down', 'neutral']),
    variant: PropTypes.oneOf(['default', 'success', 'warning', 'danger', 'info']),
    showPercentage: PropTypes.bool,
  }),
  footer: PropTypes.node,
  clickable: PropTypes.bool,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
};

// Attach atomic subcomponents
StatCard.Header = StatCardHeader;
StatCard.Value = StatCardValue;
StatCard.Label = StatCardLabel;
StatCard.Icon = StatCardIcon;
StatCard.Trend = StatCardTrend;
StatCard.Footer = StatCardFooter;

export default StatCard;
