import React from 'react';
import Drawer from './Drawer.jsx';
import Button from '../Button';

export default {
  title: 'Navigation/Drawer',
  component: Drawer,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'minimal', 'bordered', 'elevated'],
      description: 'Visual variant of the drawer'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Size of the drawer'
    },
    position: {
      control: { type: 'select' },
      options: ['left', 'right', 'top', 'bottom'],
      description: 'Position of the drawer'
    },
    animation: {
      control: { type: 'select' },
      options: ['slide', 'fade', 'scale'],
      description: 'Animation type for drawer opening/closing'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    }
  }
};

// Default story
export const Default = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    
    return (
      <div style={{ padding: '2rem' }}>
        <Button onClick={() => setIsOpen(true)}>
          Open Drawer
        </Button>
        
        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          variant="default"
          size="md"
          position="right"
        >
          <Drawer.Header>
            <h2>Drawer Header</h2>
            <Drawer.Close />
          </Drawer.Header>
          <Drawer.Body>
            <p>This is the content inside the drawer. You can put any React components here.</p>
            <p>This drawer slides in from the right side.</p>
          </Drawer.Body>
          <Drawer.Footer>
            <Button onClick={() => setIsOpen(false)}>
              Close Drawer
            </Button>
          </Drawer.Footer>
        </Drawer>
      </div>
    );
  }
};

// Variants
export const Minimal = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    
    return (
      <div style={{ padding: '2rem' }}>
        <Button onClick={() => setIsOpen(true)}>
          Open Minimal Drawer
        </Button>
        
        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          variant="minimal"
          size="md"
          position="right"
        >
          <Drawer.Header>
            <h2>Minimal Drawer</h2>
            <Drawer.Close />
          </Drawer.Header>
          <Drawer.Body>
            <p>This drawer has a minimal design.</p>
          </Drawer.Body>
          <Drawer.Footer>
            <Button onClick={() => setIsOpen(false)}>
              Close
            </Button>
          </Drawer.Footer>
        </Drawer>
      </div>
    );
  }
};

export const Bordered = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    
    return (
      <div style={{ padding: '2rem' }}>
        <Button onClick={() => setIsOpen(true)}>
          Open Bordered Drawer
        </Button>
        
        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          variant="bordered"
          size="md"
          position="right"
          animation="slide"
        >
          <div style={{ padding: '2rem' }}>
            <h2>Bordered Drawer</h2>
            <p>This drawer has a border design.</p>
            <Button onClick={() => setIsOpen(false)}>
              Close
            </Button>
          </div>
        </Drawer>
      </div>
    );
  }
};

export const Elevated = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    
    return (
      <div style={{ padding: '2rem' }}>
        <Button onClick={() => setIsOpen(true)}>
          Open Elevated Drawer
        </Button>
        
        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          variant="elevated"
          size="md"
          position="right"
        >
          <Drawer.Header>
            <h2>Elevated Drawer</h2>
            <Drawer.Close />
          </Drawer.Header>
          <Drawer.Body>
            <p>This drawer has an elevated design with shadow.</p>
          </Drawer.Body>
          <Drawer.Footer>
            <Button onClick={() => setIsOpen(false)}>
              Close
            </Button>
          </Drawer.Footer>
        </Drawer>
      </div>
    );
  }
};

// Simple controlled drawer without trigger
export const Controlled = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    
    return (
      <div style={{ padding: '2rem' }}>
        <Button onClick={() => setIsOpen(true)}>
          Open Controlled Drawer
        </Button>
        
        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          variant="default"
          size="md"
          position="right"
        >
          <Drawer.Header>
            <h2>Controlled Drawer</h2>
            <Drawer.Close />
          </Drawer.Header>
          <Drawer.Body>
            <p>This drawer is controlled externally without a built-in trigger.</p>
            <p>You can control it from anywhere in your component.</p>
          </Drawer.Body>
          <Drawer.Footer>
            <Button onClick={() => setIsOpen(false)}>
              Close
            </Button>
          </Drawer.Footer>
        </Drawer>
      </div>
    );
  }
};

// Positions
export const LeftPosition = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    
    return (
      <div style={{ padding: '2rem' }}>
        <Button onClick={() => setIsOpen(true)}>
          Open Left Drawer
        </Button>
        
        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          variant="default"
          size="md"
          position="left"
          animation="slide"
        >
          <div style={{ padding: '2rem' }}>
            <h2>Left Drawer</h2>
            <p>This drawer slides in from the left.</p>
            <Button onClick={() => setIsOpen(false)}>
              Close
            </Button>
          </div>
        </Drawer>
      </div>
    );
  }
};

export const TopPosition = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    
    return (
      <div style={{ padding: '2rem' }}>
        <Button onClick={() => setIsOpen(true)}>
          Open Top Drawer
        </Button>
        
        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          variant="default"
          size="md"
          position="top"
          animation="slide"
        >
          <div style={{ padding: '2rem' }}>
            <h2>Top Drawer</h2>
            <p>This drawer slides in from the top.</p>
            <Button onClick={() => setIsOpen(false)}>
              Close
            </Button>
          </div>
        </Drawer>
      </div>
    );
  }
};

