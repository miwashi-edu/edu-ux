import React, { useState } from 'react';
import Chart from './index';

export default {
  title: 'Data Display/Chart',
  component: Chart,
  parameters: {
    docs: {
      description: {
        component: 'A flexible chart component supporting bar, line, and pie charts with interactive features and accessibility.',
      },
    },
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['bar', 'line', 'pie'],
      description: 'Type of chart to display',
    },
    width: {
      control: { type: 'number', min: 200, max: 1000, step: 50 },
      description: 'Chart width in pixels',
    },
    height: {
      control: { type: 'number', min: 200, max: 600, step: 50 },
      description: 'Chart height in pixels',
    },
    showLegend: {
      control: 'boolean',
      description: 'Show chart legend',
    },
    showTooltip: {
      control: 'boolean',
      description: 'Show interactive tooltips',
    },
  },
};

// Sample data for different chart types
const barData = [
  { label: 'Q1', value: 45 },
  { label: 'Q2', value: 67 },
  { label: 'Q3', value: 34 },
  { label: 'Q4', value: 89 },
  { label: 'Q5', value: 56 },
];

const lineData = [
  {
    name: 'Sales',
    data: [
      { x: 0, y: 20, label: 'Jan' },
      { x: 1, y: 35, label: 'Feb' },
      { x: 2, y: 28, label: 'Mar' },
      { x: 3, y: 42, label: 'Apr' },
      { x: 4, y: 38, label: 'May' },
      { x: 5, y: 55, label: 'Jun' },
    ],
  },
  {
    name: 'Revenue',
    data: [
      { x: 0, y: 15, label: 'Jan' },
      { x: 1, y: 30, label: 'Feb' },
      { x: 2, y: 25, label: 'Mar' },
      { x: 3, y: 40, label: 'Apr' },
      { x: 4, y: 35, label: 'May' },
      { x: 5, y: 50, label: 'Jun' },
    ],
  },
];

const pieData = [
  { label: 'Desktop', value: 45 },
  { label: 'Mobile', value: 35 },
  { label: 'Tablet', value: 15 },
  { label: 'Other', value: 5 },
];

// Default story
export const Default = {
  args: {
    type: 'bar',
    data: barData,
    width: 600,
    height: 400,
    showLegend: true,
    showTooltip: true,
  },
};

// Bar chart story
export const BarChart = {
  args: {
    ...Default.args,
    type: 'bar',
    data: barData,
  },
};

// Line chart story
export const LineChart = {
  args: {
    ...Default.args,
    type: 'line',
    data: lineData,
  },
};

// Pie chart story
export const PieChart = {
  args: {
    ...Default.args,
    type: 'pie',
    data: pieData,
  },
};

// Without legend
export const WithoutLegend = {
  args: {
    ...Default.args,
    showLegend: false,
  },
};

// Without tooltip
export const WithoutTooltip = {
  args: {
    ...Default.args,
    showTooltip: false,
  },
};

// Small size
export const Small = {
  args: {
    ...Default.args,
    width: 300,
    height: 200,
  },
};

// Large size
export const Large = {
  args: {
    ...Default.args,
    width: 800,
    height: 500,
  },
};

// Custom colors
export const CustomColors = {
  args: {
    ...Default.args,
    colors: ['#ef4444', '#f97316', '#eab308', '#22c55e', '#3b82f6'],
  },
};

// Sales data example
export const SalesData = {
  args: {
    ...Default.args,
    type: 'bar',
    data: [
      { label: 'Jan', value: 12000 },
      { label: 'Feb', value: 19000 },
      { label: 'Mar', value: 15000 },
      { label: 'Apr', value: 22000 },
      { label: 'May', value: 18000 },
      { label: 'Jun', value: 25000 },
    ],
    colors: ['#059669', '#10b981', '#34d399', '#6ee7b7', '#a7f3d0', '#d1fae5'],
  },
};

