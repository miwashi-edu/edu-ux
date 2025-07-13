import ValidationMessage from './ValidationMessage.jsx';

export default {
  title: 'Interactive Elements/ValidationMessage',
  component: ValidationMessage,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    message: {
      control: 'text',
      description: 'The validation message to display'
    },
    type: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error'],
      description: 'The type of validation message'
    },
    show: {
      control: 'boolean',
      description: 'Whether to show the validation message'
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
    message: 'This is a default validation message',
    type: 'info',
    show: true
  }
};

// Info state
export const Info = {
  args: {
    message: 'This is an informational message',
    type: 'info',
    show: true
  }
};

// Success state
export const Success = {
  args: {
    message: 'Operation completed successfully!',
    type: 'success',
    show: true
  }
};

// Warning state
export const Warning = {
  args: {
    message: 'Please review your input before proceeding',
    type: 'warning',
    show: true
  }
};

// Error state
export const Error = {
  args: {
    message: 'An error occurred. Please try again.',
    type: 'error',
    show: true
  }
};

// Hidden state
export const Hidden = {
  args: {
    message: 'This message is hidden',
    type: 'info',
    show: false
  }
};

// Long message
export const LongMessage = {
  args: {
    message: 'This is a very long validation message that demonstrates how the component handles text that spans multiple lines and provides detailed information to the user about what went wrong or what they need to do next.',
    type: 'warning',
    show: true
  }
};

// All states
export const AllStates = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '400px' }}>
      <ValidationMessage 
        message="This is an informational message"
        type="info"
      />
      <ValidationMessage 
        message="Operation completed successfully!"
        type="success"
      />
      <ValidationMessage 
        message="Please review your input before proceeding"
        type="warning"
      />
      <ValidationMessage 
        message="An error occurred. Please try again."
        type="error"
      />
    </div>
  )
};
