import React, { useState } from 'react';
import { RadioButton } from './RadioButton';

export default {
  title: 'Interactive Elements/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    name: { control: 'text' },
    value: { control: 'text' },
  },
};

export const Basic = (args) => <RadioButton {...args} />;
Basic.args = { label: 'Radio', checked: false };

export const Checked = (args) => <RadioButton {...args} checked={true} label="Checked" />;

export const Disabled = (args) => <RadioButton {...args} disabled={true} label="Disabled" />;

export const Group = () => {
  const [value, setValue] = useState('a');
  return (
    <div style={{ display: 'flex', gap: 16 }}>
      <RadioButton name="group" value="a" checked={value === 'a'} onChange={() => setValue('a')} label="Option A" />
      <RadioButton name="group" value="b" checked={value === 'b'} onChange={() => setValue('b')} label="Option B" />
      <RadioButton name="group" value="c" checked={value === 'c'} onChange={() => setValue('c')} label="Option C" />
    </div>
  );
};
