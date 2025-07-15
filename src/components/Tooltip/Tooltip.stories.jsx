import React from 'react';
import Tooltip from './Tooltip.jsx';
import Button from '../Button';

export default {
  title: 'Interactive Elements/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    content: {
      control: 'text',
      description: 'Tooltip content'
    },
    position: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right'],
      description: 'Position of the tooltip'
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'info', 'success', 'warning', 'error'],
      description: 'Visual variant of the tooltip'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the tooltip'
    },
    delay: {
      control: { type: 'number', min: 0, max: 1000, step: 50 },
      description: 'Delay before showing tooltip (ms)'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the tooltip is disabled'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    }
  }
};

// Default story
export const Default = {
  args: {
    content: 'This is a helpful tooltip',
    position: 'top',
    variant: 'default',
    size: 'md',
    delay: 200,
    disabled: false,
    children: <Button variant="primary">Hover me</Button>
  }
};

// Positions
export const Top = {
  args: {
    content: 'Tooltip positioned above',
    position: 'top',
    children: <Button variant="secondary">Top</Button>
  }
};

export const Bottom = {
  args: {
    content: 'Tooltip positioned below',
    position: 'bottom',
    children: <Button variant="secondary">Bottom</Button>
  }
};

export const Left = {
  args: {
    content: 'Tooltip positioned to the left',
    position: 'left',
    children: <Button variant="secondary">Left</Button>
  }
};

export const Right = {
  args: {
    content: 'Tooltip positioned to the right',
    position: 'right',
    children: <Button variant="secondary">Right</Button>
  }
};

export const TopLeft = {
  args: {
    content: 'Tooltip at top-left',
    position: 'top-left',
    children: <Button variant="secondary">Top Left</Button>
  }
};

export const TopRight = {
  args: {
    content: 'Tooltip at top-right',
    position: 'top-right',
    children: <Button variant="secondary">Top Right</Button>
  }
};

export const BottomLeft = {
  args: {
    content: 'Tooltip at bottom-left',
    position: 'bottom-left',
    children: <Button variant="secondary">Bottom Left</Button>
  }
};

export const BottomRight = {
  args: {
    content: 'Tooltip at bottom-right',
    position: 'bottom-right',
    children: <Button variant="secondary">Bottom Right</Button>
  }
};

// Variants
export const Info = {
  args: {
    content: 'This is an informational tooltip',
    variant: 'info',
    children: <Button variant="primary">Info</Button>
  }
};

export const Success = {
  args: {
    content: 'Operation completed successfully!',
    variant: 'success',
    children: <Button variant="primary">Success</Button>
  }
};

export const Warning = {
  args: {
    content: 'Please be careful with this action',
    variant: 'warning',
    children: <Button variant="primary">Warning</Button>
  }
};

export const Error = {
  args: {
    content: 'An error occurred. Please try again.',
    variant: 'error',
    children: <Button variant="primary">Error</Button>
  }
};

// Sizes
export const Small = {
  args: {
    content: 'Small tooltip',
    size: 'sm',
    children: <Button variant="secondary" size="sm">Small</Button>
  }
};

export const Large = {
  args: {
    content: 'This is a large tooltip with more detailed information',
    size: 'lg',
    children: <Button variant="secondary" size="lg">Large</Button>
  }
};

// All positions
export const AllPositions = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(3, 1fr)', 
      gap: '2rem', 
      padding: '2rem',
      maxWidth: '600px'
    }}>
      <div style={{ gridColumn: '2', textAlign: 'center' }}>
        <Tooltip content="Top position" position="top">
          <Button variant="secondary">Top</Button>
        </Tooltip>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Tooltip content="Left position" position="left">
          <Button variant="secondary">Left</Button>
        </Tooltip>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Tooltip content="Right position" position="right">
          <Button variant="secondary">Right</Button>
        </Tooltip>
      </div>
      
      <div style={{ gridColumn: '2', textAlign: 'center' }}>
        <Tooltip content="Bottom position" position="bottom">
          <Button variant="secondary">Bottom</Button>
        </Tooltip>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Tooltip content="Top-left position" position="top-left">
          <Button variant="secondary">Top-Left</Button>
        </Tooltip>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Tooltip content="Top-right position" position="top-right">
          <Button variant="secondary">Top-Right</Button>
        </Tooltip>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Tooltip content="Bottom-left position" position="bottom-left">
          <Button variant="secondary">Bottom-Left</Button>
        </Tooltip>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Tooltip content="Bottom-right position" position="bottom-right">
          <Button variant="secondary">Bottom-Right</Button>
        </Tooltip>
      </div>
    </div>
  )
};

