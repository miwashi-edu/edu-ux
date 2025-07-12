/**
 * Avatar component styles
 * Provides dynamic styling utilities for avatar variants and states
 */

/**
 * Get avatar styles based on props
 * @param {Object} props - Component props
 * @param {string} props.size - Avatar size
 * @param {string} props.variant - Avatar visual variant
 * @param {string} props.shape - Avatar shape
 * @param {string} props.status - Avatar status
 * @returns {Object} Style object with avatar class and inline styles
 */
export const getAvatarStyles = ({ size = 'medium', variant = 'default', shape = 'circle', status = null }) => {
  const avatarClasses = ['avatar'];
  if (size) avatarClasses.push(size);
  if (variant) avatarClasses.push(variant);
  if (shape) avatarClasses.push(shape);
  return {
    avatar: avatarClasses.join(' '),
    style: {
      // Additional inline styles can be added here
    }
  };
};

/**
 * Get status color for indicator
 * @param {string} status - Avatar status
 * @returns {string} Color value
 */
export const getStatusColor = (status) => {
  switch (status) {
    case 'online': return '#10b981';
    case 'offline': return '#9ca3af';
    case 'away': return '#f59e0b';
    case 'busy': return '#ef4444';
    default: return 'transparent';
  }
};
