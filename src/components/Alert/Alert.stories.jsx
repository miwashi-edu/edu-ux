import React, { useState } from 'react';
import { Alert } from '.';

export default {
  title: 'Overlays and Feedback/Alert',
  component: Alert,
  parameters: {
    docs: {
      description: {
        component: 'A versatile alert component for displaying notifications, warnings, and feedback messages with multiple types and variants.',
      },
    },
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error'],
      description: 'Type of alert to display',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'bordered', 'flat', 'compact'],
      description: 'Visual variant of the alert',
    },
    dismissible: {
      control: { type: 'boolean' },
      description: 'Whether the alert can be dismissed',
    },
    autoDismiss: {
      control: { type: 'boolean' },
      description: 'Whether the alert should auto-dismiss',
    },
    dismissTimeout: {
      control: { type: 'number' },
      description: 'Timeout in milliseconds for auto-dismiss',
    },
    onDismiss: {
      action: 'dismissed',
      description: 'Callback fired when alert is dismissed',
    },
  },
};

// Basic usage template
const Template = (args) => (
  <Alert {...args}>
    This is a sample alert message. It provides important information to the user.
  </Alert>
);

export const Default = Template.bind({});
Default.args = {
  type: 'info',
  variant: 'default',
  dismissible: false,
  autoDismiss: false,
};

export const Info = Template.bind({});
Info.args = {
  type: 'info',
  variant: 'default',
  dismissible: false,
};

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  variant: 'default',
  dismissible: false,
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  variant: 'default',
  dismissible: false,
};

export const Error = Template.bind({});
Error.args = {
  type: 'error',
  variant: 'default',
  dismissible: false,
};

// Variant examples
export const Bordered = Template.bind({});
Bordered.args = {
  type: 'info',
  variant: 'bordered',
  dismissible: false,
};

export const Flat = Template.bind({});
Flat.args = {
  type: 'success',
  variant: 'flat',
  dismissible: false,
};

export const Compact = Template.bind({});
Compact.args = {
  type: 'warning',
  variant: 'compact',
  dismissible: false,
};

// Dismissible examples
export const Dismissible = Template.bind({});
Dismissible.args = {
  type: 'info',
  variant: 'default',
  dismissible: true,
};

export const AutoDismiss = Template.bind({});
AutoDismiss.args = {
  type: 'success',
  variant: 'default',
  dismissible: true,
  autoDismiss: true,
  dismissTimeout: 3000,
};

