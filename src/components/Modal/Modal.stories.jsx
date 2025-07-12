import React, { useState } from 'react';
import Modal from './index';

export default {
  title: 'Overlays and Feedback/Modal',
  component: Modal,
  parameters: {
    docs: {
      description: {
        component: 'A modal component for focused dialog interactions with accessibility features and smooth animations.'
      }
    }
  },
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Whether the modal is visible'
    },
    title: {
      control: 'text',
      description: 'Modal title'
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large', 'full'],
      description: 'Size of the modal'
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'centered', 'fullscreen'],
      description: 'Visual variant of the modal'
    },
    closeOnBackdropClick: {
      control: 'boolean',
      description: 'Whether clicking backdrop closes the modal'
    },
    closeOnEscape: {
      control: 'boolean',
      description: 'Whether pressing escape closes the modal'
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Whether to show the close button'
    },
    onClose: {
      action: 'closed',
      description: 'Callback fired when modal should close'
    }
  }
};

// Template for interactive stories
const Template = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen || false);
  
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
    args.onClose?.();
  };
  
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
        Open Modal
      </button>
      
      <Modal
        {...args}
        isOpen={isOpen}
        onClose={handleClose}
      >
        <p>This is the modal content. You can put any content here.</p>
        <p>Press Escape or use the close button to close this modal.</p>
        <p><strong>Note:</strong> This modal only closes through explicit actions (true modal behavior).</p>
      </Modal>
    </div>
  );
};

// Default story
export const Default = Template.bind({});
Default.args = {
  isOpen: false,
  title: 'Default Modal',
  size: 'medium',
  variant: 'default',
  closeOnBackdropClick: false,
  closeOnEscape: true,
  showCloseButton: true
};

// Small modal
export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  title: 'Small Modal',
  size: 'small'
};

// Large modal
export const Large = Template.bind({});
Large.args = {
  ...Default.args,
  title: 'Large Modal',
  size: 'large'
};

// Full modal
export const Full = Template.bind({});
Full.args = {
  ...Default.args,
  title: 'Full Modal',
  size: 'full'
};

// Centered variant
export const Centered = Template.bind({});
Centered.args = {
  ...Default.args,
  title: 'Centered Modal',
  variant: 'centered'
};

// Fullscreen variant
export const Fullscreen = Template.bind({});
Fullscreen.args = {
  ...Default.args,
  title: 'Fullscreen Modal',
  variant: 'fullscreen'
};

// Without escape key
export const NoEscapeKey = Template.bind({});
NoEscapeKey.args = {
  ...Default.args,
  title: 'Modal Without Escape Key',
  closeOnEscape: false
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
      
      <Modal
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Complex Modal Example"
        size="large"
      >
        <div style={{ marginBottom: '1rem' }}>
          <h3>Form Example</h3>
          <p>This demonstrates a modal with form elements and complex content.</p>
          <p><strong>Note:</strong> This modal only closes through explicit actions (close button, form submission, or cancel button).</p>
        </div>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem' }}>
              Name
            </label>
            <input 
              id="name"
              type="text" 
              placeholder="Enter your name"
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '1px solid #ddd',
                borderRadius: '4px'
              }}
            />
          </div>
          
          <div>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>
              Email
            </label>
            <input 
              id="email"
              type="email" 
              placeholder="Enter your email"
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '1px solid #ddd',
                borderRadius: '4px'
              }}
            />
          </div>
          
          <div>
            <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem' }}>
              Message
            </label>
            <textarea 
              id="message"
              placeholder="Enter your message"
              rows={4}
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
                resize: 'vertical'
              }}
            />
          </div>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', marginTop: '1rem' }}>
            <button 
              type="button"
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
              type="submit"
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
        </form>
      </Modal>
    </div>
  );
};

ComplexContent.args = {
  closeOnBackdropClick: false,
  closeOnEscape: true,
  showCloseButton: true
};
