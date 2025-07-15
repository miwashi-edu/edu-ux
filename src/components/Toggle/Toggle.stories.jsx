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

const Template = (args) => {
  const [checked, setChecked] = useState(args.checked || false);
  return (
    <Toggle 
      {...args} 
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
};

export const Basic = Template.bind({});
Basic.args = { label: 'Toggle', checked: false };

export const Checked = Template.bind({});
Checked.args = { checked: true, label: 'Checked' };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true, label: 'Disabled' };

export const Sizes = () => {
  const [smallChecked, setSmallChecked] = useState(false);
  const [mediumChecked, setMediumChecked] = useState(false);
  const [largeChecked, setLargeChecked] = useState(false);
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Toggle 
        size="sm" 
        label="Small" 
        checked={smallChecked}
        onChange={(e) => setSmallChecked(e.target.checked)}
      />
      <Toggle 
        size="md" 
        label="Medium" 
        checked={mediumChecked}
        onChange={(e) => setMediumChecked(e.target.checked)}
      />
      <Toggle 
        size="lg" 
        label="Large" 
        checked={largeChecked}
        onChange={(e) => setLargeChecked(e.target.checked)}
      />
    </div>
  );
};

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
