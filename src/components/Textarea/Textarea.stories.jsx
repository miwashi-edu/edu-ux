import React, { useState } from 'react';
import { Textarea } from './Textarea';

export default {
  title: 'Interactive Elements/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    value: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    error: { control: 'text' },
    rows: { control: 'number' },
  },
};

export const Basic = (args) => <Textarea {...args} />;
Basic.args = { label: 'Description', placeholder: 'Enter description' };

export const Disabled = (args) => <Textarea {...args} disabled={true} label="Disabled" placeholder="Can't type" />;

export const Error = (args) => <Textarea {...args} error="This field is required" label="With Error" placeholder="Error" />;

export const Controlled = () => {
  const [value, setValue] = useState('');
  return (
    <Textarea
      value={value}
      onChange={e => setValue(e.target.value)}
      label="Controlled"
      placeholder="Type here"
    />
  );
};
