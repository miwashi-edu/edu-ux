import React from 'react';
import Sidebar from './Sidebar.jsx';
import Button from '../Button';

export default {
  title: 'Navigation/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'minimal', 'bordered', 'elevated'],
      description: 'Visual variant of the sidebar'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the sidebar'
    },
    position: {
      control: { type: 'select' },
      options: ['left', 'right'],
      description: 'Position of the sidebar'
    },
    collapsed: {
      control: 'boolean',
      description: 'Whether the sidebar is collapsed'
    },
    collapsible: {
      control: 'boolean',
      description: 'Whether the sidebar can be collapsed'
    },
    overlay: {
      control: 'boolean',
      description: 'Whether to show overlay on mobile'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    }
  }
};

const sampleItems = [
  { id: 'dashboard', label: 'Dashboard', href: '/dashboard', icon: '📊', active: true },
  { id: 'users', label: 'Users', href: '/users', icon: '👥' },
  { id: 'settings', label: 'Settings', href: '/settings', icon: '⚙️' },
  { id: 'analytics', label: 'Analytics', href: '/analytics', icon: '📈' },
  { id: 'reports', label: 'Reports', href: '/reports', icon: '📋' }
];

const sampleSections = [
  {
    id: 'main',
    title: 'Main Navigation',
    items: [
      { id: 'dashboard', label: 'Dashboard', href: '/dashboard', icon: '📊', active: true },
      { id: 'users', label: 'Users', href: '/users', icon: '👥' },
      { id: 'settings', label: 'Settings', href: '/settings', icon: '⚙️' }
    ]
  },
  {
    id: 'analytics',
    title: 'Analytics',
    items: [
      { id: 'analytics', label: 'Analytics', href: '/analytics', icon: '📈' },
      { id: 'reports', label: 'Reports', href: '/reports', icon: '📋' },
      { id: 'insights', label: 'Insights', href: '/insights', icon: '💡' }
    ]
  }
];

// Default story
export const Default = {
  args: {
    items: sampleItems,
    variant: 'default',
    size: 'md',
    position: 'left',
    collapsed: false,
    collapsible: true,
    overlay: true
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

// Positions
export const RightPosition = {
  args: {
    ...Default.args,
    position: 'right'
  }
};

// Collapsed
export const Collapsed = {
  args: {
    ...Default.args,
    collapsed: true
  }
};

// With sections
export const WithSections = {
  args: {
    sections: sampleSections,
    variant: 'default',
    size: 'md',
    position: 'left',
    collapsed: false,
    collapsible: true,
    overlay: true
  }
};

// With custom header
export const WithCustomHeader = {
  render: () => (
    <Sidebar
      items={sampleItems}
      variant="default"
      size="md"
      position="left"
      collapsed={false}
      collapsible={true}
      overlay={true}
    >
      <div style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}>
        <h3 style={{ margin: 0, color: '#1f2937' }}>MyApp</h3>
        <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.875rem', color: '#6b7280' }}>
          Navigation Menu
        </p>
      </div>
    </Sidebar>
  )
};

// All variants
export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', height: '100vh' }}>
      <Sidebar
        items={sampleItems.slice(0, 3)}
        variant="default"
        size="md"
        position="left"
        collapsed={false}
        collapsible={false}
        overlay={false}
      />
      
      <Sidebar
        items={sampleItems.slice(0, 3)}
        variant="minimal"
        size="md"
        position="left"
        collapsed={false}
        collapsible={false}
        overlay={false}
      />
      
      <Sidebar
        items={sampleItems.slice(0, 3)}
        variant="bordered"
        size="md"
        position="left"
        collapsed={false}
        collapsible={false}
        overlay={false}
      />
      
      <Sidebar
        items={sampleItems.slice(0, 3)}
        variant="elevated"
        size="md"
        position="left"
        collapsed={false}
        collapsible={false}
        overlay={false}
      />
    </div>
  )
};

// All sizes
export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', height: '100vh' }}>
      <Sidebar
        items={sampleItems.slice(0, 3)}
        variant="default"
        size="sm"
        position="left"
        collapsed={false}
        collapsible={false}
        overlay={false}
      />
      
      <Sidebar
        items={sampleItems.slice(0, 3)}
        variant="default"
        size="md"
        position="left"
        collapsed={false}
        collapsible={false}
        overlay={false}
      />
      
      <Sidebar
        items={sampleItems.slice(0, 3)}
        variant="default"
        size="lg"
        position="left"
        collapsed={false}
        collapsible={false}
        overlay={false}
      />
    </div>
  )
};

// Interactive example
export const Interactive = {
  render: () => {
    const [collapsed, setCollapsed] = React.useState(false);
    
    return (
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar
          items={sampleItems}
          variant="default"
          size="md"
          position="left"
          collapsed={collapsed}
          collapsible={true}
          overlay={true}
          onToggle={setCollapsed}
        />
        
        <div style={{ flex: 1, padding: '2rem' }}>
          <h2>Main Content Area</h2>
          <p>This is the main content area. The sidebar can be collapsed and expanded.</p>
          <Button onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? 'Expand' : 'Collapse'} Sidebar
          </Button>
        </div>
      </div>
    );
  }
};