export const BottomPosition = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    
    return (
      <div style={{ padding: '2rem' }}>
        <Button onClick={() => setIsOpen(true)}>
          Open Bottom Drawer
        </Button>
        
        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          variant="default"
          size="md"
          position="bottom"
          animation="slide"
        >
          <div style={{ padding: '2rem' }}>
            <h2>Bottom Drawer</h2>
            <p>This drawer slides in from the bottom.</p>
            <Button onClick={() => setIsOpen(false)}>
              Close
            </Button>
          </div>
        </Drawer>
      </div>
    );
  }
};

// Sizes
export const Small = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    
    return (
      <div style={{ padding: '2rem' }}>
        <Button onClick={() => setIsOpen(true)}>
          Open Small Drawer
        </Button>
        
        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          variant="default"
          size="sm"
          position="right"
          animation="slide"
        >
          <div style={{ padding: '2rem' }}>
            <h2>Small Drawer</h2>
            <p>This is a small drawer.</p>
            <Button onClick={() => setIsOpen(false)}>
              Close
            </Button>
          </div>
        </Drawer>
      </div>
    );
  }
};

export const Large = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    
    return (
      <div style={{ padding: '2rem' }}>
        <Button onClick={() => setIsOpen(true)}>
          Open Large Drawer
        </Button>
        
        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          variant="default"
          size="lg"
          position="right"
          animation="slide"
        >
          <div style={{ padding: '2rem' }}>
            <h2>Large Drawer</h2>
            <p>This is a large drawer with more space.</p>
            <Button onClick={() => setIsOpen(false)}>
              Close
            </Button>
          </div>
        </Drawer>
      </div>
    );
  }
};

export const ExtraLarge = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    
    return (
      <div style={{ padding: '2rem' }}>
        <Button onClick={() => setIsOpen(true)}>
          Open Extra Large Drawer
        </Button>
        
        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          variant="default"
          size="xl"
          position="right"
          animation="slide"
        >
          <div style={{ padding: '2rem' }}>
            <h2>Extra Large Drawer</h2>
            <p>This is an extra large drawer with maximum space.</p>
            <Button onClick={() => setIsOpen(false)}>
              Close
            </Button>
          </div>
        </Drawer>
      </div>
    );
  }
};

// Animations
export const FadeAnimation = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    
    return (
      <div style={{ padding: '2rem' }}>
        <Button onClick={() => setIsOpen(true)}>
          Open Fade Drawer
        </Button>
        
        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          variant="default"
          size="md"
          position="right"
          animation="fade"
        >
          <div style={{ padding: '2rem' }}>
            <h2>Fade Animation</h2>
            <p>This drawer uses fade animation.</p>
            <Button onClick={() => setIsOpen(false)}>
              Close
            </Button>
          </div>
        </Drawer>
      </div>
    );
  }
};

export const ScaleAnimation = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    
    return (
      <div style={{ padding: '2rem' }}>
        <Button onClick={() => setIsOpen(true)}>
          Open Scale Drawer
        </Button>
        
        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          variant="default"
          size="md"
          position="right"
          animation="scale"
        >
          <div style={{ padding: '2rem' }}>
            <h2>Scale Animation</h2>
            <p>This drawer uses scale animation.</p>
            <Button onClick={() => setIsOpen(false)}>
              Close
            </Button>
          </div>
        </Drawer>
      </div>
    );
  }
};

// With header and footer
export const WithHeaderAndFooter = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    
    return (
      <div style={{ padding: '2rem' }}>
        <Button onClick={() => setIsOpen(true)}>
          Open Drawer with Header/Footer
        </Button>
        
        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          variant="default"
          size="md"
          position="right"
          animation="slide"
          header={
            <div style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}>
              <h3 style={{ margin: 0, color: '#1f2937' }}>Drawer Header</h3>
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.875rem', color: '#6b7280' }}>
                Optional header content
              </p>
            </div>
          }
          footer={
            <div style={{ padding: '1rem', borderTop: '1px solid #e5e7eb' }}>
              <Button variant="primary" size="sm" style={{ width: '100%' }}>
                Save Changes
              </Button>
            </div>
          }
        >
          <div style={{ padding: '2rem' }}>
            <h2>Drawer Content</h2>
            <p>This drawer has a custom header and footer.</p>
            <p>You can put any content in the main area.</p>
          </div>
        </Drawer>
      </div>
    );
  }
};

// Multiple drawers
export const MultipleDrawers = {
  render: () => {
    const [leftOpen, setLeftOpen] = React.useState(false);
    const [rightOpen, setRightOpen] = React.useState(false);
    
    return (
      <div style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Button onClick={() => setLeftOpen(true)}>
            Open Left Drawer
          </Button>
          <Button onClick={() => setRightOpen(true)}>
            Open Right Drawer
          </Button>
        </div>
        
        <Drawer
          isOpen={leftOpen}
          onClose={() => setLeftOpen(false)}
          variant="default"
          size="md"
          position="left"
          animation="slide"
        >
          <div style={{ padding: '2rem' }}>
            <h2>Left Drawer</h2>
            <p>This is the left drawer.</p>
            <Button onClick={() => setLeftOpen(false)}>
              Close
            </Button>
          </div>
        </Drawer>
        
        <Drawer
          isOpen={rightOpen}
          onClose={() => setRightOpen(false)}
          variant="elevated"
          size="md"
          position="right"
          animation="slide"
        >
          <div style={{ padding: '2rem' }}>
            <h2>Right Drawer</h2>
            <p>This is the right drawer.</p>
            <Button onClick={() => setRightOpen(false)}>
              Close
            </Button>
          </div>
        </Drawer>
      </div>
    );
  }
};