// All variants
export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
      <Tooltip content="Default tooltip" variant="default">
        <Button variant="secondary">Default</Button>
      </Tooltip>
      
      <Tooltip content="Informational tooltip" variant="info">
        <Button variant="secondary">Info</Button>
      </Tooltip>
      
      <Tooltip content="Success tooltip" variant="success">
        <Button variant="secondary">Success</Button>
      </Tooltip>
      
      <Tooltip content="Warning tooltip" variant="warning">
        <Button variant="secondary">Warning</Button>
      </Tooltip>
      
      <Tooltip content="Error tooltip" variant="error">
        <Button variant="secondary">Error</Button>
      </Tooltip>
    </div>
  )
};

// All sizes
export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'center' }}>
      <Tooltip content="Small tooltip" size="sm">
        <Button variant="secondary" size="sm">Small</Button>
      </Tooltip>
      
      <Tooltip content="Medium tooltip" size="md">
        <Button variant="secondary" size="md">Medium</Button>
      </Tooltip>
      
      <Tooltip content="Large tooltip with more detailed information" size="lg">
        <Button variant="secondary" size="lg">Large</Button>
      </Tooltip>
    </div>
  )
};

// Interactive example
export const Interactive = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ marginBottom: '1rem' }}>Interactive Tooltips</h4>
        <p style={{ marginBottom: '1rem', color: '#6b7280' }}>
          Hover over the buttons to see different tooltip behaviors
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Tooltip content="Quick tooltip (no delay)" delay={0}>
            <Button variant="primary">Instant</Button>
          </Tooltip>
          
          <Tooltip content="Delayed tooltip (500ms)" delay={500}>
            <Button variant="primary">Delayed</Button>
          </Tooltip>
          
          <Tooltip content="This tooltip is disabled" disabled>
            <Button variant="secondary">Disabled</Button>
          </Tooltip>
        </div>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ marginBottom: '1rem' }}>Different Content Types</h4>
        
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Tooltip content="Simple text tooltip">
            <Button variant="outline">Text</Button>
          </Tooltip>
          
          <Tooltip content={
            <div>
              <strong>Rich content</strong>
              <br />
              With multiple lines and formatting
            </div>
          }>
            <Button variant="outline">Rich</Button>
          </Tooltip>
          
          <Tooltip content={
            <div>
              <div style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>Complex Tooltip</div>
              <div style={{ fontSize: '0.75rem', opacity: 0.9 }}>
                This tooltip contains structured content with multiple elements.
              </div>
            </div>
          }>
            <Button variant="outline">Complex</Button>
          </Tooltip>
        </div>
      </div>
    </div>
  )
};

// Form elements example
export const FormElements = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
      <h4 style={{ marginBottom: '1rem' }}>Tooltips with Form Elements</h4>
      
      <div>
        <label style={{ display: 'block', marginBottom: '0.5rem' }}>
          Email Address
          <Tooltip content="We'll never share your email with anyone else" position="right">
            <span style={{ marginLeft: '0.25rem', cursor: 'help', color: '#6b7280' }}>ⓘ</span>
          </Tooltip>
        </label>
        <input 
          type="email" 
          placeholder="your@email.com"
          style={{ 
            width: '100%', 
            padding: '0.5rem', 
            border: '1px solid #d1d5db', 
            borderRadius: '0.25rem' 
          }} 
        />
      </div>
      
      <div>
        <label style={{ display: 'block', marginBottom: '0.5rem' }}>
          Password
          <Tooltip content="Must be at least 8 characters with uppercase, lowercase, and number" position="right">
            <span style={{ marginLeft: '0.25rem', cursor: 'help', color: '#6b7280' }}>ⓘ</span>
          </Tooltip>
        </label>
        <input 
          type="password" 
          placeholder="Enter password"
          style={{ 
            width: '100%', 
            padding: '0.5rem', 
            border: '1px solid #d1d5db', 
            borderRadius: '0.25rem' 
          }} 
        />
      </div>
      
      <div>
        <label style={{ display: 'block', marginBottom: '0.5rem' }}>
          <input 
            type="checkbox" 
            style={{ marginRight: '0.5rem' }} 
          />
          Subscribe to newsletter
          <Tooltip content="Receive updates about new features and products" position="right">
            <span style={{ marginLeft: '0.25rem', cursor: 'help', color: '#6b7280' }}>ⓘ</span>
          </Tooltip>
        </label>
      </div>
      
      <div style={{ marginTop: '1rem' }}>
        <Tooltip content="Submit the form to create your account" position="top">
          <Button variant="primary" fullWidth>Create Account</Button>
        </Tooltip>
      </div>
    </div>
  )
};

// Disabled state
export const Disabled = {
  args: {
    content: 'This tooltip is disabled and will not show',
    disabled: true,
    children: <Button variant="secondary">Disabled Tooltip</Button>
  }
};
