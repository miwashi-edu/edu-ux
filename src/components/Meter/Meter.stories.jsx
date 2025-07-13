import React from 'react';
import { Meter } from './index.js';

export default {
  title: 'Data Display/Meter',
  component: Meter,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A progress indicator component for displaying values within a range with support for variants, thresholds, and animations.',
      },
    },
  },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Current value',
    },
    max: {
      control: { type: 'number', min: 1 },
      description: 'Maximum value',
    },
    min: {
      control: { type: 'number', min: 0 },
      description: 'Minimum value',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'success', 'warning', 'danger', 'info'],
      description: 'Visual variant',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Size variant',
    },
    animated: {
      control: { type: 'boolean' },
      description: 'Whether to animate the fill',
    },
    striped: {
      control: { type: 'boolean' },
      description: 'Whether to show striped pattern',
    },
  },
};

// Basic Meter
export const Default = {
  args: {
    value: 75,
    max: 100,
    label: 'Progress',
    showValue: true,
  },
};

// All Variants
export const Variants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Meter value={25} max={100} label="Success" variant="success" />
      <Meter value={50} max={100} label="Warning" variant="warning" />
      <Meter value={75} max={100} label="Danger" variant="danger" />
      <Meter value={90} max={100} label="Info" variant="info" />
      <Meter value={60} max={100} label="Default (auto)" variant="default" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available visual variants of the Meter component.',
      },
    },
  },
};

// All Sizes
export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Meter value={60} max={100} label="Small" size="sm" />
      <Meter value={60} max={100} label="Medium" size="md" />
      <Meter value={60} max={100} label="Large" size="lg" />
      <Meter value={60} max={100} label="Extra Large" size="xl" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available size variants of the Meter component.',
      },
    },
  },
};

// With Thresholds
export const WithThresholds = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Meter 
        value={65} 
        max={100} 
        label="Storage Usage" 
        thresholds={[
          { value: 25, label: 'Low' },
          { value: 50, label: 'Medium' },
          { value: 75, label: 'High' },
          { value: 90, label: 'Critical' },
        ]}
      />
      <Meter 
        value={85} 
        max={100} 
        label="CPU Usage" 
        variant="warning"
        thresholds={[
          { value: 30, label: 'Normal' },
          { value: 60, label: 'Warning' },
          { value: 80, label: 'Critical' },
        ]}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Meters with threshold indicators showing different levels.',
      },
    },
  },
};

// Animated and Striped
export const AnimatedAndStriped = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Meter 
        value={70} 
        max={100} 
        label="Animated Progress" 
        animated={true}
      />
      <Meter 
        value={80} 
        max={100} 
        label="Striped Progress" 
        striped={true}
        variant="warning"
      />
      <Meter 
        value={90} 
        max={100} 
        label="Animated & Striped" 
        animated={true}
        striped={true}
        variant="danger"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Meters with animations and striped patterns.',
      },
    },
  },
};

// Percentage Display
export const PercentageDisplay = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Meter 
        value={75} 
        max={100} 
        label="Value Display" 
        showPercentage={false}
      />
      <Meter 
        value={75} 
        max={100} 
        label="Percentage Display" 
        showPercentage={true}
      />
      <Meter 
        value={75} 
        max={100} 
        label="No Value Display" 
        showValue={false}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different ways to display meter values.',
      },
    },
  },
};

// Real-World Examples
export const RealWorldExamples = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* System Resources */}
      <div>
        <h4>System Resources</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Meter 
            value={45} 
            max={100} 
            label="CPU Usage" 
            variant="info"
            thresholds={[{ value: 80, label: 'High' }]}
          />
          <Meter 
            value={78} 
            max={100} 
            label="Memory Usage" 
            variant="warning"
            thresholds={[{ value: 75, label: 'Warning' }]}
          />
          <Meter 
            value={92} 
            max={100} 
            label="Disk Usage" 
            variant="danger"
            thresholds={[{ value: 90, label: 'Critical' }]}
          />
        </div>
      </div>
      
      {/* Project Progress */}
      <div>
        <h4>Project Progress</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Meter 
            value={85} 
            max={100} 
            label="Design Phase" 
            variant="success"
            showPercentage={true}
          />
          <Meter 
            value={60} 
            max={100} 
            label="Development" 
            variant="info"
            showPercentage={true}
          />
          <Meter 
            value={25} 
            max={100} 
            label="Testing" 
            variant="warning"
            showPercentage={true}
          />
        </div>
      </div>
      
      {/* Survey Results */}
      <div>
        <h4>Survey Results</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Meter 
            value={85} 
            max={100} 
            label="Satisfaction Rate" 
            variant="success"
            showPercentage={true}
          />
          <Meter 
            value={12} 
            max={100} 
            label="Dissatisfaction Rate" 
            variant="danger"
            showPercentage={true}
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples showing various use cases for meters.',
      },
    },
  },
};

// Interactive Example
export const InteractiveExample = {
  render: () => {
    const [value, setValue] = React.useState(50);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Meter 
          value={value} 
          max={100} 
          label="Interactive Meter" 
          showPercentage={true}
        />
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <label htmlFor="meter-value">Value: </label>
          <input
            id="meter-value"
            type="range"
            min="0"
            max="100"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            style={{ flex: 1 }}
          />
          <span>{value}</span>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive example showing how meter values can be controlled.',
      },
    },
  },
};
