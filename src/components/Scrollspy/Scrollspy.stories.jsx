import React from 'react';
import Scrollspy from './Scrollspy.jsx';

export default {
  title: 'Navigation/Scrollspy',
  component: Scrollspy,
  decorators: [
    (Story) => (
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        height: '80vh',
        maxHeight: '80vh',
        overflow: 'hidden',
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        background: '#f9fafb',
      }}>
        {Story()}
      </div>
    )
  ],
  parameters: {
    // layout: 'fullscreen', // Removed fullscreen layout
    docs: {
      description: {
        component:
          'Scrollspy is best used in a real app layout. In Storybook, it is shown in a scrollable container. Use the `fixed` prop to keep the navigation visible, or try sticky positioning for best results.'
      }
    }
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'minimal', 'bordered', 'elevated'],
      description: 'Visual variant of the scrollspy'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the scrollspy'
    },
    position: {
      control: { type: 'select' },
      options: ['left', 'right'],
      description: 'Position of the scrollspy'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    },
    fixed: {
      control: 'boolean',
      description: 'Use fixed positioning for the navigation'
    }
  }
};

const sampleItems = [
  { id: 'section1', label: 'Introduction', href: '#section1' },
  { id: 'section2', label: 'Features', href: '#section2' },
  { id: 'section3', label: 'Getting Started', href: '#section3' },
  { id: 'section4', label: 'Advanced Usage', href: '#section4' },
  { id: 'section5', label: 'API Reference', href: '#section5' }
];

const sampleContent = (
  <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', height: '100%', overflowY: 'auto' }}>
    <section id="section1" style={{ minHeight: '100vh', padding: '2rem 0' }}>
      <h1>Introduction</h1>
      <p>This is the introduction section. Scroll down to see the scrollspy in action.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </section>
    <section id="section2" style={{ minHeight: '100vh', padding: '2rem 0' }}>
      <h1>Features</h1>
      <p>This section covers the main features of our product.</p>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </section>
    <section id="section3" style={{ minHeight: '100vh', padding: '2rem 0' }}>
      <h1>Getting Started</h1>
      <p>Learn how to get started with our product.</p>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
      <p>Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
    </section>
    <section id="section4" style={{ minHeight: '100vh', padding: '2rem 0' }}>
      <h1>Advanced Usage</h1>
      <p>Explore advanced features and customization options.</p>
      <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
      <p>Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
    </section>
    <section id="section5" style={{ minHeight: '100vh', padding: '2rem 0' }}>
      <h1>API Reference</h1>
      <p>Complete API documentation and reference.</p>
      <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
      <p>Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    </section>
  </div>
);

// Default story (non-fixed)
export const Default = {
  render: () => (
    <>
      <Scrollspy
        items={sampleItems}
        variant="default"
        size="md"
        position="left"
        fixed={false}
      />
      {sampleContent}
    </>
  )
};

// Variants
export const Minimal = {
  render: () => (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Scrollspy
        items={sampleItems}
        variant="minimal"
        size="md"
        position="left"
      />
      {sampleContent}
    </div>
  )
};

export const Bordered = {
  render: () => (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Scrollspy
        items={sampleItems}
        variant="bordered"
        size="md"
        position="left"
      />
      {sampleContent}
    </div>
  )
};

export const Elevated = {
  render: () => (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Scrollspy
        items={sampleItems}
        variant="elevated"
        size="md"
        position="left"
      />
      {sampleContent}
    </div>
  )
};

// Sizes
export const Small = {
  render: () => (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Scrollspy
        items={sampleItems}
        variant="default"
        size="sm"
        position="left"
      />
      {sampleContent}
    </div>
  )
};

export const Large = {
  render: () => (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Scrollspy
        items={sampleItems}
        variant="default"
        size="lg"
        position="left"
      />
      {sampleContent}
    </div>
  )
};

// Positions
export const RightPosition = {
  render: () => (
    <div style={{ display: 'flex', height: '100vh' }}>
      {sampleContent}
      <Scrollspy
        items={sampleItems}
        variant="default"
        size="md"
        position="right"
      />
    </div>
  )
};

