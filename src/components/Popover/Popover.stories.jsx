import React, { useState } from 'react';
import Popover from './Popover.jsx';
import Button from '../Button';

export default {
  title: 'Interactive Elements/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    trigger: {
      control: false,
      description: 'The element that triggers the popover'
    },
    content: {
      control: false,
      description: 'The content to display in the popover'
    },
    position: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right'],
      description: 'The position of the popover relative to the trigger'
    },
    triggerType: {
      control: { type: 'select' },
      options: ['click', 'hover'],
      description: 'How the popover is triggered'
    },
    open: {
      control: 'boolean',
      description: 'Whether the popover is open (controlled)'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the popover is disabled'
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
    trigger: <Button variant="primary">Click me</Button>,
    content: <div>This is a popover with some content!</div>,
    position: 'bottom',
    triggerType: 'click',
    disabled: false
  }
};

// Positions
export const Top = {
  args: {
    trigger: <Button variant="secondary">Top</Button>,
    content: <div>Popover positioned above the trigger</div>,
    position: 'top'
  }
};

export const Bottom = {
  args: {
    trigger: <Button variant="secondary">Bottom</Button>,
    content: <div>Popover positioned below the trigger</div>,
    position: 'bottom'
  }
};

export const Left = {
  args: {
    trigger: <Button variant="secondary">Left</Button>,
    content: <div>Popover positioned to the left</div>,
    position: 'left'
  }
};

export const Right = {
  args: {
    trigger: <Button variant="secondary">Right</Button>,
    content: <div>Popover positioned to the right</div>,
    position: 'right'
  }
};

export const TopLeft = {
  args: {
    trigger: <Button variant="secondary">Top Left</Button>,
    content: <div>Popover positioned at top-left</div>,
    position: 'top-left'
  }
};

export const TopRight = {
  args: {
    trigger: <Button variant="secondary">Top Right</Button>,
    content: <div>Popover positioned at top-right</div>,
    position: 'top-right'
  }
};

export const BottomLeft = {
  args: {
    trigger: <Button variant="secondary">Bottom Left</Button>,
    content: <div>Popover positioned at bottom-left</div>,
    position: 'bottom-left'
  }
};

export const BottomRight = {
  args: {
    trigger: <Button variant="secondary">Bottom Right</Button>,
    content: <div>Popover positioned at bottom-right</div>,
    position: 'bottom-right'
  }
};

// Trigger types
export const HoverTrigger = {
  args: {
    trigger: <Button variant="primary">Hover me</Button>,
    content: <div>This popover appears on hover</div>,
    position: 'bottom',
    triggerType: 'hover'
  }
};

// States
export const Disabled = {
  args: {
    trigger: <Button variant="secondary" disabled>Disabled</Button>,
    content: <div>This popover is disabled</div>,
    position: 'bottom',
    disabled: true
  }
};

// Interactive example
export const Interactive = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
      <p>Controlled popover: {open ? 'Open' : 'Closed'}</p>
      <Popover
        trigger={<Button variant="primary">Controlled</Button>}
        content={
          <div>
            <h4>Controlled Popover</h4>
            <p>This popover is controlled externally.</p>
            <Button 
              variant="secondary" 
              size="sm"
              onClick={() => setOpen(false)}
            >
              Close
            </Button>
          </div>
        }
        position="bottom"
        open={open}
        onOpenChange={setOpen}
      />
    </div>
  );
};

// Rich content example
export const RichContent = {
  args: {
    trigger: <Button variant="primary">Rich Content</Button>,
    content: (
      <div>
        <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem' }}>User Profile</h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#3b82f6' }}></div>
          <div>
            <div style={{ fontWeight: 'bold' }}>John Doe</div>
            <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>john@example.com</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '0.25rem' }}>
          <Button variant="secondary" size="sm">View Profile</Button>
          <Button variant="ghost" size="sm">Logout</Button>
        </div>
      </div>
    ),
    position: 'bottom-right'
  }
};

// All positions
export const AllPositions = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', padding: '2rem' }}>
      <div style={{ gridColumn: '2', textAlign: 'center' }}>
        <Popover
          trigger={<Button variant="secondary">Top</Button>}
          content={<div>Top position</div>}
          position="top"
        />
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Popover
          trigger={<Button variant="secondary">Left</Button>}
          content={<div>Left position</div>}
          position="left"
        />
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Popover
          trigger={<Button variant="secondary">Right</Button>}
          content={<div>Right position</div>}
          position="right"
        />
      </div>
      
      <div style={{ gridColumn: '2', textAlign: 'center' }}>
        <Popover
          trigger={<Button variant="secondary">Bottom</Button>}
          content={<div>Bottom position</div>}
          position="bottom"
        />
      </div>
    </div>
  )
};
