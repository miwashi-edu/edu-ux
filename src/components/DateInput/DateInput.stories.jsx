import React, { useState } from 'react';
import { DateInput } from './DateInput';

export default {
  title: 'Interactive Elements/DateInput',
  component: DateInput,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    value: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    error: { control: 'text' },
    min: { control: 'text' },
    max: { control: 'text' },
  },
};

export const Basic = (args) => <DateInput {...args} />;
Basic.args = { label: 'Date', placeholder: 'Select date' };

export const Disabled = (args) => <DateInput {...args} disabled={true} label="Disabled" placeholder="Can't select" />;

export const Error = (args) => <DateInput {...args} error="Date is required" label="With Error" placeholder="Error" />;

export const WithRange = (args) => (
  <DateInput
    {...args}
    label="Date Range"
    min="2024-01-01"
    max="2024-12-31"
    placeholder="Select date in 2024"
  />
);

export const Controlled = () => {
  const [value, setValue] = useState('');
  return (
    <DateInput
      value={value}
      onChange={e => setValue(e.target.value)}
      label="Controlled"
      placeholder="Select date"
    />
  );
};
