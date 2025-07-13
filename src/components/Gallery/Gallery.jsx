import React, { useState, useCallback, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.css';
import {
  GalleryItem,
  GalleryGrid,
  GalleryThumbnail,
  GalleryLightbox,
  GalleryFilter,
} from './Gallery.atom';

const Gallery = React.forwardRef(({
  images = [],
  columns = 3,
  gap = 16,
  aspectRatio = '1:1',
  showFilter = false,
  showLightbox = true,
  showOverlay = true,
  categories = [],
  className,
  onImageClick,
  ...props
}, ref) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState(null);

  // Filter images based on active category
  const filteredImages = useMemo(() => {
    if (!activeCategory) return images;
    return images.filter(image => image.category === activeCategory);
  }, [images, activeCategory]);

  // Handle image click
  const handleImageClick = useCallback((index) => {
    if (showLightbox) {
      setCurrentIndex(index);
      setLightboxOpen(true);
    }
    onImageClick?.(filteredImages[index], index);
  }, [showLightbox, onImageClick, filteredImages]);

  // Handle lightbox navigation
  const handleNext = useCallback(() => {
    setCurrentIndex(prev => 
      prev < filteredImages.length - 1 ? prev + 1 : 0
    );
  }, [filteredImages.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex(prev => 
      prev > 0 ? prev - 1 : filteredImages.length - 1
    );
  }, [filteredImages.length]);

  const handleClose = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      
      switch (e.key) {
        case 'Escape':
          handleClose();
          break;
        case 'ArrowRight':
          handleNext();
          break;
        case 'ArrowLeft':
          handlePrev();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, handleNext, handlePrev, handleClose]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [lightboxOpen]);

  // Extract unique categories from images
  const availableCategories = useMemo(() => {
    if (categories.length > 0) return categories;
    const imageCategories = [...new Set(images.map(img => img.category).filter(Boolean))];
    return imageCategories;
  }, [images, categories]);

  return (
    <div
      ref={ref}
      className={`${styles.gallery} ${className || ''}`}
      {...props}
    >
      {/* Filter controls */}
      {showFilter && availableCategories.length > 0 && (
        <GalleryFilter
          categories={availableCategories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      )}

      {/* Gallery grid */}
      <GalleryGrid columns={columns} gap={gap}>
        {filteredImages.map((image, index) => (
          <GalleryItem
            key={`${image.src}-${index}`}
            aspectRatio={aspectRatio}
            onClick={() => handleImageClick(index)}
          >
            <GalleryThumbnail
              src={image.src}
              alt={image.alt}
              title={image.title}
              description={image.description}
              showOverlay={showOverlay}
              overlayContent={image.overlayContent}
            />
          </GalleryItem>
        ))}
      </GalleryGrid>

      {/* Empty state */}
      {filteredImages.length === 0 && (
        <div className={styles.galleryEmpty}>
          <div className={styles.emptyIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
          </div>
          <h3 className={styles.emptyTitle}>No images found</h3>
          <p className={styles.emptyDescription}>
            {activeCategory 
              ? `No images in the "${activeCategory}" category.`
              : 'No images available in the gallery.'
            }
          </p>
        </div>
      )}

      {/* Lightbox */}
      {showLightbox && (
        <GalleryLightbox
          isOpen={lightboxOpen}
          currentIndex={currentIndex}
          images={filteredImages}
          onClose={handleClose}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  );
});

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      title: PropTypes.string,
      description: PropTypes.string,
      category: PropTypes.string,
      overlayContent: PropTypes.node,
    })
  ),
  columns: PropTypes.number,
  gap: PropTypes.number,
  aspectRatio: PropTypes.string,
  showFilter: PropTypes.bool,
  showLightbox: PropTypes.bool,
  showOverlay: PropTypes.bool,
  categories: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
  onImageClick: PropTypes.func,
};

// Attach subcomponents to main component
Gallery.Item = GalleryItem;
Gallery.Grid = GalleryGrid;
Gallery.Thumbnail = GalleryThumbnail;
Gallery.Lightbox = GalleryLightbox;
Gallery.Filter = GalleryFilter;

export default Gallery;
