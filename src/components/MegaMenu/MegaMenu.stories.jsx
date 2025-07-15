import React from 'react';
import MegaMenu from './MegaMenu.jsx';
import Button from '../Button';

export default {
  title: 'Navigation/MegaMenu',
  component: MegaMenu,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'minimal', 'bordered', 'elevated'],
      description: 'Visual variant of the mega menu'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the mega menu'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    }
  }
};

const sampleItems = [
  { id: 'dashboard', label: 'Dashboard', href: '/dashboard', icon: '📊', description: 'View your main dashboard' },
  { id: 'analytics', label: 'Analytics', href: '/analytics', icon: '📈', description: 'Detailed analytics and reports' },
  { id: 'users', label: 'User Management', href: '/users', icon: '👥', description: 'Manage users and permissions' },
  { id: 'settings', label: 'Settings', href: '/settings', icon: '⚙️', description: 'Configure your application' }
];

const sampleSections = [
  {
    id: 'main',
    title: 'Main Features',
    items: [
      { id: 'dashboard', label: 'Dashboard', href: '/dashboard', icon: '📊', description: 'View your main dashboard' },
      { id: 'analytics', label: 'Analytics', href: '/analytics', icon: '📈', description: 'Detailed analytics and reports' }
    ]
  },
  {
    id: 'admin',
    title: 'Administration',
    items: [
      { id: 'users', label: 'User Management', href: '/users', icon: '👥', description: 'Manage users and permissions' },
      { id: 'settings', label: 'Settings', href: '/settings', icon: '⚙️', description: 'Configure your application' }
    ]
  }
];

// Default story
export const Default = {
  args: {
    trigger: <Button variant="secondary">Products</Button>,
    items: sampleItems,
    variant: 'default',
    size: 'md'
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

// With sections
export const WithSections = {
  args: {
    trigger: <Button variant="secondary">Products</Button>,
    sections: sampleSections,
    variant: 'default',
    size: 'md'
  }
};

// With custom trigger
export const WithCustomTrigger = {
  args: {
    trigger: (
      <button style={{
        padding: '0.75rem 1rem',
        background: 'none',
        border: '1px solid #e5e7eb',
        borderRadius: '0.375rem',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
        <span>🎯</span>
        <span>Solutions</span>
        <span>▼</span>
      </button>
    ),
    items: sampleItems,
    variant: 'default',
    size: 'md'
  }
};

// All variants
export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <MegaMenu
        trigger={<Button variant="secondary">Default</Button>}
        items={sampleItems.slice(0, 2)}
        variant="default"
        size="md"
      />
      
      <MegaMenu
        trigger={<Button variant="secondary">Minimal</Button>}
        items={sampleItems.slice(0, 2)}
        variant="minimal"
        size="md"
      />
      
      <MegaMenu
        trigger={<Button variant="secondary">Bordered</Button>}
        items={sampleItems.slice(0, 2)}
        variant="bordered"
        size="md"
      />
      
      <MegaMenu
        trigger={<Button variant="secondary">Elevated</Button>}
        items={sampleItems.slice(0, 2)}
        variant="elevated"
        size="md"
      />
    </div>
  )
};

// All sizes
export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <MegaMenu
        trigger={<Button variant="secondary" size="sm">Small</Button>}
        items={sampleItems.slice(0, 2)}
        variant="default"
        size="sm"
      />
      
      <MegaMenu
        trigger={<Button variant="secondary" size="md">Medium</Button>}
        items={sampleItems.slice(0, 2)}
        variant="default"
        size="md"
      />
      
      <MegaMenu
        trigger={<Button variant="secondary" size="lg">Large</Button>}
        items={sampleItems.slice(0, 2)}
        variant="default"
        size="lg"
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
      <div style={{ textAlign: 'center' }}>
        <MegaMenu
          trigger={<Button variant="primary">Interactive Menu</Button>}
          items={sampleItems}
          variant="default"
          size="md"
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

// Rich content example
export const RichContent = {
  render: () => (
    <MegaMenu
      trigger={<Button variant="secondary">Rich Content</Button>}
      variant="default"
      size="lg"
    >
      <div style={{ padding: '1rem', borderTop: '1px solid #e5e7eb' }}>
        <h4 style={{ margin: '0 0 0.5rem 0' }}>Featured Content</h4>
        <p style={{ margin: 0, fontSize: '0.875rem', color: '#6b7280' }}>
          This is an example of rich content in a mega menu. You can include any React components here.
        </p>
        <div style={{ marginTop: '1rem' }}>
          <Button variant="primary" size="sm">Learn More</Button>
        </div>
      </div>
    </MegaMenu>
  )
};
