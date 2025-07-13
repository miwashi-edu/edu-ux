import React, { useState } from 'react';
import { InputField } from './InputField';

export default {
  title: 'Interactive Elements/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: { control: 'text' },
    value: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    error: { control: 'text' },
  },
};

export const Basic = (args) => <InputField {...args} />;
Basic.args = { label: 'Label', placeholder: 'Enter text' };

export const Disabled = (args) => <InputField {...args} disabled={true} label="Disabled" placeholder="Can't type" />;

export const Error = (args) => <InputField {...args} error="This field is required" label="With Error" placeholder="Error" />;

export const Controlled = () => {
  const [value, setValue] = useState('');
  return (
    <InputField
      value={value}
      onChange={e => setValue(e.target.value)}
      label="Controlled"
      placeholder="Type here"
    />
  );
};
