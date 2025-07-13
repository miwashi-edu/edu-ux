import React, { useState } from 'react';
import { TreeView } from './index.js';

export default {
  title: 'Data Display/TreeView',
  component: TreeView,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A hierarchical tree view component with expand/collapse, selection, and custom rendering capabilities.'
      }
    }
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'compact', 'large'],
      description: 'Visual variant',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size variant',
    },
    selectable: {
      control: { type: 'boolean' },
      description: 'Whether items can be selected',
    },
    multiSelect: {
      control: { type: 'boolean' },
      description: 'Allow multiple selections',
    },
  },
};

const sampleData = [
  {
    id: '1',
    label: 'Documents',
    icon: '📁',
    iconVariant: 'folder',
    children: [
      {
        id: '1-1',
        label: 'Work',
        icon: '📁',
        iconVariant: 'folder',
        children: [
          { id: '1-1-1', label: 'Report.pdf', icon: '📄', iconVariant: 'file' },
          { id: '1-1-2', label: 'Presentation.pptx', icon: '📊', iconVariant: 'file' },
        ]
      },
      {
        id: '1-2',
        label: 'Personal',
        icon: '📁',
        iconVariant: 'folder',
        children: [
          { id: '1-2-1', label: 'Photos', icon: '📁', iconVariant: 'folder' },
          { id: '1-2-2', label: 'Notes.txt', icon: '📝', iconVariant: 'file' },
        ]
      }
    ]
  },
  {
    id: '2',
    label: 'Applications',
    icon: '💻',
    iconVariant: 'folder',
    children: [
      { id: '2-1', label: 'Chrome.app', icon: '🌐', iconVariant: 'file' },
      { id: '2-2', label: 'VSCode.app', icon: '💻', iconVariant: 'file' },
    ]
  },
  {
    id: '3',
    label: 'Downloads',
    icon: '⬇️',
    iconVariant: 'folder',
    children: []
  }
];

export const Default = {
  args: {
    data: sampleData,
    variant: 'default',
    size: 'md',
    selectable: false,
  },
};

export const Compact = {
  args: {
    data: sampleData,
    variant: 'compact',
    size: 'sm',
    selectable: false,
  },
};

export const Large = {
  args: {
    data: sampleData,
    variant: 'large',
    size: 'lg',
    selectable: false,
  },
};

export const Selectable = {
  args: {
    data: sampleData,
    variant: 'default',
    size: 'md',
    selectable: true,
    multiSelect: false,
  },
};

export const MultiSelect = {
  args: {
    data: sampleData,
    variant: 'default',
    size: 'md',
    selectable: true,
    multiSelect: true,
  },
};

export const Controlled = {
  render: (args) => {
    const [selectedItems, setSelectedItems] = useState(['1-1-1']);
    const [expandedItems, setExpandedItems] = useState(['1', '1-1']);

    return (
      <TreeView
        {...args}
        data={sampleData}
        selectedItems={selectedItems}
        expandedItems={expandedItems}
        onSelectionChange={setSelectedItems}
        onExpansionChange={setExpandedItems}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Controlled TreeView with external state management.'
      }
    }
  }
};

export const CustomRenderer = {
  render: (args) => {
    const customRenderItem = (item, level, isExpanded, isSelected, hasChildren) => (
      <TreeView.Item
        key={item.id}
        level={level}
        expanded={isExpanded}
        selected={isSelected}
        onClick={() => console.log('Clicked:', item.label)}
      >
        <TreeView.Content
          hasChildren={hasChildren}
          expanded={isExpanded}
          onToggle={(expanded) => console.log('Toggle:', item.label, expanded)}
        >
          <TreeView.Icon 
            icon={item.icon} 
            variant={item.iconVariant}
            size="md"
          />
          <TreeView.Label variant={item.labelVariant}>
            {item.label}
          </TreeView.Label>
          {isSelected && <span style={{ marginLeft: 'auto', color: '#3b82f6' }}>✓</span>}
        </TreeView.Content>
        
        {hasChildren && (
          <TreeView.Children expanded={isExpanded}>
            {item.children.map(child => customRenderItem(child, level + 1, false, false, child.children?.length > 0))}
          </TreeView.Children>
        )}
      </TreeView.Item>
    );

    return (
      <TreeView
        {...args}
        data={sampleData}
        renderItem={customRenderItem}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'TreeView with custom item renderer.'
      }
    }
  }
};

