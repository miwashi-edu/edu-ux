import React, { useState } from 'react';
import { Accordion } from '.';

export default {
  title: 'Overlays and Feedback/Accordion',
  component: Accordion,
  parameters: {
    docs: {
      description: {
        component: 'A collapsible accordion component with multiple variants and accessibility features.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'bordered', 'flat', 'card'],
      description: 'Visual variant of the accordion',
    },
    allowMultiple: {
      control: { type: 'boolean' },
      description: 'Allow multiple items to be expanded simultaneously',
    },
    defaultExpanded: {
      control: { type: 'object' },
      description: 'Array of item IDs that should be expanded by default',
    },
    onToggle: {
      action: 'toggled',
      description: 'Callback fired when accordion items are toggled',
    },
  },
};

// Basic usage template
const Template = (args) => (
  <Accordion {...args}>
    <Accordion.Item itemId="item-1">
      <Accordion.Header itemId="item-1">What is React?</Accordion.Header>
      <Accordion.Content itemId="item-1">
        <p>React is a JavaScript library for building user interfaces. It lets you create reusable UI components and manage their state efficiently.</p>
      </Accordion.Content>
    </Accordion.Item>
    
    <Accordion.Item itemId="item-2">
      <Accordion.Header itemId="item-2">What are React Hooks?</Accordion.Header>
      <Accordion.Content itemId="item-2">
        <p>React Hooks are functions that let you use state and other React features in functional components. They were introduced in React 16.8.</p>
      </Accordion.Content>
    </Accordion.Item>
    
    <Accordion.Item itemId="item-3">
      <Accordion.Header itemId="item-3">What is JSX?</Accordion.Header>
      <Accordion.Content itemId="item-3">
        <p>JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It makes React components more readable and easier to write.</p>
      </Accordion.Content>
    </Accordion.Item>
  </Accordion>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  allowMultiple: false,
  defaultExpanded: [],
};

export const Bordered = Template.bind({});
Bordered.args = {
  variant: 'bordered',
  allowMultiple: false,
  defaultExpanded: [],
};

export const Flat = Template.bind({});
Flat.args = {
  variant: 'flat',
  allowMultiple: false,
  defaultExpanded: [],
};

export const Card = Template.bind({});
Card.args = {
  variant: 'card',
  allowMultiple: false,
  defaultExpanded: [],
};

export const MultipleExpanded = Template.bind({});
MultipleExpanded.args = {
  variant: 'default',
  allowMultiple: true,
  defaultExpanded: ['item-1', 'item-2'],
};

export const WithDefaultExpanded = Template.bind({});
WithDefaultExpanded.args = {
  variant: 'default',
  allowMultiple: false,
  defaultExpanded: ['item-1'],
};

// Interactive example with custom content
export const Interactive = () => {
  const [expandedItems, setExpandedItems] = useState(['item-1']);

  const handleToggle = (items) => {
    setExpandedItems(items);
    console.log('Expanded items:', items);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h3>Interactive Accordion Example</h3>
      <p>Currently expanded: {expandedItems.join(', ') || 'none'}</p>
      
      <Accordion 
        variant="card" 
        allowMultiple={true}
        defaultExpanded={['item-1']}
        onToggle={handleToggle}
      >
        <Accordion.Item itemId="item-1">
          <Accordion.Header itemId="item-1">
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              📚 Getting Started
            </span>
          </Accordion.Header>
          <Accordion.Content itemId="item-1">
            <div>
              <h4>Welcome to our documentation!</h4>
              <p>This section covers the basics of getting started with our platform.</p>
              <ul>
                <li>Installation guide</li>
                <li>Quick start tutorial</li>
                <li>Basic configuration</li>
              </ul>
            </div>
          </Accordion.Content>
        </Accordion.Item>
        
        <Accordion.Item itemId="item-2">
          <Accordion.Header itemId="item-2">
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              ⚙️ Configuration
            </span>
          </Accordion.Header>
          <Accordion.Content itemId="item-2">
            <div>
              <h4>Advanced Configuration</h4>
              <p>Learn how to configure advanced settings and customize your experience.</p>
              <code style={{ background: '#f1f5f9', padding: '8px', borderRadius: '4px', display: 'block' }}>
                npm install my-package
              </code>
            </div>
          </Accordion.Content>
        </Accordion.Item>
        
        <Accordion.Item itemId="item-3">
          <Accordion.Header itemId="item-3">
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              🚀 Advanced Features
            </span>
          </Accordion.Header>
          <Accordion.Content itemId="item-3">
            <div>
              <h4>Advanced Features</h4>
              <p>Explore advanced features and capabilities of our platform.</p>
              <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '8px', marginTop: '12px' }}>
                <strong>Pro Tip:</strong> Use keyboard navigation (Tab, Enter, Space) for better accessibility.
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

// Disabled state example
export const WithDisabledItems = () => (
  <Accordion variant="default">
    <Accordion.Item itemId="item-1">
      <Accordion.Header itemId="item-1">Enabled Item</Accordion.Header>
      <Accordion.Content itemId="item-1">
        <p>This item is enabled and can be toggled.</p>
      </Accordion.Content>
    </Accordion.Item>
    
    <Accordion.Item itemId="item-2">
      <Accordion.Header itemId="item-2" disabled={true}>Disabled Item</Accordion.Header>
      <Accordion.Content itemId="item-2">
        <p>This content is not accessible because the header is disabled.</p>
      </Accordion.Content>
    </Accordion.Item>
    
    <Accordion.Item itemId="item-3">
      <Accordion.Header itemId="item-3">Another Enabled Item</Accordion.Header>
      <Accordion.Content itemId="item-3">
        <p>This item is also enabled and functional.</p>
      </Accordion.Content>
    </Accordion.Item>
  </Accordion>
);

// Custom icon example
export const WithCustomIcons = () => (
  <Accordion variant="bordered">
    <Accordion.Item itemId="item-1">
      <Accordion.Header 
        itemId="item-1"
        icon={
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 6v6l4 2"/>
          </svg>
        }
      >
        Time Management
      </Accordion.Header>
      <Accordion.Content itemId="item-1">
        <p>Learn effective time management techniques and strategies.</p>
      </Accordion.Content>
    </Accordion.Item>
    
    <Accordion.Item itemId="item-2">
      <Accordion.Header 
        itemId="item-2"
        icon={
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        }
      >
        Project Planning
      </Accordion.Header>
      <Accordion.Content itemId="item-2">
        <p>Master the art of project planning and execution.</p>
      </Accordion.Content>
    </Accordion.Item>
  </Accordion>
);

// Responsive example
export const ResponsiveExample = () => (
  <div style={{ maxWidth: '800px', margin: '0 auto' }}>
    <h3>Responsive Accordion</h3>
    <p>Resize your browser window to see how the accordion adapts to different screen sizes.</p>
    
    <Accordion variant="card">
      <Accordion.Item itemId="item-1">
        <Accordion.Header itemId="item-1">Mobile-First Design</Accordion.Header>
        <Accordion.Content itemId="item-1">
          <p>This accordion is designed with mobile-first principles. It automatically adjusts padding, font sizes, and spacing based on screen size.</p>
          <div style={{ background: '#f1f5f9', padding: '12px', borderRadius: '6px', marginTop: '12px' }}>
            <strong>Breakpoints:</strong>
            <ul style={{ margin: '8px 0 0 20px' }}>
              <li>Desktop: 16px padding, 16px font</li>
              <li>Tablet: 14px padding, 15px font</li>
              <li>Mobile: 12px padding, 14px font</li>
            </ul>
          </div>
        </Accordion.Content>
      </Accordion.Item>
      
      <Accordion.Item itemId="item-2">
        <Accordion.Header itemId="item-2">Accessibility Features</Accordion.Header>
        <Accordion.Content itemId="item-2">
          <p>This accordion includes comprehensive accessibility features:</p>
          <ul>
            <li>Keyboard navigation (Tab, Enter, Space)</li>
            <li>ARIA attributes for screen readers</li>
            <li>Focus management</li>
            <li>High contrast mode support</li>
            <li>Reduced motion preferences</li>
          </ul>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  </div>
);
