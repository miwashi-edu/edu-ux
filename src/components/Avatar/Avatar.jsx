import React from 'react';
import PropTypes from 'prop-types';
import styles from './Avatar.module.css';
import { getAvatarStyles } from './Avatar.style';

/**
 * Avatar component for displaying user images, initials, or icons
 * Provides accessibility features, fallback states, and multiple visual variants
 */
const Avatar = ({
  src = '',
  alt = '',
  initials = '',
  icon = null,
  size = 'medium',
  variant = 'default',
  shape = 'circle',
  status = null,
  fallbackIcon = null,
  className = '',
  style = {},
  onClick = null,
  ...props
}) => {
  const [imageError, setImageError] = React.useState(false);
  const [imageLoaded, setImageLoaded] = React.useState(false);

  const avatarStyles = getAvatarStyles({ size, variant, shape, status });
  const combinedClassName = `${styles.avatar} ${avatarStyles.avatar} ${className}`.trim();

  // Handle image load success
  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  // Handle image load error
  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(false);
  };

  // Get initials from alt text or initials prop
  const getInitials = () => {
    if (initials) return initials;
    if (alt) {
      return alt
        .split(' ')
        .map(word => word.charAt(0))
        .join('')
        .toUpperCase()
        .slice(0, 2);
    }
    return '';
  };

  // Get fallback content
  const getFallbackContent = () => {
    if (fallbackIcon) {
      return fallbackIcon;
    }
    
    const initials = getInitials();
    if (initials) {
      return <span className={styles.initials}>{initials}</span>;
    }
    
    // Default user icon
    return (
      <svg className={styles.defaultIcon} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    );
  };

  // Determine what to render
  const renderContent = () => {
    // If we have a valid image and no error, show the image
    if (src && !imageError && imageLoaded) {
      return (
        <img
          src={src}
          alt={alt}
          className={styles.image}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      );
    }

    // If we have an icon prop, show the icon
    if (icon) {
      return <div className={styles.iconContainer}>{icon}</div>;
    }

    // Show fallback content
    return getFallbackContent();
  };

  return (
    <div
      className={`${combinedClassName} ${onClick ? styles.clickable : ''}`}
      style={{ ...avatarStyles.style, ...style }}
      onClick={onClick}
      role={onClick ? 'button' : 'img'}
      aria-label={alt || 'Avatar'}
      tabIndex={onClick ? 0 : undefined}
      {...props}
    >
      {renderContent()}
      
      {/* Status indicator */}
      {status && (
        <div className={`${styles.status} ${styles[`status--${status}`]}`} />
      )}
    </div>
  );
};

Avatar.propTypes = {
  /** Image source URL */
  src: PropTypes.string,
  /** Alt text for the image */
  alt: PropTypes.string,
  /** Initials to display when no image is available */
  initials: PropTypes.string,
  /** Custom icon to display */
  icon: PropTypes.node,
  /** Size of the avatar */
  size: PropTypes.oneOf(['xs', 'small', 'medium', 'large', 'xl']),
  /** Visual variant of the avatar */
  variant: PropTypes.oneOf(['default', 'filled', 'outlined', 'minimal']),
  /** Shape of the avatar */
  shape: PropTypes.oneOf(['circle', 'square', 'rounded']),
  /** Status indicator */
  status: PropTypes.oneOf(['online', 'offline', 'away', 'busy']),
  /** Fallback icon when no image or initials are available */
  fallbackIcon: PropTypes.node,
  /** Additional CSS class name */
  className: PropTypes.string,
  /** Additional inline styles */
  style: PropTypes.object,
  /** Click handler */
  onClick: PropTypes.func,
  /** Accessibility label */
  'aria-label': PropTypes.string,
};

export default Avatar;
