import React, { useState } from 'react';
import { Label, LabelGroup } from './index.js';

export default {
  title: 'Data Display/Label',
  component: Label,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A versatile label component for displaying text, icons, and badges with various visual styles and interactive features.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'success', 'warning', 'danger', 'info', 'outline', 'ghost'],
      description: 'Visual style variant',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size variant',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the label is disabled',
    },
    removable: {
      control: { type: 'boolean' },
      description: 'Whether the label can be removed',
    },
    children: {
      control: { type: 'text' },
      description: 'Label content',
    },
  },
};

// Basic Label
export const Default = {
  args: {
    children: 'Default Label',
    variant: 'default',
    size: 'md',
  },
};

// All Variants
export const Variants = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
      <Label variant="default">Default</Label>
      <Label variant="primary">Primary</Label>
      <Label variant="success">Success</Label>
      <Label variant="warning">Warning</Label>
      <Label variant="danger">Danger</Label>
      <Label variant="info">Info</Label>
      <Label variant="outline">Outline</Label>
      <Label variant="ghost">Ghost</Label>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available visual variants of the Label component.',
      },
    },
  },
};

// All Sizes
export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
      <Label size="xs">Extra Small</Label>
      <Label size="sm">Small</Label>
      <Label size="md">Medium</Label>
      <Label size="lg">Large</Label>
      <Label size="xl">Extra Large</Label>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available size variants of the Label component.',
      },
    },
  },
};

// With Icons
export const WithIcons = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
      <Label icon="🔔" iconAfter="→">Notification</Label>
      <Label icon="⭐" variant="warning">Featured</Label>
      <Label icon="✓" variant="success">Completed</Label>
      <Label icon="⚠️" variant="danger">Warning</Label>
      <Label icon="ℹ️" variant="info">Information</Label>
      <Label icon="🔒" variant="outline">Private</Label>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Labels with icons before and after the text content.',
      },
    },
  },
};

// With Badges
export const WithBadges = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
      <Label badge="5" badgeVariant="primary">Inbox</Label>
      <Label badge="12" badgeVariant="success">Messages</Label>
      <Label badge="3" badgeVariant="warning">Alerts</Label>
      <Label badge="1" badgeVariant="danger">Errors</Label>
      <Label badge="99+" badgeVariant="info">Notifications</Label>
      <Label badge="0" badgeVariant="default">Empty</Label>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Labels with badge indicators showing counts or status.',
      },
    },
  },
};

// Removable Labels
export const Removable = {
  render: () => {
    const [labels, setLabels] = useState([
      { id: 1, text: 'React', variant: 'primary' },
      { id: 2, text: 'TypeScript', variant: 'info' },
      { id: 3, text: 'JavaScript', variant: 'warning' },
      { id: 4, text: 'CSS', variant: 'success' },
      { id: 5, text: 'HTML', variant: 'default' },
    ]);

    const handleRemove = (id) => {
      setLabels(labels.filter(label => label.id !== id));
    };

    return (
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
        {labels.map(label => (
          <Label
            key={label.id}
            variant={label.variant}
            removable
            onRemove={() => handleRemove(label.id)}
          >
            {label.text}
          </Label>
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive removable labels with click-to-remove functionality.',
      },
    },
  },
};

// Label Groups
export const Groups = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h4>Default Group</h4>
        <LabelGroup>
          <Label variant="primary">Frontend</Label>
          <Label variant="success">React</Label>
          <Label variant="info">TypeScript</Label>
          <Label variant="warning">CSS</Label>
        </LabelGroup>
      </div>
      
      <div>
        <h4>Compact Group</h4>
        <LabelGroup spacing="xs">
          <Label size="sm" variant="primary">Small</Label>
          <Label size="sm" variant="success">Compact</Label>
          <Label size="sm" variant="info">Labels</Label>
        </LabelGroup>
      </div>
      
      <div>
        <h4>No Wrap Group</h4>
        <LabelGroup wrap={false} spacing="md">
          <Label variant="outline">No</Label>
          <Label variant="outline">Wrap</Label>
          <Label variant="outline">Labels</Label>
        </LabelGroup>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Groups of labels with different spacing and wrapping options.',
      },
    },
  },
};

