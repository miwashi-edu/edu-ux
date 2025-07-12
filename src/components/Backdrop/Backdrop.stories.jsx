import React, { useState } from 'react';
import Backdrop from './index';

export default {
  title: 'Overlays and Feedback/Backdrop',
  component: Backdrop,
  parameters: {
    docs: {
      description: {
        component: 'A backdrop component for modal overlays with accessibility features and animations.'
      }
    }
  },
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Whether the backdrop is visible'
    },
    variant: {
      control: { type: 'select' },
      options: ['dark', 'light', 'transparent'],
      description: 'Visual variant of the backdrop'
    },
    blur: {
      control: 'boolean',
      description: 'Whether to apply blur effect'
    },
    animated: {
      control: 'boolean',
      description: 'Whether to animate the backdrop'
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler for backdrop clicks'
    },
    onKeyDown: {
      action: 'keyDown',
      description: 'Key down handler for keyboard events'
    }
  }
};

// Template for interactive stories
const Template = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen || false);
  
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  
  return (
    <div style={{ padding: '2rem' }}>
      <button 
        onClick={handleOpen}
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Open Backdrop
      </button>
      
      <Backdrop
        {...args}
        isOpen={isOpen}
        onClick={handleClose}
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            handleClose();
          }
          args.onKeyDown?.(e);
        }}
      >
        <div style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          maxWidth: '400px',
          textAlign: 'center'
        }}>
          <h3>Modal Content</h3>
          <p>This is content inside the backdrop. Click outside or press Escape to close.</p>
          <button 
            onClick={handleClose}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Close
          </button>
        </div>
      </Backdrop>
    </div>
  );
};

// Default story
export const Default = Template.bind({});
Default.args = {
  isOpen: false,
  variant: 'dark',
  blur: false,
  animated: true
};

// Dark variant
export const Dark = Template.bind({});
Dark.args = {
  ...Default.args,
  variant: 'dark'
};

// Light variant
export const Light = Template.bind({});
Light.args = {
  ...Default.args,
  variant: 'light'
};

// Transparent variant
export const Transparent = Template.bind({});
Transparent.args = {
  ...Default.args,
  variant: 'transparent'
};

// With blur effect
export const WithBlur = Template.bind({});
WithBlur.args = {
  ...Default.args,
  blur: true
};

// Without animation
export const NoAnimation = Template.bind({});
NoAnimation.args = {
  ...Default.args,
  animated: false
};

// Complex content example
export const ComplexContent = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div style={{ padding: '2rem' }}>
      <button 
        onClick={() => setIsOpen(true)}
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Open Complex Modal
      </button>
      
      <Backdrop
        {...args}
        isOpen={isOpen}
        onClick={() => setIsOpen(false)}
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            setIsOpen(false);
          }
        }}
      >
        <div style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
          maxWidth: '600px',
          width: '90vw',
          maxHeight: '80vh',
          overflow: 'auto'
        }}>
          <h2 style={{ marginTop: 0, color: '#333' }}>Complex Modal Example</h2>
          <p>This demonstrates a more complex modal with scrollable content and multiple interactive elements.</p>
          
          <div style={{ margin: '1rem 0' }}>
            <h4>Form Example</h4>
            <input 
              type="text" 
              placeholder="Enter your name"
              style={{
                width: '100%',
                padding: '0.5rem',
                marginBottom: '1rem',
                border: '1px solid #ddd',
                borderRadius: '4px'
              }}
            />
            <textarea 
              placeholder="Enter your message"
              rows={4}
              style={{
                width: '100%',
                padding: '0.5rem',
                marginBottom: '1rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
                resize: 'vertical'
              }}
            />
          </div>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
            <button 
              onClick={() => setIsOpen(false)}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#6c757d',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Cancel
            </button>
            <button 
              onClick={() => setIsOpen(false)}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </Backdrop>
    </div>
  );
};

ComplexContent.args = {
  variant: 'dark',
  blur: true,
  animated: true
};