// Interactive example
export const Interactive = () => {
  const [alerts, setAlerts] = useState([
    { id: 1, type: 'info', message: 'This is an informational alert.', visible: true },
    { id: 2, type: 'success', message: 'Operation completed successfully!', visible: true },
    { id: 3, type: 'warning', message: 'Please review your input before proceeding.', visible: true },
    { id: 4, type: 'error', message: 'An error occurred while processing your request.', visible: true },
  ]);

  const handleDismiss = (id) => {
    setAlerts(prev => prev.map(alert => 
      alert.id === id ? { ...alert, visible: false } : alert
    ));
  };

  const addAlert = (type) => {
    const messages = {
      info: 'New informational message added.',
      success: 'New success message added.',
      warning: 'New warning message added.',
      error: 'New error message added.',
    };
    
    const newAlert = {
      id: Date.now(),
      type,
      message: messages[type],
      visible: true,
    };
    
    setAlerts(prev => [...prev, newAlert]);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h3>Interactive Alert Examples</h3>
      <p>Click the buttons below to add new alerts, or click the X to dismiss existing ones.</p>
      
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <button onClick={() => addAlert('info')} style={{ padding: '8px 16px', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Add Info
        </button>
        <button onClick={() => addAlert('success')} style={{ padding: '8px 16px', backgroundColor: '#22c55e', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Add Success
        </button>
        <button onClick={() => addAlert('warning')} style={{ padding: '8px 16px', backgroundColor: '#f59e0b', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Add Warning
        </button>
        <button onClick={() => addAlert('error')} style={{ padding: '8px 16px', backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Add Error
        </button>
      </div>

      {alerts
        .filter(alert => alert.visible)
        .map(alert => (
          <Alert
            key={alert.id}
            type={alert.type}
            variant="default"
            dismissible={true}
            onDismiss={() => handleDismiss(alert.id)}
          >
            {alert.message}
          </Alert>
        ))}
    </div>
  );
};

// Auto-dismiss example
export const AutoDismissExample = () => {
  const [alerts, setAlerts] = useState([]);

  const addAutoDismissAlert = (type) => {
    const messages = {
      info: 'This info alert will auto-dismiss in 5 seconds.',
      success: 'This success alert will auto-dismiss in 3 seconds.',
      warning: 'This warning alert will auto-dismiss in 8 seconds.',
      error: 'This error alert will auto-dismiss in 10 seconds.',
    };
    
    const timeouts = {
      info: 5000,
      success: 3000,
      warning: 8000,
      error: 10000,
    };
    
    const newAlert = {
      id: Date.now(),
      type,
      message: messages[type],
      timeout: timeouts[type],
    };
    
    setAlerts(prev => [...prev, newAlert]);
  };

  const handleDismiss = (id) => {
    setAlerts(prev => prev.filter(alert => alert.id !== id));
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h3>Auto-Dismiss Alert Examples</h3>
      <p>These alerts will automatically dismiss after their timeout period.</p>
      
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <button onClick={() => addAutoDismissAlert('info')} style={{ padding: '8px 16px', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Add Info (5s)
        </button>
        <button onClick={() => addAutoDismissAlert('success')} style={{ padding: '8px 16px', backgroundColor: '#22c55e', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Add Success (3s)
        </button>
        <button onClick={() => addAutoDismissAlert('warning')} style={{ padding: '8px 16px', backgroundColor: '#f59e0b', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Add Warning (8s)
        </button>
        <button onClick={() => addAutoDismissAlert('error')} style={{ padding: '8px 16px', backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Add Error (10s)
        </button>
      </div>

      {alerts.map(alert => (
        <Alert
          key={alert.id}
          type={alert.type}
          variant="default"
          dismissible={true}
          autoDismiss={true}
          dismissTimeout={alert.timeout}
          onDismiss={() => handleDismiss(alert.id)}
        >
          {alert.message}
        </Alert>
      ))}
    </div>
  );
};

// Variant showcase
export const VariantShowcase = () => (
  <div style={{ maxWidth: '600px', margin: '0 auto' }}>
    <h3>Alert Variants</h3>
    
    <h4>Default Variant</h4>
    <Alert type="info" variant="default">
      This is a default alert with standard styling.
    </Alert>
    
    <h4>Bordered Variant</h4>
    <Alert type="success" variant="bordered">
      This is a bordered alert with emphasized borders.
    </Alert>
    
    <h4>Flat Variant</h4>
    <Alert type="warning" variant="flat">
      This is a flat alert with no borders, just shadows.
    </Alert>
    
    <h4>Compact Variant</h4>
    <Alert type="error" variant="compact">
      This is a compact alert with reduced padding and font size.
    </Alert>
  </div>
);

// Type showcase
export const TypeShowcase = () => (
  <div style={{ maxWidth: '600px', margin: '0 auto' }}>
    <h3>Alert Types</h3>
    
    <Alert type="info">
      <strong>Information:</strong> This alert provides general information to the user.
    </Alert>
    
    <Alert type="success">
      <strong>Success:</strong> Your action was completed successfully!
    </Alert>
    
    <Alert type="warning">
      <strong>Warning:</strong> Please review your input before proceeding.
    </Alert>
    
    <Alert type="error">
      <strong>Error:</strong> An error occurred while processing your request.
    </Alert>
  </div>
);