// Complex Examples
export const ComplexExamples = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Email Labels */}
      <div>
        <h4>Email Categories</h4>
        <LabelGroup>
          <Label icon="📧" badge="23" badgeVariant="primary">Inbox</Label>
          <Label icon="📤" badge="5" badgeVariant="info">Sent</Label>
          <Label icon="📁" badge="12" badgeVariant="default">Drafts</Label>
          <Label icon="🗑️" badge="0" badgeVariant="danger">Trash</Label>
        </LabelGroup>
      </div>
      
      {/* Task Status */}
      <div>
        <h4>Task Status</h4>
        <LabelGroup>
          <Label icon="⏳" variant="warning">In Progress</Label>
          <Label icon="✅" variant="success">Completed</Label>
          <Label icon="❌" variant="danger">Blocked</Label>
          <Label icon="📋" variant="info">Review</Label>
        </LabelGroup>
      </div>
      
      {/* User Tags */}
      <div>
        <h4>User Tags (Removable)</h4>
        <LabelGroup>
          <Label icon="👤" variant="primary" removable>Admin</Label>
          <Label icon="🔧" variant="warning" removable>Developer</Label>
          <Label icon="🎨" variant="info" removable>Designer</Label>
          <Label icon="📊" variant="success" removable>Analyst</Label>
        </LabelGroup>
      </div>
      
      {/* Priority Levels */}
      <div>
        <h4>Priority Levels</h4>
        <LabelGroup>
          <Label icon="🔴" variant="danger" size="lg">Critical</Label>
          <Label icon="🟡" variant="warning" size="lg">High</Label>
          <Label icon="🟢" variant="success" size="lg">Normal</Label>
          <Label icon="🔵" variant="info" size="lg">Low</Label>
        </LabelGroup>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complex real-world examples showing various use cases for labels.',
      },
    },
  },
};

// Disabled State
export const Disabled = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
      <Label disabled>Disabled Default</Label>
      <Label disabled variant="primary">Disabled Primary</Label>
      <Label disabled variant="success">Disabled Success</Label>
      <Label disabled icon="🔒" removable>Disabled Removable</Label>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Labels in disabled state with reduced opacity and no interactions.',
      },
    },
  },
};

// Interactive Example
export const InteractiveExample = {
  render: () => {
    const [selectedTags, setSelectedTags] = useState(['react', 'typescript']);
    const [availableTags] = useState([
      { id: 'react', name: 'React', variant: 'primary' },
      { id: 'typescript', name: 'TypeScript', variant: 'info' },
      { id: 'javascript', name: 'JavaScript', variant: 'warning' },
      { id: 'css', name: 'CSS', variant: 'success' },
      { id: 'html', name: 'HTML', variant: 'default' },
      { id: 'node', name: 'Node.js', variant: 'danger' },
    ]);

    const handleTagToggle = (tagId) => {
      setSelectedTags(prev => 
        prev.includes(tagId) 
          ? prev.filter(id => id !== tagId)
          : [...prev, tagId]
      );
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h4>Select Technologies</h4>
        <LabelGroup>
          {availableTags.map(tag => (
            <Label
              key={tag.id}
              variant={selectedTags.includes(tag.id) ? tag.variant : 'outline'}
              removable={selectedTags.includes(tag.id)}
              onRemove={() => handleTagToggle(tag.id)}
              style={{ cursor: 'pointer' }}
              onClick={() => handleTagToggle(tag.id)}
            >
              {tag.name}
            </Label>
          ))}
        </LabelGroup>
        <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
          Selected: {selectedTags.length} technologies
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive example showing how labels can be used for tag selection.',
      },
    },
  },
};
