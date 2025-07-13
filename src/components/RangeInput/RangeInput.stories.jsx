import React, { useState } from 'react';
import { RangeInput } from './RangeInput';

export default {
  title: 'Interactive Elements/RangeInput',
  component: RangeInput,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    value: { control: 'number' },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    error: { control: 'text' },
    showValue: { control: 'boolean' },
  },
};

export const Basic = (args) => <RangeInput {...args} />;
Basic.args = { label: 'Volume', value: 50 };

export const Disabled = (args) => <RangeInput {...args} disabled={true} label="Disabled" value={30} />;

export const Error = (args) => <RangeInput {...args} error="Value is too low" label="With Error" value={10} />;

export const CustomRange = (args) => <RangeInput {...args} min={0} max={200} step={10} label="Custom Range" value={100} />;

export const NoValue = (args) => <RangeInput {...args} showValue={false} label="Hidden Value" value={75} />;

export const Controlled = () => {
  const [value, setValue] = useState(50);
  return (
    <RangeInput
      value={value}
      onChange={e => setValue(Number(e.target.value))}
      label="Controlled"
      min={0}
      max={100}
    />
  );
};
