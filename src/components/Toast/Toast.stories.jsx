import React, { useState } from 'react';
import Toast from './index';

export default {
  title: 'Overlays and Feedback/Toast',
  component: Toast,
  parameters: {
    docs: {
      description: {
        component: 'A toast component for displaying brief notifications with accessibility features, smooth animations, and auto-dismiss functionality.'
      }
    }
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error'],
      description: 'Type of toast notification'
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'filled', 'outlined', 'minimal'],
      description: 'Visual variant of the toast'
    },
    title: {
      control: 'text',
      description: 'Title of the toast'
    },
    message: {
      control: 'text',
      description: 'Message content of the toast'
    },
    duration: {
      control: { type: 'number', min: 0, max: 10000, step: 500 },
      description: 'Duration in milliseconds before auto-dismiss'
    },
    dismissible: {
      control: 'boolean',
      description: 'Whether the toast can be dismissed manually'
    },
    autoDismiss: {
      control: 'boolean',
      description: 'Whether the toast auto-dismisses'
    },
    position: {
      control: { type: 'select' },
      options: ['top-left', 'top-right', 'top-center', 'bottom-left', 'bottom-right', 'bottom-center'],
      description: 'Position of the toast'
    },
    actionLabel: {
      control: 'text',
      description: 'Label for the action button'
    }
  }
};

// Template for interactive stories
const Template = (args) => {
  const [isVisible, setIsVisible] = useState(false);

  const showToast = () => {
    setIsVisible(true);
  };

  const hideToast = () => {
    setIsVisible(false);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <button
        onClick={showToast}
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
        Show Toast
      </button>
      
      {isVisible && (
        <Toast
          {...args}
          onDismiss={hideToast}
        />
      )}
    </div>
  );
};

// Default story
export const Default = Template.bind({});
Default.args = {
  type: 'info',
  variant: 'default',
  title: 'Information',
  message: 'This is an informational message.',
  duration: 5000,
  dismissible: true,
  autoDismiss: true,
  position: 'top-right',
  actionLabel: ''
};

// Types
export const Info = Template.bind({});
Info.args = {
  ...Default.args,
  type: 'info',
  title: 'Information',
  message: 'This is an informational message that provides useful details.'
};

export const Success = Template.bind({});
Success.args = {
  ...Default.args,
  type: 'success',
  title: 'Success!',
  message: 'Your action was completed successfully.'
};

export const Warning = Template.bind({});
Warning.args = {
  ...Default.args,
  type: 'warning',
  title: 'Warning',
  message: 'Please review your input before proceeding.'
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  type: 'error',
  title: 'Error',
  message: 'Something went wrong. Please try again.'
};

// Variants
export const Filled = Template.bind({});
Filled.args = {
  ...Default.args,
  variant: 'filled',
  title: 'Filled Toast',
  message: 'This toast uses the filled variant with colored background.'
};

export const Outlined = Template.bind({});
Outlined.args = {
  ...Default.args,
  variant: 'outlined',
  title: 'Outlined Toast',
  message: 'This toast uses the outlined variant with colored border.'
};

export const Minimal = Template.bind({});
Minimal.args = {
  ...Default.args,
  variant: 'minimal',
  title: 'Minimal Toast',
  message: 'This toast uses the minimal variant with subtle styling.'
};

// Positions
export const TopLeft = Template.bind({});
TopLeft.args = {
  ...Default.args,
  position: 'top-left',
  title: 'Top Left',
  message: 'This toast appears in the top-left corner.'
};

export const TopCenter = Template.bind({});
TopCenter.args = {
  ...Default.args,
  position: 'top-center',
  title: 'Top Center',
  message: 'This toast appears in the top-center of the screen.'
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  ...Default.args,
  position: 'bottom-left',
  title: 'Bottom Left',
  message: 'This toast appears in the bottom-left corner.'
};

export const BottomRight = Template.bind({});
BottomRight.args = {
  ...Default.args,
  position: 'bottom-right',
  title: 'Bottom Right',
  message: 'This toast appears in the bottom-right corner.'
};

export const BottomCenter = Template.bind({});
BottomCenter.args = {
  ...Default.args,
  position: 'bottom-center',
  title: 'Bottom Center',
  message: 'This toast appears in the bottom-center of the screen.'
};

// With action button
export const WithAction = Template.bind({});
WithAction.args = {
  ...Default.args,
  title: 'Action Required',
  message: 'Please confirm your action to proceed.',
  actionLabel: 'Confirm'
};

export const WithActionSuccess = Template.bind({});
WithActionSuccess.args = {
  ...Default.args,
  type: 'success',
  title: 'File Uploaded',
  message: 'Your file has been uploaded successfully.',
  actionLabel: 'View File'
};

export const WithActionError = Template.bind({});
WithActionError.args = {
  ...Default.args,
  type: 'error',
  title: 'Upload Failed',
  message: 'Your file upload failed. Please try again.',
  actionLabel: 'Retry'
};

// Duration variations
export const ShortDuration = Template.bind({});
ShortDuration.args = {
  ...Default.args,
  duration: 2000,
  title: 'Quick Message',
  message: 'This toast will disappear in 2 seconds.'
};

