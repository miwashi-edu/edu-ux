import React, { useState } from 'react';
import Chip from './Chip.jsx';

export default {
  title: 'Interactive Elements/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'The text content of the chip'
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'success', 'warning', 'error', 'outline'],
      description: 'The visual variant of the chip'
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'The size of the chip'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the chip is disabled'
    },
    removable: {
      control: 'boolean',
      description: 'Whether the chip has a remove button'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    }
  }
};

// Default story
export const Default = {
  args: {
    label: 'Default Chip',
    variant: 'default',
    size: 'medium',
    disabled: false,
    removable: false
  }
};

// Variants
export const Primary = {
  args: {
    label: 'Primary Chip',
    variant: 'primary',
    size: 'medium'
  }
};

export const Success = {
  args: {
    label: 'Success Chip',
    variant: 'success',
    size: 'medium'
  }
};

export const Warning = {
  args: {
    label: 'Warning Chip',
    variant: 'warning',
    size: 'medium'
  }
};

export const Error = {
  args: {
    label: 'Error Chip',
    variant: 'error',
    size: 'medium'
  }
};

export const Outline = {
  args: {
    label: 'Outline Chip',
    variant: 'outline',
    size: 'medium'
  }
};

// Sizes
export const Small = {
  args: {
    label: 'Small Chip',
    variant: 'primary',
    size: 'small'
  }
};

export const Large = {
  args: {
    label: 'Large Chip',
    variant: 'primary',
    size: 'large'
  }
};

// States
export const Disabled = {
  args: {
    label: 'Disabled Chip',
    variant: 'primary',
    size: 'medium',
    disabled: true
  }
};

export const Removable = {
  args: {
    label: 'Removable Chip',
    variant: 'primary',
    size: 'medium',
    removable: true
  }
};

// Interactive example
export const Interactive = () => {
  const [chips, setChips] = useState([
    { id: 1, label: 'React', variant: 'primary' },
    { id: 2, label: 'TypeScript', variant: 'success' },
    { id: 3, label: 'JavaScript', variant: 'warning' },
    { id: 4, label: 'CSS', variant: 'outline' }
  ]);

  const handleRemove = (id) => {
    setChips(chips.filter(chip => chip.id !== id));
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', maxWidth: '400px' }}>
      {chips.map(chip => (
        <Chip
          key={chip.id}
          label={chip.label}
          variant={chip.variant}
          removable={true}
          onRemove={() => handleRemove(chip.id)}
        />
      ))}
    </div>
  );
};

// All variants
export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', maxWidth: '500px' }}>
      <Chip label="Default" variant="default" />
      <Chip label="Primary" variant="primary" />
      <Chip label="Success" variant="success" />
      <Chip label="Warning" variant="warning" />
      <Chip label="Error" variant="error" />
      <Chip label="Outline" variant="outline" />
    </div>
  )
};

// All sizes
export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Chip label="Small" variant="primary" size="small" />
      <Chip label="Medium" variant="primary" size="medium" />
      <Chip label="Large" variant="primary" size="large" />
    </div>
  )
};
