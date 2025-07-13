import React, { useState } from 'react';
import { Table } from './index.js';

export default {
  title: 'Data Display/Table',
  component: Table,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A flexible, accessible table component with variants, sizes, and atomic subcomponents.'
      }
    }
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'striped', 'bordered', 'hover', 'compact'],
      description: 'Visual variant',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size variant',
    },
    responsive: {
      control: { type: 'boolean' },
      description: 'Responsive container',
    },
  },
};

const sampleData = [
  { id: 1, name: 'Alice', email: 'alice@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Bob', email: 'bob@example.com', role: 'Editor', status: 'Inactive' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com', role: 'Viewer', status: 'Active' },
  { id: 4, name: 'Dana', email: 'dana@example.com', role: 'Admin', status: 'Active' },
];

export const Default = {
  args: {
    variant: 'default',
    size: 'md',
    responsive: true,
    children: (
      <>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Role</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {sampleData.map((row) => (
            <Table.Row key={row.id}>
              <Table.Cell>{row.name}</Table.Cell>
              <Table.Cell>{row.email}</Table.Cell>
              <Table.Cell>{row.role}</Table.Cell>
              <Table.Cell>{row.status}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </>
    ),
  },
};

export const Striped = {
  args: {
    variant: 'striped',
    size: 'md',
    responsive: true,
    children: (
      <>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Role</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {sampleData.map((row) => (
            <Table.Row key={row.id}>
              <Table.Cell>{row.name}</Table.Cell>
              <Table.Cell>{row.email}</Table.Cell>
              <Table.Cell>{row.role}</Table.Cell>
              <Table.Cell>{row.status}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </>
    ),
  },
};

export const Bordered = {
  args: {
    variant: 'bordered',
    size: 'md',
    responsive: true,
    children: (
      <>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Role</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {sampleData.map((row) => (
            <Table.Row key={row.id}>
              <Table.Cell>{row.name}</Table.Cell>
              <Table.Cell>{row.email}</Table.Cell>
              <Table.Cell>{row.role}</Table.Cell>
              <Table.Cell>{row.status}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </>
    ),
  },
};

export const Hover = {
  args: {
    variant: 'hover',
    size: 'md',
    responsive: true,
    children: (
      <>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Role</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {sampleData.map((row) => (
            <Table.Row key={row.id}>
              <Table.Cell>{row.name}</Table.Cell>
              <Table.Cell>{row.email}</Table.Cell>
              <Table.Cell>{row.role}</Table.Cell>
              <Table.Cell>{row.status}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </>
    ),
  },
};

export const Compact = {
  args: {
    variant: 'compact',
    size: 'sm',
    responsive: true,
    children: (
      <>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Role</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {sampleData.map((row) => (
            <Table.Row key={row.id}>
              <Table.Cell>{row.name}</Table.Cell>
              <Table.Cell>{row.email}</Table.Cell>
              <Table.Cell>{row.role}</Table.Cell>
              <Table.Cell>{row.status}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </>
    ),
  },
};

export const WithCaption = {
  args: {
    variant: 'default',
    size: 'md',
    responsive: true,
    caption: 'User roles and status overview',
    children: (
      <>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Role</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {sampleData.map((row) => (
            <Table.Row key={row.id}>
              <Table.Cell>{row.name}</Table.Cell>
              <Table.Cell>{row.email}</Table.Cell>
              <Table.Cell>{row.role}</Table.Cell>
              <Table.Cell>{row.status}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </>
    ),
  },
};

export const WithFooter = {
  args: {
    variant: 'default',
    size: 'md',
    responsive: true,
    footer: (
      <Table.Row>
        <Table.Cell colSpan={4}>Showing 4 users</Table.Cell>
      </Table.Row>
    ),
    children: (
      <>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Role</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {sampleData.map((row) => (
            <Table.Row key={row.id}>
              <Table.Cell>{row.name}</Table.Cell>
              <Table.Cell>{row.email}</Table.Cell>
              <Table.Cell>{row.role}</Table.Cell>
              <Table.Cell>{row.status}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </>
    ),
  },
};

export const Sortable = {
  render: (args) => {
    const [sortBy, setSortBy] = useState('name');
    const [sortDir, setSortDir] = useState('asc');
    const sorted = [...sampleData].sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return sortDir === 'asc' ? -1 : 1;
      if (a[sortBy] > b[sortBy]) return sortDir === 'asc' ? 1 : -1;
      return 0;
    });
    const handleSort = (col) => {
      if (sortBy === col) setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
      else { setSortBy(col); setSortDir('asc'); }
    };
    return (
      <Table variant="bordered" size="md" responsive>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell onClick={() => handleSort('name')} style={{ cursor: 'pointer' }}>
              Name {sortBy === 'name' ? (sortDir === 'asc' ? '▲' : '▼') : ''}
            </Table.HeaderCell>
            <Table.HeaderCell onClick={() => handleSort('email')} style={{ cursor: 'pointer' }}>
              Email {sortBy === 'email' ? (sortDir === 'asc' ? '▲' : '▼') : ''}
            </Table.HeaderCell>
            <Table.HeaderCell onClick={() => handleSort('role')} style={{ cursor: 'pointer' }}>
              Role {sortBy === 'role' ? (sortDir === 'asc' ? '▲' : '▼') : ''}
            </Table.HeaderCell>
            <Table.HeaderCell onClick={() => handleSort('status')} style={{ cursor: 'pointer' }}>
              Status {sortBy === 'status' ? (sortDir === 'asc' ? '▲' : '▼') : ''}
            </Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {sorted.map((row) => (
            <Table.Row key={row.id}>
              <Table.Cell>{row.name}</Table.Cell>
              <Table.Cell>{row.email}</Table.Cell>
              <Table.Cell>{row.role}</Table.Cell>
              <Table.Cell>{row.status}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Sortable columns with click handlers and sort indicators.'
      }
    }
  }
};

export const SelectableRows = {
  render: (args) => {
    const [selected, setSelected] = useState([]);
    const toggle = (id) => setSelected((sel) => sel.includes(id) ? sel.filter(i => i !== id) : [...sel, id]);
    return (
      <Table variant="striped" size="md" responsive>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Role</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {sampleData.map((row) => (
            <Table.Row key={row.id} className={selected.includes(row.id) ? 'selected' : ''}>
              <Table.Cell>
                <input type="checkbox" checked={selected.includes(row.id)} onChange={() => toggle(row.id)} />
              </Table.Cell>
              <Table.Cell>{row.name}</Table.Cell>
              <Table.Cell>{row.email}</Table.Cell>
              <Table.Cell>{row.role}</Table.Cell>
              <Table.Cell>{row.status}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Selectable rows with checkboxes.'
      }
    }
  }
};
