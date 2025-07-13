import React, { useState } from 'react';
import ContextMenu, { ContextMenuItemAtom } from './ContextMenu.jsx';

export default {
  title: 'Interactive Elements/ContextMenu',
  component: ContextMenu,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    open: { control: 'boolean' },
    anchorPoint: { control: 'object' },
    className: { control: 'text' },
  },
};

const menuItems = [
  { label: 'Edit', onClick: () => alert('Edit clicked') },
  { label: 'Duplicate', onClick: () => alert('Duplicate clicked') },
  { label: 'Delete', onClick: () => alert('Delete clicked'), disabled: true },
  { divider: true },
  { label: 'Share', onClick: () => alert('Share clicked') },
];

export const Basic = (args) => (
  <ContextMenu {...args}>
    {menuItems.map((item, i) =>
      item.divider ? (
        <hr key={i} className="divider" />
      ) : (
        <ContextMenuItemAtom
          key={item.label}
          onClick={item.onClick}
          disabled={item.disabled}
        >
          {item.label}
        </ContextMenuItemAtom>
      )
    )}
  </ContextMenu>
);
Basic.args = {
  open: true,
  anchorPoint: { x: 100, y: 100 },
};

export const WithNestedMenu = (args) => (
  <ContextMenu {...args}>
    <ContextMenuItemAtom onClick={() => alert('Open clicked')}>Open</ContextMenuItemAtom>
    <ContextMenuItemAtom>Export
      <ContextMenu {...args} open={true} anchorPoint={{ x: 160, y: 100 }} style={{ top: 0, left: '100%' }}>
        <ContextMenuItemAtom onClick={() => alert('Export as PDF')}>PDF</ContextMenuItemAtom>
        <ContextMenuItemAtom onClick={() => alert('Export as CSV')}>CSV</ContextMenuItemAtom>
      </ContextMenu>
    </ContextMenuItemAtom>
    <ContextMenuItemAtom disabled>Disabled Item</ContextMenuItemAtom>
  </ContextMenu>
);
WithNestedMenu.args = {
  open: true,
  anchorPoint: { x: 100, y: 100 },
};

export const KeyboardAccessible = (args) => {
  const [open, setOpen] = useState(true);
  return (
    <div style={{ height: 200 }}>
      <button onClick={() => setOpen((v) => !v)} style={{ marginBottom: 16 }}>
        Toggle Context Menu
      </button>
      <ContextMenu {...args} open={open} onClose={() => setOpen(false)}>
        <ContextMenuItemAtom onClick={() => alert('Copy')}>Copy</ContextMenuItemAtom>
        <ContextMenuItemAtom onClick={() => alert('Paste')}>Paste</ContextMenuItemAtom>
        <ContextMenuItemAtom disabled>Disabled</ContextMenuItemAtom>
      </ContextMenu>
    </div>
  );
};
KeyboardAccessible.args = {
  anchorPoint: { x: 100, y: 100 },
};
