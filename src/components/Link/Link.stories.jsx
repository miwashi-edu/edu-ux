import React from 'react';
import Link from './Link.jsx';

export default {
  title: 'Interactive Elements/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    href: {
      control: 'text',
      description: 'The URL the link points to'
    },
    children: {
      control: 'text',
      description: 'The link text content'
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'error'],
      description: 'The visual variant of the link'
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'The size of the link'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the link is disabled'
    },
    external: {
      control: 'boolean',
      description: 'Whether the link opens in a new tab'
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
    href: '#',
    children: 'Default Link',
    variant: 'default',
    size: 'medium',
    disabled: false,
    external: false
  }
};

// Variants
export const Primary = {
  args: {
    href: '#',
    children: 'Primary Link',
    variant: 'primary',
    size: 'medium'
  }
};

export const Secondary = {
  args: {
    href: '#',
    children: 'Secondary Link',
    variant: 'secondary',
    size: 'medium'
  }
};

export const Success = {
  args: {
    href: '#',
    children: 'Success Link',
    variant: 'success',
    size: 'medium'
  }
};

export const Warning = {
  args: {
    href: '#',
    children: 'Warning Link',
    variant: 'warning',
    size: 'medium'
  }
};

export const Error = {
  args: {
    href: '#',
    children: 'Error Link',
    variant: 'error',
    size: 'medium'
  }
};

// Sizes
export const Small = {
  args: {
    href: '#',
    children: 'Small Link',
    variant: 'primary',
    size: 'small'
  }
};

export const Large = {
  args: {
    href: '#',
    children: 'Large Link',
    variant: 'primary',
    size: 'large'
  }
};

// States
export const Disabled = {
  args: {
    href: '#',
    children: 'Disabled Link',
    variant: 'primary',
    size: 'medium',
    disabled: true
  }
};

export const External = {
  args: {
    href: 'https://example.com',
    children: 'External Link',
    variant: 'primary',
    size: 'medium',
    external: true
  }
};

// Interactive example
export const Interactive = () => {
  const [clickCount, setClickCount] = React.useState(0);
  
  const handleClick = (e) => {
    e.preventDefault();
    setClickCount(prev => prev + 1);
  };
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
      <p>Click the link to increment the counter: {clickCount}</p>
      <Link
        href="#"
        variant="primary"
        size="medium"
        onClick={handleClick}
      >
        Click me!
      </Link>
    </div>
  );
};

// All variants
export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <Link href="#" variant="default">Default Link</Link>
      <Link href="#" variant="primary">Primary Link</Link>
      <Link href="#" variant="secondary">Secondary Link</Link>
      <Link href="#" variant="success">Success Link</Link>
      <Link href="#" variant="warning">Warning Link</Link>
      <Link href="#" variant="error">Error Link</Link>
    </div>
  )
};

// Navigation example
export const Navigation = {
  render: () => (
    <nav style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Link href="#" variant="primary">Home</Link>
      <Link href="#" variant="secondary">About</Link>
      <Link href="#" variant="secondary">Services</Link>
      <Link href="#" variant="secondary">Contact</Link>
      <Link href="https://example.com" variant="primary" external>External Site</Link>
    </nav>
  )
};
