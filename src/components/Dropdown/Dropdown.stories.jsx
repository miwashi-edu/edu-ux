import React, { useState } from 'react';
import { Dropdown } from './Dropdown';

const sampleOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
];

export default {
  title: 'Interactive Elements/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    error: { control: 'text' },
  },
};

export const Basic = (args) => <Dropdown {...args} options={sampleOptions} />;
Basic.args = { label: 'Select Option', placeholder: 'Choose an option...' };

export const Disabled = (args) => <Dropdown {...args} options={sampleOptions} disabled={true} label="Disabled" placeholder="Can't select" />;

export const Error = (args) => <Dropdown {...args} options={sampleOptions} error="Selection is required" label="With Error" placeholder="Error" />;

export const WithValue = (args) => <Dropdown {...args} options={sampleOptions} value="option2" label="With Value" />;

export const Controlled = () => {
  const [value, setValue] = useState('');
  return (
    <Dropdown
      options={sampleOptions}
      value={value}
      onChange={setValue}
      label="Controlled"
      placeholder="Select an option"
    />
  );
};
