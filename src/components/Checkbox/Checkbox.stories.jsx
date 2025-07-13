import React, { useState } from 'react';
import { Checkbox } from './Checkbox';

export default {
  title: 'Interactive Elements/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    checked: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
};

export const Basic = (args) => <Checkbox {...args} />;
Basic.args = { label: 'Checkbox', checked: false };

export const Checked = (args) => <Checkbox {...args} checked={true} label="Checked" />;

export const Indeterminate = (args) => <Checkbox {...args} indeterminate={true} label="Indeterminate" />;

export const Disabled = (args) => <Checkbox {...args} disabled={true} label="Disabled" />;

export const Controlled = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      checked={checked}
      onChange={e => setChecked(e.target.checked)}
      label={checked ? 'Checked' : 'Unchecked'}
    />
  );
};
