import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';

export const FooterLeft = forwardRef(({ children, className = '', ...props }, ref) => (
  <div ref={ref} className={`${styles.left} ${className}`.trim()} {...props}>{children}</div>
));
FooterLeft.displayName = 'FooterLeft';
FooterLeft.propTypes = { children: PropTypes.node, className: PropTypes.string };

export const FooterCenter = forwardRef(({ children, className = '', ...props }, ref) => (
  <div ref={ref} className={`${styles.center} ${className}`.trim()} {...props}>{children}</div>
));
FooterCenter.displayName = 'FooterCenter';
FooterCenter.propTypes = { children: PropTypes.node, className: PropTypes.string };

export const FooterRight = forwardRef(({ children, className = '', ...props }, ref) => (
  <div ref={ref} className={`${styles.right} ${className}`.trim()} {...props}>{children}</div>
));
FooterRight.displayName = 'FooterRight';
FooterRight.propTypes = { children: PropTypes.node, className: PropTypes.string };

export const FooterLink = forwardRef(({ children, href, className = '', ...props }, ref) => (
  <a ref={ref} href={href} className={`${styles.link} ${className}`.trim()} {...props}>{children}</a>
));
FooterLink.displayName = 'FooterLink';
FooterLink.propTypes = { children: PropTypes.node, href: PropTypes.string.isRequired, className: PropTypes.string };

const Footer = forwardRef(({ children, variant = 'default', as: Component = 'footer', className = '', ...props }, ref) => {
  const variantClass = styles[variant] || '';
  return (
    <Component
      ref={ref}
      className={`${styles.footer} ${variantClass} ${className}`.trim()}
      role="contentinfo"
      {...props}
    >
      {children}
    </Component>
  );
});
Footer.displayName = 'Footer';
Footer.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['default', 'minimal', 'dark', 'light']),
  as: PropTypes.elementType,
  className: PropTypes.string
};

Footer.Left = FooterLeft;
Footer.Center = FooterCenter;
Footer.Right = FooterRight;
Footer.Link = FooterLink;

export default Footer;
