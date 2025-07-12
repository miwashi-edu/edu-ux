/**
 * Badge component styles
 * Provides dynamic styling utilities for badge variants and states
 */

/**
 * Get badge styles based on props
 * @param {Object} props - Component props
 * @param {string} props.type - Badge type
 * @param {string} props.variant - Badge visual variant
 * @param {string} props.size - Badge size
 * @returns {Object} Style object with badge class and inline styles
 */
export const getBadgeStyles = ({ type = 'default', variant = 'default', size = 'medium' }) => {
  const badgeClasses = ['badge'];
  if (size) badgeClasses.push(size);
  if (type) badgeClasses.push(type);
  if (variant) badgeClasses.push(variant);
  if (variant && type) badgeClasses.push(`${variant}.${type}`);
  return {
    badge: badgeClasses.join(' '),
    style: {
      // Additional inline styles can be added here
    }
  };
};
