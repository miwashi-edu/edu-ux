import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Grid.module.css';

export const GridRow = forwardRef(({ children, gap = 'md', align = 'stretch', justify = 'start', className = '', ...props }, ref) => {
  const gapClass = styles[`gap_${gap}`] || '';
  const alignClass = styles[`align_${align}`] || '';
  const justifyClass = styles[`justify_${justify}`] || '';
  return (
    <div
      ref={ref}
      className={`${styles.row} ${gapClass} ${alignClass} ${justifyClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});
GridRow.displayName = 'GridRow';
GridRow.propTypes = {
  children: PropTypes.node,
  gap: PropTypes.oneOf(['none', 'xs', 'sm', 'md', 'lg', 'xl']),
  align: PropTypes.oneOf(['start', 'center', 'end', 'stretch']),
  justify: PropTypes.oneOf(['start', 'center', 'end', 'between', 'around', 'evenly']),
  className: PropTypes.string
};

export const GridCol = forwardRef(({ children, span = 1, xs, sm, md, lg, xl, className = '', ...props }, ref) => {
  // Responsive span classes
  const spanClass = styles[`col_${span}`] || '';
  const xsClass = xs ? styles[`xs_${xs}`] : '';
  const smClass = sm ? styles[`sm_${sm}`] : '';
  const mdClass = md ? styles[`md_${md}`] : '';
  const lgClass = lg ? styles[`lg_${lg}`] : '';
  const xlClass = xl ? styles[`xl_${xl}`] : '';
  return (
    <div
      ref={ref}
      className={`${styles.col} ${spanClass} ${xsClass} ${smClass} ${mdClass} ${lgClass} ${xlClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});
GridCol.displayName = 'GridCol';
GridCol.propTypes = {
  children: PropTypes.node,
  span: PropTypes.number,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
  className: PropTypes.string
};

const Grid = forwardRef(({ children, columns = 12, gap = 'md', className = '', as: Component = 'div', ...props }, ref) => {
  const columnsClass = styles[`columns_${columns}`] || '';
  const gapClass = styles[`gap_${gap}`] || '';
  return (
    <Component
      ref={ref}
      className={`${styles.grid} ${columnsClass} ${gapClass} ${className}`.trim()}
      role="grid"
      {...props}
    >
      {children}
    </Component>
  );
});
Grid.displayName = 'Grid';
Grid.propTypes = {
  children: PropTypes.node,
  columns: PropTypes.number,
  gap: PropTypes.oneOf(['none', 'xs', 'sm', 'md', 'lg', 'xl']),
  className: PropTypes.string,
  as: PropTypes.elementType
};

Grid.Row = GridRow;
Grid.Col = GridCol;

export default Grid;
