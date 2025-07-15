import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';

// Atomic subcomponents
export const CardHeader = forwardRef(({ children, className = '', ...props }, ref) => (
  <div ref={ref} className={`${styles.header} ${className}`.trim()} {...props}>
    {children}
  </div>
));
CardHeader.displayName = 'CardHeader';
CardHeader.propTypes = { children: PropTypes.node, className: PropTypes.string };

export const CardBody = forwardRef(({ children, className = '', ...props }, ref) => (
  <div ref={ref} className={`${styles.body} ${className}`.trim()} {...props}>
    {children}
  </div>
));
CardBody.displayName = 'CardBody';
CardBody.propTypes = { children: PropTypes.node, className: PropTypes.string };

export const CardFooter = forwardRef(({ children, className = '', ...props }, ref) => (
  <div ref={ref} className={`${styles.footer} ${className}`.trim()} {...props}>
    {children}
  </div>
));
CardFooter.displayName = 'CardFooter';
CardFooter.propTypes = { children: PropTypes.node, className: PropTypes.string };

export const CardMedia = forwardRef(({ src, alt = '', className = '', ...props }, ref) => (
  <img ref={ref} src={src} alt={alt} className={`${styles.media} ${className}`.trim()} {...props} />
));
CardMedia.displayName = 'CardMedia';
CardMedia.propTypes = { src: PropTypes.string.isRequired, alt: PropTypes.string, className: PropTypes.string };

export const CardActions = forwardRef(({ children, className = '', ...props }, ref) => (
  <div ref={ref} className={`${styles.actions} ${className}`.trim()} {...props}>
    {children}
  </div>
));
CardActions.displayName = 'CardActions';
CardActions.propTypes = { children: PropTypes.node, className: PropTypes.string };

// Main Card component
const Card = forwardRef(({ 
  children, 
  variant = 'default', 
  size = 'md', 
  className = '', 
  as: Component = 'div',
  ...props 
}, ref) => {
  const variantClass = styles[variant] || '';
  const sizeClass = styles[size] || '';
  return (
    <Component
      ref={ref}
      className={`${styles.card} ${variantClass} ${sizeClass} ${className}`.trim()}
      tabIndex={0}
      role="region"
      {...props}
    >
      {children}
    </Component>
  );
});
Card.displayName = 'Card';
Card.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['default', 'outlined', 'elevated', 'minimal']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
  as: PropTypes.elementType
};

// Compound pattern
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Media = CardMedia;
Card.Actions = CardActions;

export default Card;
