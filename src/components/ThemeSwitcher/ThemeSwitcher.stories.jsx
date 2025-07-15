import React from 'react';
import ThemeSwitcher, { ThemeProvider } from './ThemeSwitcher.jsx';

// Wrapper component to provide theme context
const ThemeWrapper = ({ children }) => (
  <ThemeProvider>
    {children}
  </ThemeProvider>
);

export default {
  title: 'Interactive Elements/ThemeSwitcher',
  component: ThemeSwitcher,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <ThemeWrapper>
        <Story />
      </ThemeWrapper>
    ),
  ],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'icon', 'text', 'toggle', 'dropdown'],
      description: 'Visual variant of the theme switcher'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the theme switcher'
    },
    showLabel: {
      control: 'boolean',
      description: 'Whether to show the theme label'
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
    variant: 'default',
    size: 'md',
    showLabel: true
  }
};

// Variants
export const IconOnly = {
  args: {
    variant: 'icon',
    size: 'md',
    showLabel: false
  }
};

export const TextOnly = {
  args: {
    variant: 'text',
    size: 'md',
    showLabel: true
  }
};

export const Toggle = {
  args: {
    variant: 'toggle',
    size: 'md',
    showLabel: false
  }
};

export const Dropdown = {
  args: {
    variant: 'dropdown',
    size: 'md',
    showLabel: true
  }
};

// Sizes
export const Small = {
  args: {
    variant: 'default',
    size: 'sm',
    showLabel: true
  }
};

export const Large = {
  args: {
    variant: 'default',
    size: 'lg',
    showLabel: true
  }
};

// Size variants
export const SmallIcon = {
  args: {
    variant: 'icon',
    size: 'sm',
    showLabel: false
  }
};

export const LargeIcon = {
  args: {
    variant: 'icon',
    size: 'lg',
    showLabel: false
  }
};

export const SmallToggle = {
  args: {
    variant: 'toggle',
    size: 'sm',
    showLabel: false
  }
};

export const LargeToggle = {
  args: {
    variant: 'toggle',
    size: 'lg',
    showLabel: false
  }
};

// All variants
export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <span style={{ minWidth: '80px', fontSize: '0.875rem' }}>Default:</span>
        <ThemeSwitcher variant="default" />
      </div>
      
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <span style={{ minWidth: '80px', fontSize: '0.875rem' }}>Icon:</span>
        <ThemeSwitcher variant="icon" />
      </div>
      
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <span style={{ minWidth: '80px', fontSize: '0.875rem' }}>Text:</span>
        <ThemeSwitcher variant="text" />
      </div>
      
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <span style={{ minWidth: '80px', fontSize: '0.875rem' }}>Toggle:</span>
        <ThemeSwitcher variant="toggle" />
      </div>
      
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <span style={{ minWidth: '80px', fontSize: '0.875rem' }}>Dropdown:</span>
        <ThemeSwitcher variant="dropdown" />
      </div>
    </div>
  )
};

// All sizes
export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <span style={{ minWidth: '80px', fontSize: '0.875rem' }}>Small:</span>
        <ThemeSwitcher variant="default" size="sm" />
      </div>
      
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <span style={{ minWidth: '80px', fontSize: '0.875rem' }}>Medium:</span>
        <ThemeSwitcher variant="default" size="md" />
      </div>
      
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <span style={{ minWidth: '80px', fontSize: '0.875rem' }}>Large:</span>
        <ThemeSwitcher variant="default" size="lg" />
      </div>
    </div>
  )
};

