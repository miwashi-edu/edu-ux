import React, { useState, useEffect } from 'react';
import Spinner from './index';

export default {
  title: 'Overlays and Feedback/Spinner',
  component: Spinner,
  parameters: {
    docs: {
      description: {
        component: 'A spinner component for indicating loading states with accessibility features and smooth animations.'
      }
    }
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'dots', 'bars', 'pulse', 'ripple', 'grid', 'orbit', 'custom'],
      description: 'Visual variant of the spinner'
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the spinner'
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'light', 'dark'],
      description: 'Color theme of the spinner'
    },
    speed: {
      control: { type: 'select' },
      options: ['slow', 'normal', 'fast'],
      description: 'Animation speed of the spinner'
    },
    label: {
      control: 'text',
      description: 'Accessible label for screen readers'
    }
  }
};

// Template for interactive stories
const Template = (args) => {
  return (
    <div style={{ padding: '2rem', display: 'flex', justifyContent: 'center' }}>
      <Spinner {...args} />
    </div>
  );
};

// Default story
export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  size: 'medium',
  color: 'primary',
  speed: 'normal',
  label: 'Loading...'
};

// Variants
export const Dots = Template.bind({});
Dots.args = {
  ...Default.args,
  variant: 'dots'
};

export const Bars = Template.bind({});
Bars.args = {
  ...Default.args,
  variant: 'bars'
};

export const Pulse = Template.bind({});
Pulse.args = {
  ...Default.args,
  variant: 'pulse'
};

export const Ripple = Template.bind({});
Ripple.args = {
  ...Default.args,
  variant: 'ripple'
};

export const Grid = Template.bind({});
Grid.args = {
  ...Default.args,
  variant: 'grid'
};

export const Orbit = Template.bind({});
Orbit.args = {
  ...Default.args,
  variant: 'orbit'
};

export const Custom = Template.bind({});
Custom.args = {
  ...Default.args,
  variant: 'custom'
};

// Sizes
export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  size: 'small'
};

export const Large = Template.bind({});
Large.args = {
  ...Default.args,
  size: 'large'
};

// Colors
export const Primary = Template.bind({});
Primary.args = {
  ...Default.args,
  color: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Default.args,
  color: 'secondary'
};

export const Success = Template.bind({});
Success.args = {
  ...Default.args,
  color: 'success'
};

export const Warning = Template.bind({});
Warning.args = {
  ...Default.args,
  color: 'warning'
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  color: 'error'
};

export const Light = Template.bind({});
Light.args = {
  ...Default.args,
  color: 'light',
  style: { backgroundColor: '#1f2937', padding: '1rem', borderRadius: '4px' }
};

export const Dark = Template.bind({});
Dark.args = {
  ...Default.args,
  color: 'dark'
};

// Speeds
export const Slow = Template.bind({});
Slow.args = {
  ...Default.args,
  speed: 'slow'
};

export const Fast = Template.bind({});
Fast.args = {
  ...Default.args,
  speed: 'fast'
};

// Without label
export const NoLabel = Template.bind({});
NoLabel.args = {
  ...Default.args,
  label: ''
};

