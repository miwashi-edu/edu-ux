import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Container.module.css';

const maxWidthMap = {
  xs: styles.xs,
  sm: styles.sm,
  md: styles.md,
  lg: styles.lg,
  xl: styles.xl,
  full: styles.full
};

const Container = forwardRef(({
  children,
  maxWidth = 'lg',
  fluid = false,
  center = true,
  as: Component = 'div',
  className = '',
  ...props
}, ref) => {
  const widthClass = fluid ? styles.fluid : maxWidthMap[maxWidth] || styles.lg;
  const centerClass = center ? styles.center : '';
  return (
    <Component
      ref={ref}
      className={`${styles.container} ${widthClass} ${centerClass} ${className}`.trim()}
      tabIndex={0}
      role="group"
      {...props}
    >
      {children}
    </Component>
  );
});

Container.displayName = 'Container';
Container.propTypes = {
  children: PropTypes.node,
  maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'full']),
  fluid: PropTypes.bool,
  center: PropTypes.bool,
  as: PropTypes.elementType,
  className: PropTypes.string
};

export default Container;
