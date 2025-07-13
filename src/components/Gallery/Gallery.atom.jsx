import React from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.css';

// Gallery Item - Individual gallery item container
export const GalleryItem = React.forwardRef(({ 
  children, 
  className, 
  aspectRatio = '1:1',
  onClick,
  onKeyDown,
  tabIndex = 0,
  ...props 
}, ref) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick?.(e);
    }
    onKeyDown?.(e);
  };

  return (
    <div
      ref={ref}
      className={`${styles.galleryItem} ${className || ''}`}
      style={{ aspectRatio }}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={tabIndex}
      role="button"
      aria-label="Gallery item"
      {...props}
    >
      {children}
    </div>
  );
});

GalleryItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  aspectRatio: PropTypes.string,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  tabIndex: PropTypes.number,
};

// Gallery Grid - Container for gallery items
export const GalleryGrid = React.forwardRef(({ 
  children, 
  className, 
  columns = 3,
  gap = 16,
  ...props 
}, ref) => {
  const gridStyle = {
    '--gallery-columns': columns,
    '--gallery-gap': `${gap}px`,
  };

  return (
    <div
      ref={ref}
      className={`${styles.galleryGrid} ${className || ''}`}
      style={gridStyle}
      role="grid"
      aria-label="Gallery grid"
      {...props}
    >
      {children}
    </div>
  );
});

GalleryGrid.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  columns: PropTypes.number,
  gap: PropTypes.number,
};

// Gallery Thumbnail - Image thumbnail with overlay
export const GalleryThumbnail = React.forwardRef(({ 
  src,
  alt,
  title,
  description,
  className,
  loading = 'lazy',
  showOverlay = true,
  overlayContent,
  ...props 
}, ref) => {
  return (
    <div
      ref={ref}
      className={`${styles.galleryThumbnail} ${className || ''}`}
      {...props}
    >
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={styles.thumbnailImage}
      />
      
      {showOverlay && (
        <div className={styles.thumbnailOverlay}>
          {overlayContent || (
            <>
              {title && <h3 className={styles.thumbnailTitle}>{title}</h3>}
              {description && <p className={styles.thumbnailDescription}>{description}</p>}
            </>
          )}
        </div>
      )}
    </div>
  );
});

GalleryThumbnail.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
  loading: PropTypes.oneOf(['lazy', 'eager']),
  showOverlay: PropTypes.bool,
  overlayContent: PropTypes.node,
};

// Gallery Lightbox - Full-screen image viewer
export const GalleryLightbox = React.forwardRef(({ 
  isOpen = false,
  currentIndex = 0,
  images = [],
  onClose,
  onNext,
  onPrev,
  onImageClick,
  className,
  ...props 
}, ref) => {
  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];
  const hasNext = currentIndex < images.length - 1;
  const hasPrev = currentIndex > 0;

  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'Escape':
        onClose?.();
        break;
      case 'ArrowRight':
        if (hasNext) onNext?.();
        break;
      case 'ArrowLeft':
        if (hasPrev) onPrev?.();
        break;
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose?.();
    }
  };

  return (
    <div
      ref={ref}
      className={`${styles.galleryLightbox} ${className || ''}`}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
      role="dialog"
      aria-label="Image lightbox"
      aria-modal="true"
      {...props}
    >
      <div className={styles.lightboxBackdrop} onClick={handleBackdropClick}>
        <div className={styles.lightboxContent}>
          {/* Close button */}
          <button
            className={styles.lightboxClose}
            onClick={onClose}
            aria-label="Close lightbox"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation arrows */}
          {hasPrev && (
            <button
              className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
              onClick={onPrev}
              aria-label="Previous image"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
          )}

          {hasNext && (
            <button
              className={`${styles.lightboxNav} ${styles.lightboxNext}`}
              onClick={onNext}
              aria-label="Next image"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          )}

          {/* Main image */}
          <div className={styles.lightboxImageContainer}>
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className={styles.lightboxImage}
              onClick={onImageClick}
            />
          </div>

          {/* Image info */}
          {(currentImage.title || currentImage.description) && (
            <div className={styles.lightboxInfo}>
              {currentImage.title && (
                <h2 className={styles.lightboxTitle}>{currentImage.title}</h2>
              )}
              {currentImage.description && (
                <p className={styles.lightboxDescription}>{currentImage.description}</p>
              )}
            </div>
          )}

          {/* Image counter */}
          <div className={styles.lightboxCounter}>
            {currentIndex + 1} of {images.length}
          </div>
        </div>
      </div>
    </div>
  );
});

GalleryLightbox.propTypes = {
  isOpen: PropTypes.bool,
  currentIndex: PropTypes.number,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  onClose: PropTypes.func,
  onNext: PropTypes.func,
  onPrev: PropTypes.func,
  onImageClick: PropTypes.func,
  className: PropTypes.string,
};

// Gallery Overlay - Overlay for gallery items
export const GalleryOverlay = React.forwardRef(({ 
  children, 
  className,
  variant = 'default',
  ...props 
}, ref) => {
  return (
    <div
      ref={ref}
      className={`${styles.galleryOverlay} ${styles[variant]} ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  );
});

GalleryOverlay.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'minimal', 'detailed']),
};

// Gallery Filter - Filter controls for gallery
export const GalleryFilter = React.forwardRef(({ 
  categories = [],
  activeCategory,
  onCategoryChange,
  className,
  ...props 
}, ref) => {
  return (
    <div
      ref={ref}
      className={`${styles.galleryFilter} ${className || ''}`}
      role="tablist"
      aria-label="Gallery filters"
      {...props}
    >
      <button
        className={`${styles.filterButton} ${!activeCategory ? styles.active : ''}`}
        onClick={() => onCategoryChange?.(null)}
        role="tab"
        aria-selected={!activeCategory}
      >
        All
      </button>
      
      {categories.map((category) => (
        <button
          key={category}
          className={`${styles.filterButton} ${activeCategory === category ? styles.active : ''}`}
          onClick={() => onCategoryChange?.(category)}
          role="tab"
          aria-selected={activeCategory === category}
        >
          {category}
        </button>
      ))}
    </div>
  );
});

GalleryFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  activeCategory: PropTypes.string,
  onCategoryChange: PropTypes.func,
  className: PropTypes.string,
}; 