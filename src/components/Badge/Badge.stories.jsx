import React from 'react';
import Badge from './index';

export default {
  title: 'Data Display/Badge',
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: 'Badge component for displaying notifications, counts, and status indicators with multiple variants, sizes, and accessibility.'
      }
    }
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['default', 'primary', 'success', 'warning', 'error', 'info'],
      description: 'Type of badge'
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'filled', 'outlined', 'soft', 'minimal'],
      description: 'Visual variant of the badge'
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'small', 'medium', 'large'],
      description: 'Size of the badge'
    },
    dot: {
      control: 'boolean',
      description: 'Show a dot indicator instead of content'
    },
    max: {
      control: { type: 'number', min: 1, max: 999 },
      description: 'Maximum value to display (for numeric badges)'
    },
    showZero: {
      control: 'boolean',
      description: 'Show badge even when value is zero'
    }
  }
};

const Template = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 5,
  type: 'default',
  variant: 'default',
  size: 'medium',
  dot: false,
  max: null,
  showZero: false
};

export const WithText = Template.bind({});
WithText.args = {
  children: 'New',
  type: 'primary',
  variant: 'filled',
  size: 'medium'
};

export const WithDot = Template.bind({});
WithDot.args = {
  dot: true,
  type: 'success',
  variant: 'filled',
  size: 'medium'
};

export const WithMax = Template.bind({});
WithMax.args = {
  children: 120,
  max: 99,
  type: 'error',
  variant: 'filled',
  size: 'medium'
};

export const ShowZero = Template.bind({});
ShowZero.args = {
  children: 0,
  showZero: true,
  type: 'info',
  variant: 'soft',
  size: 'medium'
};

export const AllTypes = () => (
  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
    <Badge type="default">7</Badge>
    <Badge type="primary">8</Badge>
    <Badge type="success">9</Badge>
    <Badge type="warning">2</Badge>
    <Badge type="error">1</Badge>
    <Badge type="info">4</Badge>
  </div>
);

export const AllVariants = () => (
  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
    <Badge variant="default">Default</Badge>
    <Badge variant="filled" type="primary">Filled</Badge>
    <Badge variant="outlined" type="success">Outlined</Badge>
    <Badge variant="soft" type="warning">Soft</Badge>
    <Badge variant="minimal" type="error">Minimal</Badge>
  </div>
);

export const AllSizes = () => (
  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
    <Badge size="xs" type="primary">XS</Badge>
    <Badge size="small" type="primary">Small</Badge>
    <Badge size="medium" type="primary">Medium</Badge>
    <Badge size="large" type="primary">Large</Badge>
  </div>
);

export const DotVariants = () => (
  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
    <Badge dot type="primary" />
    <Badge dot type="success" />
    <Badge dot type="warning" />
    <Badge dot type="error" />
    <Badge dot type="info" />
  </div>
);

export const WithIcon = () => (
  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
    <Badge type="success" variant="filled">
      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25em' }}>
        <svg width="1em" height="1em" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
        Success
      </span>
    </Badge>
    <Badge type="error" variant="filled">
      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25em' }}>
        <svg width="1em" height="1em" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
        Error
      </span>
    </Badge>
  </div>
);

export const Clickable = () => (
  <Badge type="primary" variant="filled" onClick={() => alert('Badge clicked!')}>Click Me</Badge>
);

export const NotificationExample = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
    <span style={{ fontSize: '1.25rem', fontWeight: 500 }}>Inbox</span>
    <Badge type="primary" variant="filled">3</Badge>
  </div>
);

export const StatusExample = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
    <span style={{ fontWeight: 500 }}>Server Status</span>
    <Badge dot type="success" />
    <span style={{ color: '#10b981' }}>Online</span>
    <Badge dot type="error" />
    <span style={{ color: '#ef4444' }}>Offline</span>
  </div>
);
