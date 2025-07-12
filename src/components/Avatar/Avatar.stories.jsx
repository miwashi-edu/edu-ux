import React from 'react';
import Avatar from './index';
import yoImage from './yo.jpeg';

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component: 'Avatar component for displaying user images, initials, icons, and status with multiple variants and accessibility.'
      }
    }
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'small', 'medium', 'large', 'xl'],
      description: 'Size of the avatar'
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'filled', 'outlined', 'minimal'],
      description: 'Visual variant of the avatar'
    },
    shape: {
      control: { type: 'select' },
      options: ['circle', 'square', 'rounded'],
      description: 'Shape of the avatar'
    },
    status: {
      control: { type: 'select' },
      options: [null, 'online', 'offline', 'away', 'busy'],
      description: 'Status indicator'
    }
  }
};

const Template = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: '',
  alt: 'Jane Doe',
  initials: 'JD',
  size: 'medium',
  variant: 'default',
  shape: 'circle',
  status: null
};

export const WithImage = Template.bind({});
WithImage.args = {
  src: yoImage,
  alt: 'Profile Photo',
  size: 'large',
  variant: 'default',
  shape: 'circle',
  status: 'online'
};

export const WithInitials = Template.bind({});
WithInitials.args = {
  src: '',
  alt: 'John Smith',
  initials: 'JS',
  size: 'large',
  variant: 'filled',
  shape: 'circle',
  status: 'away'
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" width={32} height={32}>
      <circle cx="12" cy="12" r="10" fill="#3b82f6" />
      <text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff">AI</text>
    </svg>
  ),
  size: 'large',
  variant: 'outlined',
  shape: 'square',
  status: 'busy'
};

export const Fallback = Template.bind({});
Fallback.args = {
  src: '',
  alt: '',
  initials: '',
  size: 'large',
  variant: 'default',
  shape: 'circle',
  status: null
};

export const AllSizes = () => (
  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
    <Avatar src={yoImage} alt="Profile" size="xs" />
    <Avatar src={yoImage} alt="Profile" size="small" />
    <Avatar src={yoImage} alt="Profile" size="medium" />
    <Avatar src={yoImage} alt="Profile" size="large" />
    <Avatar src={yoImage} alt="Profile" size="xl" />
  </div>
);

export const AllVariants = () => (
  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
    <Avatar src={yoImage} alt="Profile" variant="default" />
    <Avatar src={yoImage} alt="Profile" variant="filled" />
    <Avatar src={yoImage} alt="Profile" variant="outlined" />
    <Avatar src={yoImage} alt="Profile" variant="minimal" />
  </div>
);

export const AllShapes = () => (
  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
    <Avatar src={yoImage} alt="Profile" shape="circle" />
    <Avatar src={yoImage} alt="Profile" shape="square" />
    <Avatar src={yoImage} alt="Profile" shape="rounded" />
  </div>
);

export const WithStatus = () => (
  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
    <Avatar src={yoImage} alt="Profile" status="online" />
    <Avatar src={yoImage} alt="Profile" status="offline" />
    <Avatar src={yoImage} alt="Profile" status="away" />
    <Avatar src={yoImage} alt="Profile" status="busy" />
  </div>
);

export const Clickable = () => (
  <Avatar
    src={yoImage}
    alt="Clickable Profile"
    size="large"
    variant="filled"
    shape="circle"
    onClick={() => alert('Avatar clicked!')}
  />
);

export const CustomFallbackIcon = () => (
  <Avatar
    src=""
    alt=""
    fallbackIcon={
      <svg viewBox="0 0 24 24" fill="currentColor" width={32} height={32}>
        <rect x="4" y="4" width="16" height="16" rx="4" fill="#f59e0b" />
        <text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff">CF</text>
      </svg>
    }
    size="large"
    variant="outlined"
    shape="rounded"
  />
);

export const MixedContent = () => (
  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
    <Avatar src={yoImage} alt="Profile Photo" status="online" />
    <Avatar initials="JD" alt="John Doe" variant="filled" status="away" />
    <Avatar 
      icon={<span style={{ fontSize: '1.5rem' }}>🤖</span>}
      alt="Bot User"
      variant="outlined"
      status="busy"
    />
    <Avatar alt="Unknown User" variant="minimal" status="offline" />
  </div>
);

export const ProfileExample = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
    <Avatar
      src={yoImage}
      alt="User Profile"
      size="large"
      status="online"
    />
    <div>
      <h3 style={{ margin: '0 0 0.25rem 0' }}>User Profile</h3>
      <p style={{ margin: 0, color: '#6b7280' }}>Online • Last seen 2 minutes ago</p>
    </div>
  </div>
);

export const RoundEffectShowcase = () => (
  <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', padding: '2rem', backgroundColor: '#f9fafb', borderRadius: '12px' }}>
    <div style={{ textAlign: 'center' }}>
      <Avatar src={yoImage} alt="Round Avatar" size="xl" shape="circle" />
      <p style={{ marginTop: '0.5rem', fontWeight: '500' }}>Perfect Circle</p>
    </div>
    <div style={{ textAlign: 'center' }}>
      <Avatar src={yoImage} alt="Square Avatar" size="xl" shape="square" />
      <p style={{ marginTop: '0.5rem', fontWeight: '500' }}>Square with Rounded Corners</p>
    </div>
    <div style={{ textAlign: 'center' }}>
      <Avatar src={yoImage} alt="Rounded Avatar" size="xl" shape="rounded" />
      <p style={{ marginTop: '0.5rem', fontWeight: '500' }}>Rounded Rectangle</p>
    </div>
  </div>
);