export const LongDuration = Template.bind({});
LongDuration.args = {
  ...Default.args,
  duration: 10000,
  title: 'Important Message',
  message: 'This toast will stay visible for 10 seconds.'
};

export const NoAutoDismiss = Template.bind({});
NoAutoDismiss.args = {
  ...Default.args,
  autoDismiss: false,
  title: 'Persistent Message',
  message: 'This toast will not auto-dismiss. You must close it manually.'
};

export const NotDismissible = Template.bind({});
NotDismissible.args = {
  ...Default.args,
  dismissible: false,
  autoDismiss: false,
  title: 'Non-dismissible',
  message: 'This toast cannot be dismissed manually and will not auto-dismiss.'
};

// Multiple toasts example
export const MultipleToasts = (args) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (type, title, message) => {
    const id = Date.now();
    const newToast = {
      id,
      type,
      title,
      message,
      ...args
    };
    setToasts(prev => [...prev, newToast]);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h3>Multiple Toasts Example</h3>
      <p>Click the buttons below to show different types of toasts.</p>
      
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        <button
          onClick={() => addToast('info', 'Info', 'This is an informational message.')}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Info Toast
        </button>
        
        <button
          onClick={() => addToast('success', 'Success!', 'Operation completed successfully.')}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#10b981',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Success Toast
        </button>
        
        <button
          onClick={() => addToast('warning', 'Warning', 'Please review your input.')}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#f59e0b',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Warning Toast
        </button>
        
        <button
          onClick={() => addToast('error', 'Error', 'Something went wrong.')}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#ef4444',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Error Toast
        </button>
      </div>

      {toasts.map((toast, index) => (
        <div
          key={toast.id}
          style={{
            position: 'fixed',
            top: `${1 + (index * 5)}rem`,
            right: '1rem',
            zIndex: 1000 + index
          }}
        >
          <Toast
            {...toast}
            onDismiss={() => removeToast(toast.id)}
          />
        </div>
      ))}
    </div>
  );
};

MultipleToasts.args = {
  variant: 'default',
  duration: 5000,
  dismissible: true,
  autoDismiss: true
};

// Form submission example
export const FormSubmission = (args) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      const success = Math.random() > 0.5;
      
      if (success) {
        setShowSuccess(true);
      } else {
        setShowError(true);
      }
    }, 2000);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '400px' }}>
      <h3>Form Submission Example</h3>
      <p>This demonstrates how toasts can be used for form feedback.</p>
      
      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>
            Email:
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              width: '100%',
              padding: '0.5rem',
              border: '1px solid #d1d5db',
              borderRadius: '4px'
            }}
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: isSubmitting ? '#6b7280' : '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            fontSize: '1rem',
            fontWeight: '500'
          }}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Form'}
        </button>
      </form>

      {showSuccess && (
        <Toast
          {...args}
          type="success"
          title="Form Submitted!"
          message="Your form has been submitted successfully."
          onDismiss={() => setShowSuccess(false)}
        />
      )}

      {showError && (
        <Toast
          {...args}
          type="error"
          title="Submission Failed"
          message="There was an error submitting your form. Please try again."
          actionLabel="Retry"
          onDismiss={() => setShowError(false)}
          onAction={() => {
            setShowError(false);
            handleSubmit();
          }}
        />
      )}
    </div>
  );
};

FormSubmission.args = {
  variant: 'default',
  duration: 5000,
  dismissible: true,
  autoDismiss: true,
  position: 'top-right'
};

// File upload example
export const FileUpload = (args) => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleUpload = () => {
    setIsUploading(true);
    setUploadProgress(0);
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          const success = Math.random() > 0.3;
          
          if (success) {
            setShowSuccess(true);
          } else {
            setShowError(true);
          }
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '400px' }}>
      <h3>File Upload Example</h3>
      <p>This demonstrates toasts for file upload feedback.</p>
      
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="file"
          style={{
            width: '100%',
            padding: '0.5rem',
            border: '1px solid #d1d5db',
            borderRadius: '4px'
          }}
        />
      </div>
      
      <button
        onClick={handleUpload}
        disabled={isUploading}
        style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: isUploading ? '#6b7280' : '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: isUploading ? 'not-allowed' : 'pointer',
          fontSize: '1rem',
          fontWeight: '500'
        }}
      >
        {isUploading ? `Uploading... ${uploadProgress}%` : 'Upload File'}
      </button>

      {showSuccess && (
        <Toast
          {...args}
          type="success"
          title="Upload Complete!"
          message="Your file has been uploaded successfully."
          actionLabel="View File"
          onDismiss={() => setShowSuccess(false)}
        />
      )}

      {showError && (
        <Toast
          {...args}
          type="error"
          title="Upload Failed"
          message="There was an error uploading your file. Please try again."
          actionLabel="Retry"
          onDismiss={() => setShowError(false)}
          onAction={() => {
            setShowError(false);
            handleUpload();
          }}
        />
      )}
    </div>
  );
};

FileUpload.args = {
  variant: 'default',
  duration: 5000,
  dismissible: true,
  autoDismiss: true,
  position: 'top-right'
};
