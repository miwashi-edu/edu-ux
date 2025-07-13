import React from 'react';
import IconButton from './IconButton.jsx';

// Sample icons
const HeartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.61C2.1283 5.6417 1.5487 7.04097 1.5487 8.5C1.5487 9.95903 2.1283 11.3583 3.16 12.39L12 21.23L20.84 12.39C21.351 11.8792 21.7564 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.22249 22.4518 8.5C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7564 5.72718 21.351 5.12075 20.84 4.61Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ShareIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 12V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 6L12 2L8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 2V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const EditIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.5 2.50023C18.8978 2.10297 19.4374 1.87891 20 1.87891C20.5626 1.87891 21.1022 2.10297 21.5 2.50023C21.8971 2.89792 22.1212 3.43767 22.1212 4.00023C22.1212 4.56279 21.8971 5.10254 21.5 5.50023L12 15.0002L8 16.0002L9 12.0002L18.5 2.50023Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DeleteIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 6H5H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default {
  title: 'Interactive Elements/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    icon: {
      control: false,
      description: 'The icon to display in the button'
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'error', 'ghost'],
      description: 'The visual variant of the button'
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'The size of the button'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled'
    },
    loading: {
      control: 'boolean',
      description: 'Whether the button is in loading state'
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
    icon: <HeartIcon />,
    variant: 'default',
    size: 'medium',
    disabled: false,
    loading: false
  }
};

// Variants
export const Primary = {
  args: {
    icon: <HeartIcon />,
    variant: 'primary',
    size: 'medium'
  }
};

export const Secondary = {
  args: {
    icon: <StarIcon />,
    variant: 'secondary',
    size: 'medium'
  }
};

export const Success = {
  args: {
    icon: <ShareIcon />,
    variant: 'success',
    size: 'medium'
  }
};

export const Warning = {
  args: {
    icon: <EditIcon />,
    variant: 'warning',
    size: 'medium'
  }
};

export const Error = {
  args: {
    icon: <DeleteIcon />,
    variant: 'error',
    size: 'medium'
  }
};

export const Ghost = {
  args: {
    icon: <HeartIcon />,
    variant: 'ghost',
    size: 'medium'
  }
};

// Sizes
export const Small = {
  args: {
    icon: <HeartIcon />,
    variant: 'primary',
    size: 'small'
  }
};

export const Large = {
  args: {
    icon: <HeartIcon />,
    variant: 'primary',
    size: 'large'
  }
};

// States
export const Disabled = {
  args: {
    icon: <HeartIcon />,
    variant: 'primary',
    size: 'medium',
    disabled: true
  }
};

export const Loading = {
  args: {
    icon: <HeartIcon />,
    variant: 'primary',
    size: 'medium',
    loading: true
  }
};

// Interactive example
export const Interactive = () => {
  const [liked, setLiked] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  
  const handleLike = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLiked(!liked);
    setLoading(false);
  };
  
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <span>Like this post:</span>
      <IconButton
        icon={<HeartIcon />}
        variant={liked ? 'error' : 'ghost'}
        size="medium"
        loading={loading}
        onClick={handleLike}
        aria-label={liked ? 'Unlike' : 'Like'}
      />
    </div>
  );
};

// All variants
export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <IconButton icon={<HeartIcon />} variant="default" />
      <IconButton icon={<StarIcon />} variant="primary" />
      <IconButton icon={<ShareIcon />} variant="secondary" />
      <IconButton icon={<EditIcon />} variant="success" />
      <IconButton icon={<DeleteIcon />} variant="warning" />
      <IconButton icon={<HeartIcon />} variant="error" />
      <IconButton icon={<StarIcon />} variant="ghost" />
    </div>
  )
};
