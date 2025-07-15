import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hero.module.css';

// Atomic subcomponents
const HeroTitle = ({ children, className = '', ...props }) => (
  <h1 className={`${styles.title} ${className}`.trim()} {...props}>{children}</h1>
);
HeroTitle.propTypes = { children: PropTypes.node.isRequired, className: PropTypes.string };

const HeroSubtitle = ({ children, className = '', ...props }) => (
  <h2 className={`${styles.subtitle} ${className}`.trim()} {...props}>{children}</h2>
);
HeroSubtitle.propTypes = { children: PropTypes.node.isRequired, className: PropTypes.string };

const HeroContent = ({ children, className = '', ...props }) => (
  <div className={`${styles.content} ${className}`.trim()} {...props}>{children}</div>
);
HeroContent.propTypes = { children: PropTypes.node.isRequired, className: PropTypes.string };

const HeroImage = ({ src, alt = '', className = '', ...props }) => (
  <div className={`${styles.imageWrapper} ${className}`.trim()} {...props}>
    <img src={src} alt={alt} className={styles.image} />
  </div>
);
HeroImage.propTypes = { src: PropTypes.string.isRequired, alt: PropTypes.string, className: PropTypes.string };

const HeroActions = ({ children, className = '', ...props }) => (
  <div className={`${styles.actions} ${className}`.trim()} {...props}>{children}</div>
);
HeroActions.propTypes = { children: PropTypes.node.isRequired, className: PropTypes.string };

// Main Hero component
const Hero = React.forwardRef(function Hero({
  children,
  variant = 'default', // 'default', 'minimal', 'overlay', 'image-left', 'image-right'
  size = 'md', // 'sm', 'md', 'lg'
  image = null, // { src, alt }
  overlay = false,
  align = 'center', // 'center', 'left', 'right'
  className = '',
  ...props
}, ref) {
  const variantClass = styles[variant] || '';
  const sizeClass = styles[size] || '';
  const alignClass = styles[`align-${align}`] || '';
  const overlayClass = overlay ? styles.overlay : '';

  return (
    <section
      ref={ref}
      className={[
        styles.hero,
        variantClass,
        sizeClass,
        alignClass,
        overlayClass,
        className
      ].filter(Boolean).join(' ')}
      aria-label="Hero section"
      {...props}
    >
      {image && (variant === 'image-left' || variant === 'image-right') && (
        <HeroImage src={image.src} alt={image.alt} className={styles[variant]} />
      )}
      <div className={styles.inner}>{children}</div>
      {image && variant === 'default' && (
        <HeroImage src={image.src} alt={image.alt} />
      )}
      {overlay && <div className={styles.overlayLayer} aria-hidden="true" />}
    </section>
  );
});

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'minimal', 'overlay', 'image-left', 'image-right']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  image: PropTypes.shape({ src: PropTypes.string.isRequired, alt: PropTypes.string }),
  overlay: PropTypes.bool,
  align: PropTypes.oneOf(['center', 'left', 'right']),
  className: PropTypes.string
};

// Compound component pattern
Hero.Title = HeroTitle;
Hero.Subtitle = HeroSubtitle;
Hero.Content = HeroContent;
Hero.Image = HeroImage;
Hero.Actions = HeroActions;

export default Hero;