// All variants showcase
export const AllVariants = (args) => {
  const variants = ['default', 'dots', 'bars', 'pulse', 'ripple', 'grid', 'orbit', 'custom'];
  
  return (
    <div style={{ padding: '2rem' }}>
      <h3>All Spinner Variants</h3>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '2rem',
        alignItems: 'center'
      }}>
        {variants.map((variant) => (
          <div key={variant} style={{ textAlign: 'center' }}>
            <h4 style={{ textTransform: 'capitalize', marginBottom: '1rem' }}>
              {variant}
            </h4>
            <Spinner
              {...args}
              variant={variant}
              label={`${variant} loading`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

AllVariants.args = {
  size: 'medium',
  color: 'primary',
  speed: 'normal'
};

// All sizes showcase
export const AllSizes = (args) => {
  const sizes = ['small', 'medium', 'large'];
  
  return (
    <div style={{ padding: '2rem' }}>
      <h3>All Spinner Sizes</h3>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '3rem',
        alignItems: 'center'
      }}>
        {sizes.map((size) => (
          <div key={size} style={{ textAlign: 'center' }}>
            <h4 style={{ textTransform: 'capitalize', marginBottom: '1rem' }}>
              {size}
            </h4>
            <Spinner
              {...args}
              size={size}
              label={`${size} loading`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

AllSizes.args = {
  variant: 'default',
  color: 'primary',
  speed: 'normal'
};

// All colors showcase
export const AllColors = (args) => {
  const colors = ['primary', 'secondary', 'success', 'warning', 'error'];
  
  return (
    <div style={{ padding: '2rem' }}>
      <h3>All Spinner Colors</h3>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
        gap: '2rem',
        alignItems: 'center'
      }}>
        {colors.map((color) => (
          <div key={color} style={{ textAlign: 'center' }}>
            <h4 style={{ textTransform: 'capitalize', marginBottom: '1rem' }}>
              {color}
            </h4>
            <Spinner
              {...args}
              color={color}
              label={`${color} loading`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

AllColors.args = {
  variant: 'default',
  size: 'medium',
  speed: 'normal'
};

// Button loading example
export const ButtonLoading = (args) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 3000);
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h3>Button Loading State</h3>
      <p>Click the button to see the loading state.</p>
      
      <button
        onClick={handleClick}
        disabled={isLoading}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.75rem 1.5rem',
          backgroundColor: isLoading ? '#6b7280' : '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: isLoading ? 'not-allowed' : 'pointer',
          fontSize: '1rem',
          fontWeight: '500'
        }}
      >
        {isLoading && (
          <Spinner
            {...args}
            size="small"
            color="light"
            label=""
          />
        )}
        {isLoading ? 'Processing...' : 'Submit Form'}
      </button>
    </div>
  );
};

ButtonLoading.args = {
  variant: 'default',
  speed: 'normal'
};

// Page loading example
export const PageLoading = (args) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        zIndex: 1000
      }}>
        <Spinner
          {...args}
          size="large"
          label="Page loading"
        />
        <p style={{ color: '#6b7280', fontSize: '1.125rem' }}>
          Loading your content...
        </p>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Content Loaded!</h2>
      <p>Your page content has been loaded successfully.</p>
      <button
        onClick={() => setIsLoading(true)}
        style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '1rem',
          fontWeight: '500'
        }}
      >
        Reload
      </button>
    </div>
  );
};

PageLoading.args = {
  variant: 'ripple',
  color: 'primary',
  speed: 'normal'
};

// Inline loading example
export const InlineLoading = (args) => {
  return (
    <div style={{ padding: '2rem', maxWidth: '600px' }}>
      <h3>Inline Loading Examples</h3>
      
      <div style={{ marginBottom: '2rem' }}>
        <h4>Loading text with spinner</h4>
        <p>
          This is some content that includes a loading indicator{' '}
          <Spinner
            {...args}
            size="small"
            label=""
          />
          {' '}right in the middle of the text.
        </p>
      </div>
      
      <div style={{ marginBottom: '2rem' }}>
        <h4>Loading in a list</h4>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <Spinner {...args} size="small" label="" />
            Loading item 1...
          </li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <Spinner {...args} size="small" label="" />
            Loading item 2...
          </li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Spinner {...args} size="small" label="" />
            Loading item 3...
          </li>
        </ul>
      </div>
      
      <div>
        <h4>Loading in a card</h4>
        <div style={{
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          padding: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <Spinner {...args} label="Loading card content" />
          <div>
            <h5 style={{ margin: '0 0 0.5rem 0' }}>Card Title</h5>
            <p style={{ margin: 0, color: '#6b7280' }}>
              Loading card description...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

InlineLoading.args = {
  variant: 'dots',
  color: 'primary',
  speed: 'normal'
};