export const Loading = {
  args: {
    data: [],
    variant: 'default',
    size: 'md',
    loading: true,
  },
};

export const FileExplorer = {
  render: (args) => {
    const fileData = [
      {
        id: 'root',
        label: 'Project Root',
        icon: '📁',
        iconVariant: 'folder',
        children: [
          {
            id: 'src',
            label: 'src',
            icon: '📁',
            iconVariant: 'folder',
            children: [
              {
                id: 'components',
                label: 'components',
                icon: '📁',
                iconVariant: 'folder',
                children: [
                  { id: 'Button.jsx', label: 'Button.jsx', icon: '⚛️', iconVariant: 'file' },
                  { id: 'Modal.jsx', label: 'Modal.jsx', icon: '⚛️', iconVariant: 'file' },
                  { id: 'TreeView.jsx', label: 'TreeView.jsx', icon: '⚛️', iconVariant: 'file' },
                ]
              },
              {
                id: 'utils',
                label: 'utils',
                icon: '📁',
                iconVariant: 'folder',
                children: [
                  { id: 'helpers.js', label: 'helpers.js', icon: '📄', iconVariant: 'file' },
                  { id: 'constants.js', label: 'constants.js', icon: '📄', iconVariant: 'file' },
                ]
              },
              { id: 'App.jsx', label: 'App.jsx', icon: '⚛️', iconVariant: 'file' },
              { id: 'index.js', label: 'index.js', icon: '📄', iconVariant: 'file' },
            ]
          },
          {
            id: 'public',
            label: 'public',
            icon: '📁',
            iconVariant: 'folder',
            children: [
              { id: 'index.html', label: 'index.html', icon: '🌐', iconVariant: 'file' },
              { id: 'favicon.ico', label: 'favicon.ico', icon: '🎨', iconVariant: 'file' },
            ]
          },
          { id: 'package.json', label: 'package.json', icon: '📦', iconVariant: 'file' },
          { id: 'README.md', label: 'README.md', icon: '📖', iconVariant: 'file' },
        ]
      }
    ];

    return (
      <TreeView
        {...args}
        data={fileData}
        variant="compact"
        size="sm"
        selectable={true}
        multiSelect={true}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'File explorer example with project structure.'
      }
    }
  }
};

export const OrganizationChart = {
  render: (args) => {
    const orgData = [
      {
        id: 'ceo',
        label: 'CEO - John Smith',
        icon: '👨‍💼',
        iconVariant: 'custom',
        children: [
          {
            id: 'cto',
            label: 'CTO - Sarah Johnson',
            icon: '👩‍💻',
            iconVariant: 'custom',
            children: [
              { id: 'dev1', label: 'Senior Dev - Mike Chen', icon: '👨‍💻', iconVariant: 'custom' },
              { id: 'dev2', label: 'Junior Dev - Lisa Wang', icon: '👩‍💻', iconVariant: 'custom' },
            ]
          },
          {
            id: 'cfo',
            label: 'CFO - David Brown',
            icon: '👨‍💼',
            iconVariant: 'custom',
            children: [
              { id: 'acc1', label: 'Accountant - Emma Davis', icon: '👩‍💼', iconVariant: 'custom' },
            ]
          },
          {
            id: 'cmo',
            label: 'CMO - Rachel Green',
            icon: '👩‍💼',
            iconVariant: 'custom',
            children: [
              { id: 'mark1', label: 'Marketing - Tom Wilson', icon: '👨‍💼', iconVariant: 'custom' },
            ]
          }
        ]
      }
    ];

    return (
      <TreeView
        {...args}
        data={orgData}
        variant="large"
        size="lg"
        selectable={true}
        multiSelect={false}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Organization chart example with custom icons.'
      }
    }
  }
};
