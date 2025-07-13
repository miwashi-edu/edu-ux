import React, { useState } from 'react';
import { Toggle } from './Toggle';

export default {
  title: 'Interactive Elements/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
};

export const Basic = (args) => <Toggle {...args} />;
Basic.args = { label: 'Toggle', checked: false };

export const Checked = (args) => <Toggle {...args} checked={true} label="Checked" />;

export const Disabled = (args) => <Toggle {...args} disabled={true} label="Disabled" />;

export const Sizes = (args) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
    <Toggle {...args} size="sm" label="Small" />
    <Toggle {...args} size="md" label="Medium" />
    <Toggle {...args} size="lg" label="Large" />
  </div>
);

export const Controlled = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Toggle
      checked={checked}
      onChange={e => setChecked(e.target.checked)}
      label={checked ? 'On' : 'Off'}
    />
  );
};
