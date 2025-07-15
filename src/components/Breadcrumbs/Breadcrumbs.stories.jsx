import React from 'react';
import Breadcrumbs from './Breadcrumbs.jsx';

export default {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'minimal', 'bordered', 'elevated'],
      description: 'Visual variant of the breadcrumbs'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the breadcrumbs'
    },
    separator: {
      control: { type: 'select' },
      options: ['/', '>', '→', '•', '|'],
      description: 'Separator between breadcrumb items'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    }
  }
};

const sampleItems = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'products', label: 'Products', href: '/products' },
  { id: 'electronics', label: 'Electronics', href: '/products/electronics' },
  { id: 'smartphones', label: 'Smartphones', href: '/products/electronics/smartphones' }
];

const sampleItemsWithIcons = [
  { id: 'home', label: 'Home', href: '/', icon: '🏠' },
  { id: 'dashboard', label: 'Dashboard', href: '/dashboard', icon: '📊' },
  { id: 'users', label: 'Users', href: '/dashboard/users', icon: '👥' },
  { id: 'profile', label: 'Profile', href: '/dashboard/users/profile', icon: '👤' }
];

// Default story
export const Default = {
  args: {
    items: sampleItems,
    variant: 'default',
    size: 'md',
    separator: '/'
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

// Separators
export const ArrowSeparator = {
  args: {
    ...Default.args,
    separator: '→'
  }
};

export const BulletSeparator = {
  args: {
    ...Default.args,
    separator: '•'
  }
};

export const PipeSeparator = {
  args: {
    ...Default.args,
    separator: '|'
  }
};

export const GreaterThanSeparator = {
  args: {
    ...Default.args,
    separator: '>'
  }
};

// With icons
export const WithIcons = {
  args: {
    items: sampleItemsWithIcons,
    variant: 'default',
    size: 'md',
    separator: '/'
  }
};

// Long breadcrumbs
export const LongBreadcrumbs = {
  args: {
    items: [
      { id: 'home', label: 'Home', href: '/' },
      { id: 'products', label: 'Products', href: '/products' },
      { id: 'electronics', label: 'Electronics', href: '/products/electronics' },
      { id: 'computers', label: 'Computers', href: '/products/electronics/computers' },
      { id: 'laptops', label: 'Laptops', href: '/products/electronics/computers/laptops' },
      { id: 'gaming', label: 'Gaming Laptops', href: '/products/electronics/computers/laptops/gaming' },
      { id: 'current', label: 'Current Page', href: '/products/electronics/computers/laptops/gaming/current' }
    ],
    variant: 'default',
    size: 'md',
    separator: '/'
  }
};

// All variants
export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Breadcrumbs
        items={sampleItems.slice(0, 3)}
        variant="default"
        size="md"
        separator="/"
      />
      
      <Breadcrumbs
        items={sampleItems.slice(0, 3)}
        variant="minimal"
        size="md"
        separator="/"
      />
      
      <Breadcrumbs
        items={sampleItems.slice(0, 3)}
        variant="bordered"
        size="md"
        separator="/"
      />
      
      <Breadcrumbs
        items={sampleItems.slice(0, 3)}
        variant="elevated"
        size="md"
        separator="/"
      />
    </div>
  )
};

// All sizes
export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Breadcrumbs
        items={sampleItems.slice(0, 3)}
        variant="default"
        size="sm"
        separator="/"
      />
      
      <Breadcrumbs
        items={sampleItems.slice(0, 3)}
        variant="default"
        size="md"
        separator="/"
      />
      
      <Breadcrumbs
        items={sampleItems.slice(0, 3)}
        variant="default"
        size="lg"
        separator="/"
      />
    </div>
  )
};

// All separators
export const AllSeparators = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Breadcrumbs
        items={sampleItems.slice(0, 3)}
        variant="default"
        size="md"
        separator="/"
      />
      
      <Breadcrumbs
        items={sampleItems.slice(0, 3)}
        variant="default"
        size="md"
        separator=">"
      />
      
      <Breadcrumbs
        items={sampleItems.slice(0, 3)}
        variant="default"
        size="md"
        separator="→"
      />
      
      <Breadcrumbs
        items={sampleItems.slice(0, 3)}
        variant="default"
        size="md"
        separator="•"
      />
      
      <Breadcrumbs
        items={sampleItems.slice(0, 3)}
        variant="default"
        size="md"
        separator="|"
      />
    </div>
  )
};

// Interactive example
export const Interactive = {
  render: () => {
    const [activeItem, setActiveItem] = React.useState('');
    
    const handleItemClick = (item) => {
      setActiveItem(item.id);
      console.log('Clicked:', item.label);
    };
    
    return (
      <div>
        <Breadcrumbs
          items={sampleItems}
          variant="default"
          size="md"
          separator="/"
          onItemClick={handleItemClick}
        />
        
        {activeItem && (
          <div style={{ marginTop: '1rem', padding: '1rem', background: '#f3f4f6', borderRadius: '0.375rem' }}>
            <p>Last clicked: <strong>{activeItem}</strong></p>
          </div>
        )}
      </div>
    );
  }
};

// Truncated breadcrumbs
export const Truncated = {
  args: {
    items: [
      { id: 'home', label: 'Home', href: '/' },
      { id: 'products', label: 'Products', href: '/products' },
      { id: 'electronics', label: 'Electronics', href: '/products/electronics' },
      { id: 'computers', label: 'Computers', href: '/products/electronics/computers' },
      { id: 'laptops', label: 'Laptops', href: '/products/electronics/computers/laptops' },
      { id: 'gaming', label: 'Gaming Laptops', href: '/products/electronics/computers/laptops/gaming' },
      { id: 'current', label: 'Current Page', href: '/products/electronics/computers/laptops/gaming/current' }
    ],
    variant: 'default',
    size: 'md',
    separator: '/',
    truncate: true
  }
};