// With custom items
export const WithCustomItems = {
  render: () => {
    const customItems = [
      { id: 'overview', label: 'Overview', href: '#overview', icon: '📋' },
      { id: 'installation', label: 'Installation', href: '#installation', icon: '⚙️' },
      { id: 'configuration', label: 'Configuration', href: '#configuration', icon: '🔧' },
      { id: 'examples', label: 'Examples', href: '#examples', icon: '💡' },
      { id: 'troubleshooting', label: 'Troubleshooting', href: '#troubleshooting', icon: '🔍' }
    ];
    
    const customContent = (
      <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <section id="overview" style={{ minHeight: '100vh', padding: '2rem 0' }}>
          <h1>Overview</h1>
          <p>This is the overview section with custom items.</p>
        </section>
        
        <section id="installation" style={{ minHeight: '100vh', padding: '2rem 0' }}>
          <h1>Installation</h1>
          <p>Installation instructions and requirements.</p>
        </section>
        
        <section id="configuration" style={{ minHeight: '100vh', padding: '2rem 0' }}>
          <h1>Configuration</h1>
          <p>Configuration options and settings.</p>
        </section>
        
        <section id="examples" style={{ minHeight: '100vh', padding: '2rem 0' }}>
          <h1>Examples</h1>
          <p>Code examples and use cases.</p>
        </section>
        
        <section id="troubleshooting" style={{ minHeight: '100vh', padding: '2rem 0' }}>
          <h1>Troubleshooting</h1>
          <p>Common issues and solutions.</p>
        </section>
      </div>
    );
    
    return (
      <div style={{ display: 'flex', height: '100vh' }}>
        <Scrollspy
          items={customItems}
          variant="default"
          size="md"
          position="left"
        />
        {customContent}
      </div>
    );
  }
};

// All variants
export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', height: '100vh' }}>
      <Scrollspy
        items={sampleItems.slice(0, 3)}
        variant="default"
        size="md"
        position="left"
      />
      
      <Scrollspy
        items={sampleItems.slice(0, 3)}
        variant="minimal"
        size="md"
        position="left"
      />
      
      <Scrollspy
        items={sampleItems.slice(0, 3)}
        variant="bordered"
        size="md"
        position="left"
      />
      
      <Scrollspy
        items={sampleItems.slice(0, 3)}
        variant="elevated"
        size="md"
        position="left"
      />
      
      <div style={{ flex: 1, overflow: 'auto' }}>
        {sampleContent}
      </div>
    </div>
  )
};

// All sizes
export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', height: '100vh' }}>
      <Scrollspy
        items={sampleItems.slice(0, 3)}
        variant="default"
        size="sm"
        position="left"
      />
      
      <Scrollspy
        items={sampleItems.slice(0, 3)}
        variant="default"
        size="md"
        position="left"
      />
      
      <Scrollspy
        items={sampleItems.slice(0, 3)}
        variant="default"
        size="lg"
        position="left"
      />
      
      <div style={{ flex: 1, overflow: 'auto' }}>
        {sampleContent}
      </div>
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
      <div style={{ display: 'flex', height: '100vh' }}>
        <Scrollspy
          items={sampleItems}
          variant="default"
          size="md"
          position="left"
          onItemClick={handleItemClick}
        />
        
        <div style={{ flex: 1, overflow: 'auto' }}>
          {sampleContent}
          
          {activeItem && (
            <div style={{ 
              position: 'fixed', 
              bottom: '2rem', 
              right: '2rem', 
              padding: '1rem', 
              background: '#f3f4f6', 
              borderRadius: '0.375rem',
              border: '1px solid #e5e7eb'
            }}>
              <p>Last clicked: <strong>{activeItem}</strong></p>
            </div>
          )}
        </div>
      </div>
    );
  }
};

// With header
export const WithHeader = {
  render: () => (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Scrollspy
        items={sampleItems}
        variant="default"
        size="md"
        position="left"
        header={
          <div style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}>
            <h3 style={{ margin: 0, color: '#1f2937' }}>Table of Contents</h3>
            <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.875rem', color: '#6b7280' }}>
              Navigate through sections
            </p>
          </div>
        }
      />
      {sampleContent}
    </div>
  )
};

// Fixed top right
export const FixedTopRight = {
  render: () => (
    <div style={{ minHeight: '300vh', position: 'relative' }}>
      <Scrollspy
        items={sampleItems}
        variant="default"
        size="md"
        fixed
      />
      {sampleContent}
    </div>
  )
};