// Website traffic example
export const WebsiteTraffic = {
  args: {
    ...Default.args,
    type: 'line',
    data: [
      {
        name: 'Page Views',
        data: [
          { x: 0, y: 1200, label: 'Mon' },
          { x: 1, y: 1800, label: 'Tue' },
          { x: 2, y: 1400, label: 'Wed' },
          { x: 3, y: 2200, label: 'Thu' },
          { x: 4, y: 1900, label: 'Fri' },
          { x: 5, y: 1600, label: 'Sat' },
          { x: 6, y: 1100, label: 'Sun' },
        ],
      },
      {
        name: 'Unique Visitors',
        data: [
          { x: 0, y: 800, label: 'Mon' },
          { x: 1, y: 1200, label: 'Tue' },
          { x: 2, y: 900, label: 'Wed' },
          { x: 3, y: 1500, label: 'Thu' },
          { x: 4, y: 1300, label: 'Fri' },
          { x: 5, y: 1100, label: 'Sat' },
          { x: 6, y: 700, label: 'Sun' },
        ],
      },
    ],
    colors: ['#3b82f6', '#1d4ed8'],
  },
};

// Market share example
export const MarketShare = {
  args: {
    ...Default.args,
    type: 'pie',
    data: [
      { label: 'Apple', value: 45 },
      { label: 'Samsung', value: 25 },
      { label: 'Huawei', value: 15 },
      { label: 'Xiaomi', value: 10 },
      { label: 'Others', value: 5 },
    ],
    colors: ['#000000', '#1428a0', '#c41e3a', '#ff6700', '#6b7280'],
  },
};

// Interactive chart with data updates
export const Interactive = {
  args: Default.args,
  render: (args) => {
    const [data, setData] = useState(barData);
    const [chartType, setChartType] = useState('bar');

    const generateRandomData = () => {
      if (chartType === 'bar') {
        setData(Array.from({ length: 5 }, (_, i) => ({
          label: `Item ${i + 1}`,
          value: Math.floor(Math.random() * 100) + 10,
        })));
      } else if (chartType === 'line') {
        setData([
          {
            name: 'Series 1',
            data: Array.from({ length: 6 }, (_, i) => ({
              x: i,
              y: Math.floor(Math.random() * 100) + 10,
              label: `Point ${i + 1}`,
            })),
          },
          {
            name: 'Series 2',
            data: Array.from({ length: 6 }, (_, i) => ({
              x: i,
              y: Math.floor(Math.random() * 100) + 10,
              label: `Point ${i + 1}`,
            })),
          },
        ]);
      } else if (chartType === 'pie') {
        setData(Array.from({ length: 4 }, (_, i) => ({
          label: `Slice ${i + 1}`,
          value: Math.floor(Math.random() * 100) + 10,
        })));
      }
    };

    return (
      <div>
        <div style={{ 
          marginBottom: '1rem', 
          padding: '1rem', 
          backgroundColor: '#f0f0f0', 
          borderRadius: '8px' 
        }}>
          <div style={{ marginBottom: '0.5rem' }}>
            <label style={{ marginRight: '1rem' }}>
              Chart Type:
              <select 
                value={chartType} 
                onChange={(e) => setChartType(e.target.value)}
                style={{ marginLeft: '0.5rem' }}
              >
                <option value="bar">Bar</option>
                <option value="line">Line</option>
                <option value="pie">Pie</option>
              </select>
            </label>
          </div>
          <button onClick={generateRandomData}>
            Generate Random Data
          </button>
        </div>
        
        <Chart 
          {...args} 
          type={chartType}
          data={data}
        />
      </div>
    );
  },
};

// Empty state
export const EmptyState = {
  args: {
    ...Default.args,
    data: [],
  },
};

// Single data point
export const SingleDataPoint = {
  args: {
    ...Default.args,
    data: [{ label: 'Single Item', value: 100 }],
  },
};

// Many data points
export const ManyDataPoints = {
  args: {
    ...Default.args,
    data: Array.from({ length: 12 }, (_, i) => ({
      label: `Month ${i + 1}`,
      value: Math.floor(Math.random() * 100) + 10,
    })),
  },
};
