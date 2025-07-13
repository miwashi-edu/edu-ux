import React, { useRef, useState } from 'react';
import { FileInput } from './FileInput';

export default {
  title: 'Interactive Elements/FileInput',
  component: FileInput,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    error: { control: 'text' },
    accept: { control: 'text' },
    multiple: { control: 'boolean' },
  },
};

export const Basic = (args) => <FileInput {...args} />;
Basic.args = { label: 'Upload', placeholder: 'Choose file...' };

export const Disabled = (args) => <FileInput {...args} disabled={true} label="Disabled" placeholder="Can't upload" />;

export const Error = (args) => <FileInput {...args} error="File is required" label="With Error" placeholder="Error" />;

export const AcceptImages = (args) => <FileInput {...args} accept="image/*" label="Images Only" placeholder="Choose image(s)" />;

export const Multiple = (args) => <FileInput {...args} multiple={true} label="Multiple Files" placeholder="Choose files..." />;

export const Controlled = () => {
  const [files, setFiles] = useState([]);
  const ref = useRef();
  return (
    <FileInput
      value={files}
      onChange={e => setFiles(e.target.files)}
      label="Controlled"
      placeholder="Choose file(s)"
      ref={ref}
    />
  );
};