// In context example
export const InContext = {
  render: () => (
    <div style={{ 
      padding: '2rem', 
      border: '1px solid #e5e7eb', 
      borderRadius: '0.5rem',
      background: 'var(--theme-bg, #ffffff)',
      color: 'var(--theme-text, #374151)',
      minWidth: '400px'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h3 style={{ margin: 0 }}>Theme Switcher Demo</h3>
        <ThemeSwitcher variant="dropdown" />
      </div>
      
      <p style={{ marginBottom: '1rem' }}>
        This example shows how the theme switcher looks in a real application context. 
        The background and text colors will change based on the selected theme.
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
        <div style={{ 
          padding: '1rem', 
          border: '1px solid var(--theme-border, #e5e7eb)', 
          borderRadius: '0.25rem',
          background: 'var(--theme-hover, #f9fafb)'
        }}>
          <h4 style={{ margin: '0 0 0.5rem 0' }}>Card 1</h4>
          <p style={{ margin: 0, fontSize: '0.875rem' }}>This card adapts to the theme.</p>
        </div>
        
        <div style={{ 
          padding: '1rem', 
          border: '1px solid var(--theme-border, #e5e7eb)', 
          borderRadius: '0.25rem',
          background: 'var(--theme-hover, #f9fafb)'
        }}>
          <h4 style={{ margin: '0 0 0.5rem 0' }}>Card 2</h4>
          <p style={{ margin: 0, fontSize: '0.875rem' }}>All elements respond to theme changes.</p>
        </div>
      </div>
      
      <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
        <button style={{ 
          padding: '0.5rem 1rem', 
          background: 'var(--theme-primary, #3b82f6)', 
          color: 'white', 
          border: 'none', 
          borderRadius: '0.25rem', 
          cursor: 'pointer' 
        }}>
          Primary Button
        </button>
        <button style={{ 
          padding: '0.5rem 1rem', 
          background: 'transparent', 
          color: 'var(--theme-text, #374151)', 
          border: '1px solid var(--theme-border, #e5e7eb)', 
          borderRadius: '0.25rem', 
          cursor: 'pointer' 
        }}>
          Secondary Button
        </button>
      </div>
    </div>
  )
};

// Multiple switchers
export const MultipleSwitchers = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
      <div style={{ 
        padding: '1rem', 
        border: '1px solid #e5e7eb', 
        borderRadius: '0.5rem',
        background: '#f9fafb',
        display: 'flex',
        gap: '1rem',
        alignItems: 'center'
      }}>
        <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>Header:</span>
        <ThemeSwitcher variant="icon" size="sm" />
        <ThemeSwitcher variant="text" size="sm" />
      </div>
      
      <div style={{ 
        padding: '1rem', 
        border: '1px solid #e5e7eb', 
        borderRadius: '0.5rem',
        background: '#f9fafb',
        display: 'flex',
        gap: '1rem',
        alignItems: 'center'
      }}>
        <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>Sidebar:</span>
        <ThemeSwitcher variant="toggle" />
        <ThemeSwitcher variant="dropdown" size="sm" />
      </div>
      
      <div style={{ 
        padding: '1rem', 
        border: '1px solid #e5e7eb', 
        borderRadius: '0.5rem',
        background: '#f9fafb',
        display: 'flex',
        gap: '1rem',
        alignItems: 'center'
      }}>
        <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>Settings:</span>
        <ThemeSwitcher variant="default" />
        <ThemeSwitcher variant="icon" size="lg" />
      </div>
    </div>
  )
};

// Accessibility demo
export const AccessibilityDemo = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
      <div style={{ 
        padding: '1rem', 
        border: '1px solid #e5e7eb', 
        borderRadius: '0.5rem',
        background: '#f9fafb',
        maxWidth: '400px'
      }}>
        <h4 style={{ margin: '0 0 1rem 0' }}>Accessibility Features</h4>
        <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.875rem' }}>
          <li>Keyboard navigation support</li>
          <li>Proper ARIA labels and roles</li>
          <li>Focus management</li>
          <li>Screen reader friendly</li>
          <li>High contrast mode support</li>
          <li>Reduced motion support</li>
        </ul>
      </div>
      
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <span style={{ fontSize: '0.875rem' }}>Try tabbing to focus:</span>
        <ThemeSwitcher variant="dropdown" />
      </div>
      
      <div style={{ fontSize: '0.75rem', color: '#6b7280', textAlign: 'center', maxWidth: '300px' }}>
        Use Tab to focus, Enter/Space to activate, Escape to close dropdown, 
        and arrow keys to navigate dropdown options.
      </div>
    </div>
  )
};
