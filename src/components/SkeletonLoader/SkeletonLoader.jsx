import React from 'react';
import PropTypes from 'prop-types';
import styles from './SkeletonLoader.module.css';
import { getSkeletonStyles } from './SkeletonLoader.style';

/**
 * SkeletonLoader component for displaying placeholder content while loading
 * Provides accessibility features, smooth animations, and multiple content types
 */
const SkeletonLoader = ({
  type = 'text',
  variant = 'default',
  size = 'medium',
  animated = true,
  count = 1,
  width = '100%',
  height = 'auto',
  className = '',
  style = {},
  ...props
}) => {
  const skeletonStyles = getSkeletonStyles({ type, variant, size, animated });
  const combinedClassName = `${styles.skeletonLoader} ${skeletonStyles.skeletonLoader} ${className}`.trim();

  // Generate multiple skeleton items if count > 1
  const renderSkeletonItems = () => {
    const items = [];
    for (let i = 0; i < count; i++) {
      items.push(
        <div
          key={i}
          className={`${styles.skeletonItem} ${skeletonStyles.skeletonItem} ${
            animated ? styles.animated : ''
          }`}
          style={{
            width,
            height: type === 'text' ? height : undefined,
            ...skeletonStyles.style,
            ...style
          }}
          role="status"
          aria-label="Loading content"
          {...props}
        >
          {/* Text skeleton with multiple lines */}
          {type === 'text' && (
            <div className={styles.textSkeleton}>
              <div className={styles.textLine} />
              {count === 1 && (
                <>
                  <div className={styles.textLine} style={{ width: '85%' }} />
                  <div className={styles.textLine} style={{ width: '70%' }} />
                </>
              )}
            </div>
          )}

          {/* Avatar skeleton */}
          {type === 'avatar' && (
            <div className={styles.avatarSkeleton} />
          )}

          {/* Image skeleton */}
          {type === 'image' && (
            <div className={styles.imageSkeleton}>
              <div className={styles.imagePlaceholder} />
            </div>
          )}

          {/* Button skeleton */}
          {type === 'button' && (
            <div className={styles.buttonSkeleton}>
              <div className={styles.buttonText} />
            </div>
          )}

          {/* Card skeleton */}
          {type === 'card' && (
            <div className={styles.cardSkeleton}>
              <div className={styles.cardImage} />
              <div className={styles.cardContent}>
                <div className={styles.cardTitle} />
                <div className={styles.cardText} />
                <div className={styles.cardText} style={{ width: '60%' }} />
              </div>
            </div>
          )}

          {/* List skeleton */}
          {type === 'list' && (
            <div className={styles.listSkeleton}>
              <div className={styles.listItem}>
                <div className={styles.listAvatar} />
                <div className={styles.listContent}>
                  <div className={styles.listTitle} />
                  <div className={styles.listText} />
                </div>
              </div>
            </div>
          )}

          {/* Table skeleton */}
          {type === 'table' && (
            <div className={styles.tableSkeleton}>
              <div className={styles.tableHeader}>
                <div className={styles.tableCell} />
                <div className={styles.tableCell} />
                <div className={styles.tableCell} />
              </div>
              <div className={styles.tableRow}>
                <div className={styles.tableCell} />
                <div className={styles.tableCell} />
                <div className={styles.tableCell} />
              </div>
              <div className={styles.tableRow}>
                <div className={styles.tableCell} />
                <div className={styles.tableCell} />
                <div className={styles.tableCell} />
              </div>
            </div>
          )}

          {/* Custom skeleton */}
          {type === 'custom' && (
            <div className={styles.customSkeleton} />
          )}
        </div>
      );
    }
    return items;
  };

  return (
    <div className={styles.skeletonContainer}>
      {renderSkeletonItems()}
    </div>
  );
};

SkeletonLoader.propTypes = {
  /** Type of skeleton content to display */
  type: PropTypes.oneOf(['text', 'avatar', 'image', 'button', 'card', 'list', 'table', 'custom']),
  /** Visual variant of the skeleton */
  variant: PropTypes.oneOf(['default', 'pulse', 'wave', 'shimmer']),
  /** Size of the skeleton elements */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Whether to animate the skeleton */
  animated: PropTypes.bool,
  /** Number of skeleton items to display */
  count: PropTypes.number,
  /** Width of the skeleton */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Height of the skeleton (for text type) */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Additional CSS class name */
  className: PropTypes.string,
  /** Additional inline styles */
  style: PropTypes.object,
  /** Accessibility label */
  'aria-label': PropTypes.string,
};

export default SkeletonLoader;
