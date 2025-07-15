import React from 'react';
import Navbar from './Navbar.jsx';

export default {
  title: 'Navigation/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'minimal', 'bordered', 'elevated'],
      description: 'Visual variant of the navbar'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the navbar'
    },
    fixed: {
      control: 'boolean',
      description: 'Whether the navbar is fixed to the top'
    },
    transparent: {
      control: 'boolean',
      description: 'Whether the navbar is transparent'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    }
  }
};

const sampleItems = [
  { id: 'home', label: 'Home', href: '/', active: true },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'services', label: 'Services', href: '/services' },
  { id: 'contact', label: 'Contact', href: '/contact' }
];

const sampleItemsWithIcons = [
  { id: 'home', label: 'Home', href: '/', icon: '🏠', active: true },
  { id: 'about', label: 'About', href: '/about', icon: 'ℹ️' },
  { id: 'services', label: 'Services', href: '/services', icon: '⚙️' },
  { id: 'contact', label: 'Contact', href: '/contact', icon: '📧' }
];

// Default story
export const Default = {
  args: {
    brand: {
      text: 'MyApp',
      icon: '🚀',
      href: '/'
    },
    items: sampleItems,
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

// With icons
export const WithIcons = {
  args: {
    ...Default.args,
    items: sampleItemsWithIcons
  }
};

// Fixed navbar
export const Fixed = {
  args: {
    ...Default.args,
    fixed: true
  },
  parameters: {
    docs: {
      description: {
        story: 'A fixed navbar that stays at the top when scrolling. Add some content below to see the effect.'
      }
    }
  }
};

// Transparent navbar
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

// With disabled items
export const WithDisabledItems = {
  args: {
    ...Default.args,
    items: [
      { id: 'home', label: 'Home', href: '/', active: true },
      { id: 'about', label: 'About', href: '/about' },
      { id: 'services', label: 'Services', href: '/services', disabled: true },
      { id: 'contact', label: 'Contact', href: '/contact' }
    ]
  }
};

// All variants
export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Navbar
        brand={{ text: 'Default', icon: '🚀' }}
        items={sampleItems}
        variant="default"
      />
      
      <Navbar
        brand={{ text: 'Minimal', icon: '🚀' }}
        items={sampleItems}
        variant="minimal"
      />
      
      <Navbar
        brand={{ text: 'Bordered', icon: '🚀' }}
        items={sampleItems}
        variant="bordered"
      />
      
      <Navbar
        brand={{ text: 'Elevated', icon: '🚀' }}
        items={sampleItems}
        variant="elevated"
      />
    </div>
  )
};

// All sizes
export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Navbar
        brand={{ text: 'Small', icon: '🚀' }}
        items={sampleItems}
        size="sm"
      />
      
      <Navbar
        brand={{ text: 'Medium', icon: '🚀' }}
        items={sampleItems}
        size="md"
      />
      
      <Navbar
        brand={{ text: 'Large', icon: '🚀' }}
        items={sampleItems}
        size="lg"
      />
    </div>
  )
};

// Interactive example
export const Interactive = {
  render: () => {
    const [activeItem, setActiveItem] = React.useState('home');
    
    const items = [
      { id: 'home', label: 'Home', href: '#', active: activeItem === 'home' },
      { id: 'about', label: 'About', href: '#', active: activeItem === 'about' },
      { id: 'services', label: 'Services', href: '#', active: activeItem === 'services' },
      { id: 'contact', label: 'Contact', href: '#', active: activeItem === 'contact' }
    ];
    
    const handleItemClick = (item) => {
      setActiveItem(item.id);
    };
    
    return (
      <div>
        <Navbar
          brand={{ text: 'Interactive', icon: '🚀' }}
          items={items}
          onItemClick={handleItemClick}
        />
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h2>Active Item: {activeItem}</h2>
          <p>Click on navigation items to see the active state change.</p>
        </div>
      </div>
    );
  }
};

// With custom content
export const WithCustomContent = {
  render: () => (
    <Navbar
      brand={{ text: 'Custom', icon: '🎨' }}
      items={sampleItems}
    >
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '1rem',
        marginLeft: 'auto'
      }}>
        <button style={{
          padding: '0.5rem 1rem',
          border: '1px solid #e5e7eb',
          borderRadius: '0.375rem',
          background: 'white',
          cursor: 'pointer'
        }}>
          Login
        </button>
        <button style={{
          padding: '0.5rem 1rem',
          background: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '0.375rem',
          cursor: 'pointer'
        }}>
          Sign Up
        </button>
      </div>
    </Navbar>
  )
};
