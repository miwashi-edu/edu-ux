import React from 'react';
import PropTypes from 'prop-types';
import styles from './Chart.module.css';

// Chart Canvas - Main container for chart rendering
export const ChartCanvas = React.forwardRef(({ 
  children, 
  className, 
  width = 600,
  height = 400,
  ...props 
}, ref) => {
  return (
    <div
      ref={ref}
      className={`${styles.chartCanvas} ${className || ''}`}
      style={{ width, height }}
      role="img"
      aria-label="Chart visualization"
      {...props}
    >
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${width} ${height}`}
        className={styles.chartSvg}
      >
        {children}
      </svg>
    </div>
  );
});

ChartCanvas.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

// Chart Axis - X and Y axis components
export const ChartAxis = React.forwardRef(({ 
  type = 'x',
  scale,
  ticks = 5,
  className,
  ...props 
}, ref) => {
  const isXAxis = type === 'x';
  const axisProps = {
    className: `${styles.chartAxis} ${styles[type]} ${className || ''}`,
    ...props,
  };

  if (isXAxis) {
    return (
      <g ref={ref} {...axisProps}>
        <line
          x1={scale.range()[0]}
          y1={scale.range()[1]}
          x2={scale.range()[1]}
          y2={scale.range()[1]}
          className={styles.axisLine}
        />
        {scale.ticks(ticks).map((tick, i) => (
          <g key={i} className={styles.tick}>
            <line
              x1={scale(tick)}
              y1={scale.range()[1]}
              x2={scale(tick)}
              y2={scale.range()[1] + 6}
              className={styles.tickLine}
            />
            <text
              x={scale(tick)}
              y={scale.range()[1] + 20}
              className={styles.tickLabel}
              textAnchor="middle"
            >
              {tick}
            </text>
          </g>
        ))}
      </g>
    );
  }

  return (
    <g ref={ref} {...axisProps}>
      <line
        x1={scale.range()[0]}
        y1={scale.range()[0]}
        x2={scale.range()[0]}
        y2={scale.range()[1]}
        className={styles.axisLine}
      />
      {scale.ticks(ticks).map((tick, i) => (
        <g key={i} className={styles.tick}>
          <line
            x1={scale.range()[0] - 6}
            y1={scale(tick)}
            x2={scale.range()[0]}
            y2={scale(tick)}
            className={styles.tickLine}
          />
          <text
            x={scale.range()[0] - 10}
            y={scale(tick)}
            className={styles.tickLabel}
            textAnchor="end"
            dominantBaseline="middle"
          >
            {tick}
          </text>
        </g>
      ))}
    </g>
  );
});

ChartAxis.propTypes = {
  type: PropTypes.oneOf(['x', 'y']),
  scale: PropTypes.object.isRequired,
  ticks: PropTypes.number,
  className: PropTypes.string,
};

// Chart Bar - Individual bar for bar charts
export const ChartBar = React.forwardRef(({ 
  x,
  y,
  width,
  height,
  fill = '#4f46e5',
  className,
  onMouseEnter,
  onMouseLeave,
  ...props 
}, ref) => {
  return (
    <rect
      ref={ref}
      x={x}
      y={y}
      width={width}
      height={height}
      fill={fill}
      className={`${styles.chartBar} ${className || ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...props}
    />
  );
});

ChartBar.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  fill: PropTypes.string,
  className: PropTypes.string,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

// Chart Line - Line segment for line charts
export const ChartLine = React.forwardRef(({ 
  points,
  stroke = '#4f46e5',
  strokeWidth = 2,
  fill = 'none',
  className,
  ...props 
}, ref) => {
  const pathData = points.map((point, i) => 
    `${i === 0 ? 'M' : 'L'} ${point.x} ${point.y}`
  ).join(' ');

  return (
    <path
      ref={ref}
      d={pathData}
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill={fill}
      className={`${styles.chartLine} ${className || ''}`}
      {...props}
    />
  );
});

ChartLine.propTypes = {
  points: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
    })
  ).isRequired,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number,
  fill: PropTypes.string,
  className: PropTypes.string,
};

// Chart Pie - Pie slice for pie charts
export const ChartPie = React.forwardRef(({ 
  centerX,
  centerY,
  radius,
  startAngle,
  endAngle,
  fill = '#4f46e5',
  className,
  onMouseEnter,
  onMouseLeave,
  ...props 
}, ref) => {
  const largeArcFlag = endAngle - startAngle > Math.PI ? 1 : 0;
  
  const x1 = centerX + radius * Math.cos(startAngle);
  const y1 = centerY + radius * Math.sin(startAngle);
  const x2 = centerX + radius * Math.cos(endAngle);
  const y2 = centerY + radius * Math.sin(endAngle);

  const pathData = [
    `M ${centerX} ${centerY}`,
    `L ${x1} ${y1}`,
    `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
    'Z'
  ].join(' ');

  return (
    <path
      ref={ref}
      d={pathData}
      fill={fill}
      className={`${styles.chartPie} ${className || ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...props}
    />
  );
});

ChartPie.propTypes = {
  centerX: PropTypes.number.isRequired,
  centerY: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired,
  startAngle: PropTypes.number.isRequired,
  endAngle: PropTypes.number.isRequired,
  fill: PropTypes.string,
  className: PropTypes.string,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

// Chart Legend - Legend for chart data series
export const ChartLegend = React.forwardRef(({ 
  items = [],
  className,
  ...props 
}, ref) => {
  return (
    <div
      ref={ref}
      className={`${styles.chartLegend} ${className || ''}`}
      role="list"
      aria-label="Chart legend"
      {...props}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className={styles.legendItem}
          role="listitem"
        >
          <div
            className={styles.legendColor}
            style={{ backgroundColor: item.color }}
            aria-hidden="true"
          />
          <span className={styles.legendLabel}>{item.label}</span>
          {item.value && (
            <span className={styles.legendValue}>{item.value}</span>
          )}
        </div>
      ))}
    </div>
  );
});

ChartLegend.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  className: PropTypes.string,
};

// Chart Tooltip - Tooltip for data points
export const ChartTooltip = React.forwardRef(({ 
  visible = false,
  x = 0,
  y = 0,
  content,
  className,
  ...props 
}, ref) => {
  if (!visible) return null;

  return (
    <div
      ref={ref}
      className={`${styles.chartTooltip} ${className || ''}`}
      style={{
        left: x,
        top: y,
      }}
      role="tooltip"
      {...props}
    >
      {content}
    </div>
  );
});

ChartTooltip.propTypes = {
  visible: PropTypes.bool,
  x: PropTypes.number,
  y: PropTypes.number,
  content: PropTypes.node,
  className: PropTypes.string,
}; 