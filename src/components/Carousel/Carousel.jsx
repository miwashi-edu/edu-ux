import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './Carousel.module.css';
import {
  CarouselItem,
  CarouselTrack,
  CarouselControls,
  CarouselIndicators,
} from './Carousel.atom';

const Carousel = React.forwardRef(({
  children,
  className,
  autoPlay = false,
  autoPlayInterval = 5000,
  showControls = true,
  showIndicators = true,
  infinite = true,
  swipeable = true,
  pauseOnHover = true,
  onSlideChange,
  defaultActiveIndex = 0,
  ...props
}, ref) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  
  const trackRef = useRef(null);
  const autoPlayRef = useRef(null);
  const items = React.Children.toArray(children);
  const totalItems = items.length;

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay && !isPaused && totalItems > 1) {
      autoPlayRef.current = setInterval(() => {
        setActiveIndex(prev => (prev + 1) % totalItems);
      }, autoPlayInterval);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [autoPlay, autoPlayInterval, isPaused, totalItems]);

  // Handle slide change callback
  useEffect(() => {
    if (onSlideChange) {
      onSlideChange(activeIndex);
    }
  }, [activeIndex, onSlideChange]);

  // Navigation functions
  const goToSlide = useCallback((index) => {
    if (index >= 0 && index < totalItems) {
      setActiveIndex(index);
    }
  }, [totalItems]);

  const goToNext = useCallback(() => {
    if (infinite || activeIndex < totalItems - 1) {
      setActiveIndex(prev => (prev + 1) % totalItems);
    }
  }, [activeIndex, infinite, totalItems]);

  const goToPrev = useCallback(() => {
    if (infinite || activeIndex > 0) {
      setActiveIndex(prev => prev === 0 ? totalItems - 1 : prev - 1);
    }
  }, [activeIndex, infinite, totalItems]);

  // Touch/swipe handling
  const handleTouchStart = useCallback((e) => {
    if (!swipeable) return;
    setIsDragging(true);
    setDragStart(e.touches ? e.touches[0].clientX : e.clientX);
    setDragOffset(0);
  }, [swipeable]);

  const handleTouchMove = useCallback((e) => {
    if (!isDragging || !swipeable) return;
    e.preventDefault();
    const currentX = e.touches ? e.touches[0].clientX : e.clientX;
    const offset = currentX - dragStart;
    setDragOffset(offset);
  }, [isDragging, swipeable, dragStart]);

  const handleTouchEnd = useCallback(() => {
    if (!isDragging || !swipeable) return;
    setIsDragging(false);
    
    const threshold = 50;
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        goToPrev();
      } else {
        goToNext();
      }
    }
    setDragOffset(0);
  }, [isDragging, swipeable, dragOffset, goToPrev, goToNext]);

  // Mouse drag handling
  const handleMouseDown = useCallback((e) => {
    if (!swipeable) return;
    setIsDragging(true);
    setDragStart(e.clientX);
    setDragOffset(0);
  }, [swipeable]);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging || !swipeable) return;
    const offset = e.clientX - dragStart;
    setDragOffset(offset);
  }, [isDragging, swipeable, dragStart]);

  const handleMouseUp = useCallback(() => {
    if (!isDragging || !swipeable) return;
    setIsDragging(false);
    
    const threshold = 50;
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        goToPrev();
      } else {
        goToNext();
      }
    }
    setDragOffset(0);
  }, [isDragging, swipeable, dragOffset, goToPrev, goToNext]);

  // Pause on hover
  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover && autoPlay) {
      setIsPaused(true);
    }
  }, [pauseOnHover, autoPlay]);

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover && autoPlay) {
      setIsPaused(false);
    }
  }, [pauseOnHover, autoPlay]);

  // Calculate track transform
  const trackTransform = `translateX(-${activeIndex * 100}%)`;
  const trackStyle = {
    transform: trackTransform,
    transition: isDragging ? 'none' : 'transform 0.3s ease-in-out',
  };

  if (dragOffset !== 0) {
    trackStyle.transform = `translateX(calc(-${activeIndex * 100}% + ${dragOffset}px))`;
  }

  return (
    <div
      ref={ref}
      className={`${styles.carousel} ${className || ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      role="region"
      aria-label="Carousel"
      {...props}
    >
      <CarouselTrack
        ref={trackRef}
        style={trackStyle}
        className={isDragging ? styles.dragging : ''}
      >
        {items.map((child, index) => (
          <CarouselItem
            key={index}
            isActive={index === activeIndex}
            isVisible={Math.abs(index - activeIndex) <= 1}
            data-index={index}
          >
            {child}
          </CarouselItem>
        ))}
      </CarouselTrack>

      {showControls && totalItems > 1 && (
        <CarouselControls
          onPrev={goToPrev}
          onNext={goToNext}
          showPrev={infinite || activeIndex > 0}
          showNext={infinite || activeIndex < totalItems - 1}
        />
      )}

      {showIndicators && totalItems > 1 && (
        <CarouselIndicators
          count={totalItems}
          activeIndex={activeIndex}
          onIndicatorClick={goToSlide}
        />
      )}
    </div>
  );
});

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  autoPlay: PropTypes.bool,
  autoPlayInterval: PropTypes.number,
  showControls: PropTypes.bool,
  showIndicators: PropTypes.bool,
  infinite: PropTypes.bool,
  swipeable: PropTypes.bool,
  pauseOnHover: PropTypes.bool,
  onSlideChange: PropTypes.func,
  defaultActiveIndex: PropTypes.number,
};

// Attach subcomponents to main component
Carousel.Item = CarouselItem;
Carousel.Track = CarouselTrack;
Carousel.Controls = CarouselControls;
Carousel.Indicators = CarouselIndicators;

export default Carousel;
