import React from 'react';
import FAB from './FAB.jsx';

// Sample icons
const PlusIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const EditIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.5 2.50023C18.8978 2.10297 19.4374 1.87891 20 1.87891C20.5626 1.87891 21.1022 2.10297 21.5 2.50023C21.8971 2.89792 22.1212 3.43767 22.1212 4.00023C22.1212 4.56279 21.8971 5.10254 21.5 5.50023L12 15.0002L8 16.0002L9 12.0002L18.5 2.50023Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ShareIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 12V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 6L12 2L8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 2V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default {
  title: 'Interactive Elements/FAB',
  component: FAB,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    icon: {
      control: false,
      description: 'The icon to display in the FAB'
    },
    label: {
      control: 'text',
      description: 'Optional label that appears on hover'
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'error'],
      description: 'The visual variant of the FAB'
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'The size of the FAB'
    },
    position: {
      control: { type: 'select' },
      options: ['top-left', 'top-right', 'bottom-left', 'bottom-right', 'center'],
      description: 'The position of the FAB'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the FAB is disabled'
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
    icon: <PlusIcon />,
    label: 'Add new item',
    variant: 'primary',
    size: 'medium',
    position: 'bottom-right',
    disabled: false
  }
};

// Variants
export const Primary = {
  args: {
    icon: <PlusIcon />,
    label: 'Add new item',
    variant: 'primary',
    size: 'medium'
  }
};

export const Secondary = {
  args: {
    icon: <EditIcon />,
    label: 'Edit',
    variant: 'secondary',
    size: 'medium'
  }
};

export const Success = {
  args: {
    icon: <PlusIcon />,
    label: 'Create',
    variant: 'success',
    size: 'medium'
  }
};

export const Warning = {
  args: {
    icon: <ShareIcon />,
    label: 'Share',
    variant: 'warning',
    size: 'medium'
  }
};

export const Error = {
  args: {
    icon: <PlusIcon />,
    label: 'Delete',
    variant: 'error',
    size: 'medium'
  }
};

// Sizes
export const Small = {
  args: {
    icon: <PlusIcon />,
    label: 'Add',
    variant: 'primary',
    size: 'small'
  }
};

export const Large = {
  args: {
    icon: <PlusIcon />,
    label: 'Add new item',
    variant: 'primary',
    size: 'large'
  }
};

// Positions
export const TopLeft = {
  args: {
    icon: <PlusIcon />,
    label: 'Add',
    variant: 'primary',
    size: 'medium',
    position: 'top-left'
  }
};

export const TopRight = {
  args: {
    icon: <PlusIcon />,
    label: 'Add',
    variant: 'primary',
    size: 'medium',
    position: 'top-right'
  }
};

export const BottomLeft = {
  args: {
    icon: <PlusIcon />,
    label: 'Add',
    variant: 'primary',
    size: 'medium',
    position: 'bottom-left'
  }
};

export const Center = {
  args: {
    icon: <PlusIcon />,
    label: 'Add',
    variant: 'primary',
    size: 'medium',
    position: 'center'
  }
};

// States
export const Disabled = {
  args: {
    icon: <PlusIcon />,
    label: 'Add new item',
    variant: 'primary',
    size: 'medium',
    disabled: true
  }
};

// Interactive example
export const Interactive = () => {
  const [count, setCount] = React.useState(0);
  
  return (
    <div style={{ height: '400px', position: 'relative', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '20px' }}>
      <p>Click the FAB to increment the counter: {count}</p>
      <FAB
        icon={<PlusIcon />}
        label="Increment counter"
        variant="primary"
        size="medium"
        position="bottom-right"
        onClick={() => setCount(prev => prev + 1)}
      />
    </div>
  );
};

// All variants
export const AllVariants = {
  render: () => (
    <div style={{ height: '400px', position: 'relative', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '20px' }}>
      <FAB icon={<PlusIcon />} label="Primary" variant="primary" position="top-left" />
      <FAB icon={<EditIcon />} label="Secondary" variant="secondary" position="top-right" />
      <FAB icon={<PlusIcon />} label="Success" variant="success" position="bottom-left" />
      <FAB icon={<ShareIcon />} label="Warning" variant="warning" position="center" />
      <FAB icon={<PlusIcon />} label="Error" variant="error" position="bottom-right" />
    </div>
  )
};
