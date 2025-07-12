import React, { useState, useEffect } from 'react';
import ProgressBar from './index';

export default {
  title: 'Overlays and Feedback/ProgressBar',
  component: ProgressBar,
  parameters: {
    docs: {
      description: {
        component: 'A progress bar component for indicating task or loading progress with accessibility features and smooth animations.'
      }
    }
  },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Current progress value'
    },
    max: {
      control: { type: 'number', min: 1 },
      description: 'Maximum progress value'
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'striped', 'animated', 'gradient', 'success', 'warning', 'error'],
      description: 'Visual variant of the progress bar'
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the progress bar'
    },
    animated: {
      control: 'boolean',
      description: 'Whether to animate progress changes'
    },
    showLabel: {
      control: 'boolean',
      description: 'Whether to show the progress label'
    },
    labelPosition: {
      control: { type: 'select' },
      options: ['top', 'bottom'],
      description: 'Position of the progress label'
    }
  }
};

// Template for interactive stories
const Template = (args) => {
  return (
    <div style={{ padding: '2rem', maxWidth: '400px' }}>
      <ProgressBar {...args} />
    </div>
  );
};

// Default story
export const Default = Template.bind({});
Default.args = {
  value: 50,
  max: 100,
  variant: 'default',
  size: 'medium',
  animated: true,
  showLabel: false,
  labelPosition: 'top'
};

// With label
export const WithLabel = Template.bind({});
WithLabel.args = {
  ...Default.args,
  showLabel: true,
  labelPosition: 'top'
};

// With label at bottom
export const WithLabelBottom = Template.bind({});
WithLabelBottom.args = {
  ...Default.args,
  showLabel: true,
  labelPosition: 'bottom'
};

// Sizes
export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  size: 'small',
  showLabel: true
};

export const Large = Template.bind({});
Large.args = {
  ...Default.args,
  size: 'large',
  showLabel: true
};

// Variants
export const Success = Template.bind({});
Success.args = {
  ...Default.args,
  variant: 'success',
  value: 75,
  showLabel: true
};

export const Warning = Template.bind({});
Warning.args = {
  ...Default.args,
  variant: 'warning',
  value: 60,
  showLabel: true
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  variant: 'error',
  value: 25,
  showLabel: true
};

export const Striped = Template.bind({});
Striped.args = {
  ...Default.args,
  variant: 'striped',
  value: 45,
  showLabel: true
};

export const Animated = Template.bind({});
Animated.args = {
  ...Default.args,
  variant: 'animated',
  value: 80,
  showLabel: true
};

export const Gradient = Template.bind({});
Gradient.args = {
  ...Default.args,
  variant: 'gradient',
  value: 90,
  showLabel: true
};

// Indeterminate progress
export const Indeterminate = Template.bind({});
Indeterminate.args = {
  ...Default.args,
  value: null,
  showLabel: true
};

// Without animation
export const NoAnimation = Template.bind({});
NoAnimation.args = {
  ...Default.args,
  animated: false,
  showLabel: true
};

// Animated progress example
export const AnimatedProgress = (args) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div style={{ padding: '2rem', maxWidth: '400px' }}>
      <h3>Animated Progress Example</h3>
      <p>This progress bar automatically updates every 500ms.</p>
      <ProgressBar
        {...args}
        value={progress}
        showLabel={true}
        labelPosition="top"
      />
      <button 
        onClick={() => setProgress(0)}
        style={{
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Reset Progress
      </button>
    </div>
  );
};

AnimatedProgress.args = {
  variant: 'default',
  size: 'medium',
  animated: true
};

// File upload example
export const FileUpload = (args) => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  
  const simulateUpload = () => {
    setUploading(true);
    setUploadProgress(0);
    
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);
  };
  
  return (
    <div style={{ padding: '2rem', maxWidth: '400px' }}>
      <h3>File Upload Progress</h3>
      <p>Simulate a file upload with realistic progress updates.</p>
      
      <ProgressBar
        {...args}
        value={uploadProgress}
        variant={uploadProgress === 100 ? 'success' : 'default'}
        showLabel={true}
        labelPosition="top"
      />
      
      <button 
        onClick={simulateUpload}
        disabled={uploading}
        style={{
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          backgroundColor: uploading ? '#6c757d' : '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: uploading ? 'not-allowed' : 'pointer'
        }}
      >
        {uploading ? 'Uploading...' : 'Start Upload'}
      </button>
    </div>
  );
};

FileUpload.args = {
  size: 'medium',
  animated: true
};

// Multiple progress bars
export const MultipleProgress = (args) => {
  return (
    <div style={{ padding: '2rem', maxWidth: '400px' }}>
      <h3>Multiple Progress Bars</h3>
      
      <div style={{ marginBottom: '1rem' }}>
        <label>Download Progress</label>
        <ProgressBar
          {...args}
          value={75}
          variant="default"
          showLabel={true}
          labelPosition="top"
        />
      </div>
      
      <div style={{ marginBottom: '1rem' }}>
        <label>Processing Status</label>
        <ProgressBar
          {...args}
          value={null}
          showLabel={true}
          labelPosition="top"
        />
      </div>
      
      <div style={{ marginBottom: '1rem' }}>
        <label>Validation Progress</label>
        <ProgressBar
          {...args}
          value={90}
          variant="success"
          showLabel={true}
          labelPosition="top"
        />
      </div>
    </div>
  );
};

MultipleProgress.args = {
  size: 'medium',
  animated: true
};
