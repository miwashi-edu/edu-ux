import React from 'react';
import Header from './Header.jsx';
import Button from '../Button';

export default {
  title: 'Page Layout/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'minimal', 'bordered', 'elevated'],
      description: 'Visual variant of the header'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the header'
    },
    fixed: {
      control: 'boolean',
      description: 'Whether the header is fixed to the top'
    },
    transparent: {
      control: 'boolean',
      description: 'Whether the header is transparent'
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
    brand: {
      text: 'MyApp',
      icon: '🚀',
      href: '/'
    },
    content: <h1>Welcome to MyApp</h1>,
    actions: (
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <Button variant="secondary" size="sm">Login</Button>
        <Button variant="primary" size="sm">Sign Up</Button>
      </div>
    ),
    variant: 'default',
    size: 'md',
    fixed: false,
    transparent: false
  }
};

// Variants
export const Minimal = {
  args: {
    ...Default.args,
    variant: 'minimal'
  }
};

export const Bordered = {
  args: {
    ...Default.args,
    variant: 'bordered'
  }
};

export const Elevated = {
  args: {
    ...Default.args,
    variant: 'elevated'
  }
};

// Sizes
export const Small = {
  args: {
    ...Default.args,
    size: 'sm'
  }
};

export const Large = {
  args: {
    ...Default.args,
    size: 'lg'
  }
};

// Fixed header
export const Fixed = {
  args: {
    ...Default.args,
    fixed: true
  },
  parameters: {
    docs: {
      description: {
        story: 'A fixed header that stays at the top when scrolling. Add some content below to see the effect.'
      }
    }
  }
};

// Transparent header
export const Transparent = {
  args: {
    ...Default.args,
    transparent: true
  },
  parameters: {
    backgrounds: {
      default: 'gradient',
      values: [
        {
          name: 'gradient',
          value: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        }
      ]
    }
  }
};

// With navigation
export const WithNavigation = {
  args: {
    brand: {
      text: 'MyApp',
      icon: '🚀',
      href: '/'
    },
    content: (
      <nav style={{ display: 'flex', gap: '2rem' }}>
        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Home</a>
        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>About</a>
        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Services</a>
        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</a>
      </nav>
    ),
    actions: (
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <Button variant="secondary" size="sm">Login</Button>
        <Button variant="primary" size="sm">Sign Up</Button>
      </div>
    )
  }
};

// All variants
export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Header
        brand={{ text: 'Default', icon: '🚀' }}
        content={<h2>Default Header</h2>}
        variant="default"
      />
      
      <Header
        brand={{ text: 'Minimal', icon: '🚀' }}
        content={<h2>Minimal Header</h2>}
        variant="minimal"
      />
      
      <Header
        brand={{ text: 'Bordered', icon: '🚀' }}
        content={<h2>Bordered Header</h2>}
        variant="bordered"
      />
      
      <Header
        brand={{ text: 'Elevated', icon: '🚀' }}
        content={<h2>Elevated Header</h2>}
        variant="elevated"
      />
    </div>
  )
};

// All sizes
export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Header
        brand={{ text: 'Small', icon: '🚀' }}
        content={<h3>Small Header</h3>}
        size="sm"
      />
      
      <Header
        brand={{ text: 'Medium', icon: '🚀' }}
        content={<h2>Medium Header</h2>}
        size="md"
      />
      
      <Header
        brand={{ text: 'Large', icon: '🚀' }}
        content={<h1>Large Header</h1>}
        size="lg"
      />
    </div>
  )
};

// With custom content
export const WithCustomContent = {
  render: () => (
    <Header
      brand={{ text: 'Custom', icon: '🎨' }}
      content={
        <div style={{ textAlign: 'center', flex: 1 }}>
          <h1>Welcome to Our Platform</h1>
          <p>Discover amazing features and possibilities</p>
        </div>
      }
      actions={
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Button variant="outline" size="sm">Learn More</Button>
          <Button variant="primary" size="sm">Get Started</Button>
        </div>
      }
    />
  )
};
