import React from 'react';
import HamburgerMenu from './HamburgerMenu.jsx';
import Button from '../Button';

export default {
  title: 'Navigation/HamburgerMenu',
  component: HamburgerMenu,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'minimal', 'bordered', 'elevated'],
      description: 'Visual variant of the hamburger menu'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the hamburger menu'
    },
    animation: {
      control: { type: 'select' },
      options: ['slide', 'fade', 'scale'],
      description: 'Animation type for menu opening/closing'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    }
  }
};

const sampleItems = [
  { id: 'home', label: 'Home', href: '/', icon: '🏠' },
  { id: 'about', label: 'About', href: '/about', icon: 'ℹ️' },
  { id: 'services', label: 'Services', href: '/services', icon: '🛠️' },
  { id: 'contact', label: 'Contact', href: '/contact', icon: '📞' }
];

const sampleSections = [
  {
    id: 'main',
    title: 'Main Navigation',
    items: [
      { id: 'home', label: 'Home', href: '/', icon: '🏠' },
      { id: 'about', label: 'About', href: '/about', icon: 'ℹ️' }
    ]
  },
  {
    id: 'services',
    title: 'Services',
    items: [
      { id: 'services', label: 'Services', href: '/services', icon: '🛠️' },
      { id: 'contact', label: 'Contact', href: '/contact', icon: '📞' }
    ]
  }
];

// Default story
export const Default = {
  args: {
    items: sampleItems,
    variant: 'default',
    size: 'md',
    animation: 'slide'
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

// Animations
export const FadeAnimation = {
  args: {
    ...Default.args,
    animation: 'fade'
  }
};

export const ScaleAnimation = {
  args: {
    ...Default.args,
    animation: 'scale'
  }
};

// With sections
export const WithSections = {
  args: {
    sections: sampleSections,
    variant: 'default',
    size: 'md',
    animation: 'slide'
  }
};

// With custom trigger
export const WithCustomTrigger = {
  args: {
    trigger: (
      <button style={{
        padding: '0.5rem',
        background: 'none',
        border: '1px solid #e5e7eb',
        borderRadius: '0.375rem',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        gap: '2px'
      }}>
        <span style={{ width: '20px', height: '2px', background: '#374151' }}></span>
        <span style={{ width: '20px', height: '2px', background: '#374151' }}></span>
        <span style={{ width: '20px', height: '2px', background: '#374151' }}></span>
      </button>
    ),
    items: sampleItems,
    variant: 'default',
    size: 'md',
    animation: 'slide'
  }
};

// All variants
export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <HamburgerMenu
        items={sampleItems.slice(0, 2)}
        variant="default"
        size="md"
        animation="slide"
      />
      
      <HamburgerMenu
        items={sampleItems.slice(0, 2)}
        variant="minimal"
        size="md"
        animation="slide"
      />
      
      <HamburgerMenu
        items={sampleItems.slice(0, 2)}
        variant="bordered"
        size="md"
        animation="slide"
      />
      
      <HamburgerMenu
        items={sampleItems.slice(0, 2)}
        variant="elevated"
        size="md"
        animation="slide"
      />
    </div>
  )
};

// All sizes
export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <HamburgerMenu
        items={sampleItems.slice(0, 2)}
        variant="default"
        size="sm"
        animation="slide"
      />
      
      <HamburgerMenu
        items={sampleItems.slice(0, 2)}
        variant="default"
        size="md"
        animation="slide"
      />
      
      <HamburgerMenu
        items={sampleItems.slice(0, 2)}
        variant="default"
        size="lg"
        animation="slide"
      />
    </div>
  )
};

// All animations
export const AllAnimations = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <HamburgerMenu
        items={sampleItems.slice(0, 2)}
        variant="default"
        size="md"
        animation="slide"
      />
      
      <HamburgerMenu
        items={sampleItems.slice(0, 2)}
        variant="default"
        size="md"
        animation="fade"
      />
      
      <HamburgerMenu
        items={sampleItems.slice(0, 2)}
        variant="default"
        size="md"
        animation="scale"
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
        <HamburgerMenu
          items={sampleItems}
          variant="default"
          size="md"
          animation="slide"
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

// With header and footer
export const WithHeaderAndFooter = {
  render: () => (
    <HamburgerMenu
      items={sampleItems}
      variant="default"
      size="md"
      animation="slide"
      header={
        <div style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}>
          <h3 style={{ margin: 0, color: '#1f2937' }}>MyApp</h3>
          <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.875rem', color: '#6b7280' }}>
            Navigation Menu
          </p>
        </div>
      }
      footer={
        <div style={{ padding: '1rem', borderTop: '1px solid #e5e7eb' }}>
          <Button variant="primary" size="sm" style={{ width: '100%' }}>
            Sign Out
          </Button>
        </div>
      }
    />
  )
};
