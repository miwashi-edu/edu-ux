import React, { useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './Chart.module.css';
import {
  ChartCanvas,
  ChartAxis,
  ChartBar,
  ChartLine,
  ChartPie,
  ChartLegend,
  ChartTooltip,
} from './Chart.atom';

// Simple scale functions (in a real app, you'd use d3-scale)
const createScale = (domain, range) => {
  const [d0, d1] = domain;
  const [r0, r1] = range;
  const scale = (value) => r0 + ((value - d0) / (d1 - d0)) * (r1 - r0);
  scale.domain = () => domain;
  scale.range = () => range;
  scale.ticks = (count) => {
    const step = (d1 - d0) / count;
    return Array.from({ length: count + 1 }, (_, i) => d0 + i * step);
  };
  return scale;
};

const Chart = React.forwardRef(({
  type = 'bar',
  data = [],
  width = 600,
  height = 400,
  margin = { top: 20, right: 20, bottom: 40, left: 60 },
  colors = ['#4f46e5', '#059669', '#dc2626', '#ea580c', '#7c3aed'],
  showLegend = true,
  showTooltip = true,
  className,
  ...props
}, ref) => {
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, content: null });

  // Calculate chart dimensions
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  // Process data based on chart type
  const processedData = useMemo(() => {
    if (!data || data.length === 0) return [];

    switch (type) {
      case 'bar':
        return data.map((item, index) => ({
          ...item,
          color: colors[index % colors.length],
        }));

      case 'line':
        return data.map((series, index) => ({
          ...series,
          color: colors[index % colors.length],
          points: series.data.map((point, i) => ({
            x: point.x,
            y: point.y,
            label: point.label || `${series.name} ${i + 1}`,
          })),
        }));

      case 'pie':
        const total = data.reduce((sum, item) => sum + item.value, 0);
        let currentAngle = 0;
        return data.map((item, index) => {
          const angle = (item.value / total) * 2 * Math.PI;
          const slice = {
            ...item,
            color: colors[index % colors.length],
            startAngle: currentAngle,
            endAngle: currentAngle + angle,
            percentage: ((item.value / total) * 100).toFixed(1),
          };
          currentAngle += angle;
          return slice;
        });

      default:
        return data;
    }
  }, [data, type, colors]);

  // Create scales
  const scales = useMemo(() => {
    if (!processedData || processedData.length === 0) return {};

    switch (type) {
      case 'bar': {
        const values = processedData.map(d => d.value);
        const labels = processedData.map(d => d.label);
        const maxValue = Math.max(...values);
        
        const xScale = createScale([0, labels.length], [0, chartWidth]);
        const yScale = createScale([0, maxValue * 1.1], [chartHeight, 0]);
        
        return { xScale, yScale, labels, maxValue };
      }

      case 'line': {
        const allPoints = processedData.flatMap(series => series.points);
        const xValues = allPoints.map(p => p.x);
        const yValues = allPoints.map(p => p.y);
        
        const xScale = createScale([Math.min(...xValues), Math.max(...xValues)], [0, chartWidth]);
        const yScale = createScale([Math.min(...yValues), Math.max(...yValues) * 1.1], [chartHeight, 0]);
        
        return { xScale, yScale };
      }

      case 'pie': {
        const radius = Math.min(chartWidth, chartHeight) / 2 - 20;
        const centerX = chartWidth / 2;
        const centerY = chartHeight / 2;
        
        return { radius, centerX, centerY };
      }

      default:
        return {};
    }
  }, [processedData, type, chartWidth, chartHeight]);

  // Handle tooltip
  const handleMouseEnter = useCallback((content, event) => {
    if (!showTooltip) return;
    
    const rect = event.currentTarget.getBoundingClientRect();
    setTooltip({
      visible: true,
      x: event.clientX - rect.left + 10,
      y: event.clientY - rect.top - 10,
      content,
    });
  }, [showTooltip]);

  const handleMouseLeave = useCallback(() => {
    setTooltip({ visible: false, x: 0, y: 0, content: null });
  }, []);

  // Render chart content based on type
  const renderChartContent = () => {
    if (!processedData || processedData.length === 0) {
      return (
        <text
          x={chartWidth / 2}
          y={chartHeight / 2}
          className={styles.noData}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          No data available
        </text>
      );
    }

    switch (type) {
      case 'bar': {
        const { xScale, yScale, labels, maxValue } = scales;
        const barWidth = chartWidth / labels.length * 0.8;
        const barSpacing = chartWidth / labels.length * 0.2;

        return (
          <>
            {/* X Axis */}
            <ChartAxis
              type="x"
              scale={xScale}
              ticks={labels.length}
            />
            
            {/* Y Axis */}
            <ChartAxis
              type="y"
              scale={yScale}
              ticks={5}
            />
            
            {/* Bars */}
            {processedData.map((item, index) => {
              const x = xScale(index) + barSpacing / 2;
              const barHeight = chartHeight - yScale(item.value);
              const y = yScale(item.value);
              
              return (
                <ChartBar
                  key={index}
                  x={x}
                  y={y}
                  width={barWidth}
                  height={barHeight}
                  fill={item.color}
                  onMouseEnter={(e) => handleMouseEnter(
                    <div>
                      <strong>{item.label}</strong><br />
                      Value: {item.value}
                    </div>,
                    e
                  )}
                  onMouseLeave={handleMouseLeave}
                />
              );
            })}
          </>
        );
      }

      case 'line': {
        const { xScale, yScale } = scales;

        return (
          <>
            {/* X Axis */}
            <ChartAxis
              type="x"
              scale={xScale}
              ticks={5}
            />
            
            {/* Y Axis */}
            <ChartAxis
              type="y"
              scale={yScale}
              ticks={5}
            />
            
            {/* Lines */}
            {processedData.map((series, seriesIndex) => (
              <ChartLine
                key={seriesIndex}
                points={series.points.map(point => ({
                  x: xScale(point.x),
                  y: yScale(point.y),
                }))}
                stroke={series.color}
                strokeWidth={2}
              />
            ))}
            
            {/* Data points */}
            {processedData.map((series, seriesIndex) =>
              series.points.map((point, pointIndex) => (
                <circle
                  key={`${seriesIndex}-${pointIndex}`}
                  cx={xScale(point.x)}
                  cy={yScale(point.y)}
                  r={4}
                  fill={series.color}
                  className={styles.dataPoint}
                  onMouseEnter={(e) => handleMouseEnter(
                    <div>
                      <strong>{series.name}</strong><br />
                      {point.label}: {point.y}
                    </div>,
                    e
                  )}
                  onMouseLeave={handleMouseLeave}
                />
              ))
            )}
          </>
        );
      }

      case 'pie': {
        const { radius, centerX, centerY } = scales;

        return (
          <>
            {/* Pie slices */}
            {processedData.map((slice, index) => (
              <ChartPie
                key={index}
                centerX={centerX}
                centerY={centerY}
                radius={radius}
                startAngle={slice.startAngle}
                endAngle={slice.endAngle}
                fill={slice.color}
                onMouseEnter={(e) => handleMouseEnter(
                  <div>
                    <strong>{slice.label}</strong><br />
                    Value: {slice.value}<br />
                    {slice.percentage}%
                  </div>,
                  e
                )}
                onMouseLeave={handleMouseLeave}
              />
            ))}
            
            {/* Center label */}
            <text
              x={centerX}
              y={centerY}
              className={styles.pieCenter}
              textAnchor="middle"
              dominantBaseline="middle"
            >
              Total
            </text>
          </>
        );
      }

      default:
        return null;
    }
  };

  // Create legend data
  const legendData = useMemo(() => {
    if (!showLegend) return [];

    switch (type) {
      case 'bar':
        return processedData.map(item => ({
          label: item.label,
          color: item.color,
          value: item.value,
        }));

      case 'line':
        return processedData.map(series => ({
          label: series.name,
          color: series.color,
        }));

      case 'pie':
        return processedData.map(slice => ({
          label: slice.label,
          color: slice.color,
          value: `${slice.value} (${slice.percentage}%)`,
        }));

      default:
        return [];
    }
  }, [processedData, type, showLegend]);

  return (
    <div
      ref={ref}
      className={`${styles.chart} ${className || ''}`}
      style={{ width, height }}
      {...props}
    >
      <ChartCanvas
        width={width}
        height={height}
        style={{
          transform: `translate(${margin.left}px, ${margin.top}px)`,
        }}
      >
        {renderChartContent()}
      </ChartCanvas>

      {showLegend && legendData.length > 0 && (
        <ChartLegend items={legendData} />
      )}

      {showTooltip && (
        <ChartTooltip
          visible={tooltip.visible}
          x={tooltip.x}
          y={tooltip.y}
          content={tooltip.content}
        />
      )}
    </div>
  );
});

Chart.propTypes = {
  type: PropTypes.oneOf(['bar', 'line', 'pie']),
  data: PropTypes.array.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  margin: PropTypes.shape({
    top: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number,
  }),
  colors: PropTypes.arrayOf(PropTypes.string),
  showLegend: PropTypes.bool,
  showTooltip: PropTypes.bool,
  className: PropTypes.string,
};

// Attach subcomponents to main component
Chart.Canvas = ChartCanvas;
Chart.Axis = ChartAxis;
Chart.Bar = ChartBar;
Chart.Line = ChartLine;
Chart.Pie = ChartPie;
Chart.Legend = ChartLegend;
Chart.Tooltip = ChartTooltip;

export default Chart;
