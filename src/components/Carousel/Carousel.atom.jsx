import React from 'react';
import PropTypes from 'prop-types';
import styles from './Carousel.module.css';

// Carousel Item - Individual slide content
export const CarouselItem = React.forwardRef(({ 
  children, 
  className, 
  isActive, 
  isVisible,
  ...props 
}, ref) => {
  return (
    <div
      ref={ref}
      className={`${styles.carouselItem} ${isActive ? styles.active : ''} ${isVisible ? styles.visible : ''} ${className || ''}`}
      role="group"
      aria-roledescription="slide"
      aria-label={`Slide ${props['data-index'] + 1}`}
      {...props}
    >
      {children}
    </div>
  );
});

CarouselItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isActive: PropTypes.bool,
  isVisible: PropTypes.bool,
  'data-index': PropTypes.number,
};

// Carousel Track - Container for all slides
export const CarouselTrack = React.forwardRef(({ 
  children, 
  className, 
  style,
  ...props 
}, ref) => {
  return (
    <div
      ref={ref}
      className={`${styles.carouselTrack} ${className || ''}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
});

CarouselTrack.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

// Carousel Controls - Navigation arrows
export const CarouselArrow = React.forwardRef(({ 
  direction = 'next',
  onClick,
  disabled = false,
  className,
  children,
  ...props 
}, ref) => {
  const isPrev = direction === 'prev';
  
  return (
    <button
      ref={ref}
      type="button"
      className={`${styles.carouselArrow} ${styles[direction]} ${disabled ? styles.disabled : ''} ${className || ''}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={`${isPrev ? 'Previous' : 'Next'} slide`}
      {...props}
    >
      {children || (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {isPrev ? (
            <path d="M15 18l-6-6 6-6" />
          ) : (
            <path d="M9 18l6-6-6-6" />
          )}
        </svg>
      )}
    </button>
  );
});

CarouselArrow.propTypes = {
  direction: PropTypes.oneOf(['prev', 'next']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

// Carousel Indicators - Dot navigation
export const CarouselIndicator = React.forwardRef(({ 
  index,
  isActive = false,
  onClick,
  className,
  ...props 
}, ref) => {
  return (
    <button
      ref={ref}
      type="button"
      className={`${styles.carouselIndicator} ${isActive ? styles.active : ''} ${className || ''}`}
      onClick={() => onClick(index)}
      aria-label={`Go to slide ${index + 1}`}
      aria-current={isActive ? 'true' : 'false'}
      {...props}
    />
  );
});

CarouselIndicator.propTypes = {
  index: PropTypes.number.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

// Carousel Indicators Container
export const CarouselIndicators = React.forwardRef(({ 
  count,
  activeIndex,
  onIndicatorClick,
  className,
  ...props 
}, ref) => {
  return (
    <div
      ref={ref}
      className={`${styles.carouselIndicators} ${className || ''}`}
      role="tablist"
      aria-label="Slide navigation"
      {...props}
    >
      {Array.from({ length: count }, (_, index) => (
        <CarouselIndicator
          key={index}
          index={index}
          isActive={index === activeIndex}
          onClick={onIndicatorClick}
        />
      ))}
    </div>
  );
});

CarouselIndicators.propTypes = {
  count: PropTypes.number.isRequired,
  activeIndex: PropTypes.number.isRequired,
  onIndicatorClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

// Carousel Controls Container
export const CarouselControls = React.forwardRef(({ 
  onPrev,
  onNext,
  showPrev = true,
  showNext = true,
  disabled = false,
  className,
  children,
  ...props 
}, ref) => {
  return (
    <div
      ref={ref}
      className={`${styles.carouselControls} ${className || ''}`}
      {...props}
    >
      {showPrev && (
        <CarouselArrow
          direction="prev"
          onClick={onPrev}
          disabled={disabled}
        />
      )}
      {children}
      {showNext && (
        <CarouselArrow
          direction="next"
          onClick={onNext}
          disabled={disabled}
        />
      )}
    </div>
  );
});

CarouselControls.propTypes = {
  onPrev: PropTypes.func,
  onNext: PropTypes.func,
  showPrev: PropTypes.bool,
  showNext: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
}; 