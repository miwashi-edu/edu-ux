import React from 'react';
import { Button } from './Button';
import { FaCheck, FaTimes, FaArrowRight } from 'react-icons/fa';

export default {
  title: 'Interactive Elements/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
    },
  },
};

export const Primary = (args) => <Button {...args}>Primary</Button>;
Primary.args = { variant: 'primary' };

export const Secondary = (args) => <Button {...args}>Secondary</Button>;
Secondary.args = { variant: 'secondary' };

export const Outline = (args) => <Button {...args}>Outline</Button>;
Outline.args = { variant: 'outline' };

export const Ghost = (args) => <Button {...args}>Ghost</Button>;
Ghost.args = { variant: 'ghost' };

export const Danger = (args) => <Button {...args}>Danger</Button>;
Danger.args = { variant: 'danger' };

export const Sizes = (args) => (
  <div style={{ display: 'flex', gap: 12 }}>
    <Button {...args} size="sm">Small</Button>
    <Button {...args} size="md">Medium</Button>
    <Button {...args} size="lg">Large</Button>
  </div>
);
Sizes.args = { variant: 'primary' };

export const WithIcon = (args) => (
  <Button {...args} icon={<FaCheck />} iconPosition="left">With Icon</Button>
);
WithIcon.args = { variant: 'primary' };

export const IconRight = (args) => (
  <Button {...args} icon={<FaArrowRight />} iconPosition="right">Next</Button>
);
IconRight.args = { variant: 'primary' };

export const IconOnly = (args) => (
  <Button {...args} icon={<FaTimes />} aria-label="Close" />
);
IconOnly.args = { variant: 'secondary' };

export const Loading = (args) => <Button {...args}>Loading</Button>;
Loading.args = { loading: true };

export const Disabled = (args) => <Button {...args}>Disabled</Button>;
Disabled.args = { disabled: true };

export const FullWidth = (args) => <Button {...args} fullWidth>Full Width</Button>;
FullWidth.args = { variant: 'primary' };
