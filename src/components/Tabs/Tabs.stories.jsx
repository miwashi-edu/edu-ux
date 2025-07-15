import React, { useState } from 'react';
import Tabs from './Tabs.jsx';

export default {
  title: 'Interactive Elements/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'bordered', 'pills', 'underline'],
      description: 'Visual variant of the tabs'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the tabs'
    },
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'Orientation of the tabs'
    },
    defaultValue: {
      control: 'text',
      description: 'Default active tab value'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    }
  }
};

// Default story
export const Default = {
  render: (args) => (
    <Tabs {...args}>
      <Tabs.List>
        <Tabs.Trigger value="account">Account</Tabs.Trigger>
        <Tabs.Trigger value="password">Password</Tabs.Trigger>
        <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="account">
        <div>
          <h3>Account Settings</h3>
          <p>Manage your account preferences and profile information.</p>
          <div style={{ marginTop: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>
              Email: <input type="email" placeholder="your@email.com" style={{ marginLeft: '0.5rem', padding: '0.25rem' }} />
            </label>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>
              Name: <input type="text" placeholder="Your Name" style={{ marginLeft: '0.5rem', padding: '0.25rem' }} />
            </label>
          </div>
        </div>
      </Tabs.Content>
      <Tabs.Content value="password">
        <div>
          <h3>Password Settings</h3>
          <p>Update your password and security settings.</p>
          <div style={{ marginTop: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>
              Current Password: <input type="password" style={{ marginLeft: '0.5rem', padding: '0.25rem' }} />
            </label>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>
              New Password: <input type="password" style={{ marginLeft: '0.5rem', padding: '0.25rem' }} />
            </label>
          </div>
        </div>
      </Tabs.Content>
      <Tabs.Content value="settings">
        <div>
          <h3>General Settings</h3>
          <p>Configure your application preferences.</p>
          <div style={{ marginTop: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>
              <input type="checkbox" style={{ marginRight: '0.5rem' }} />
              Enable notifications
            </label>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>
              <input type="checkbox" style={{ marginRight: '0.5rem' }} />
              Dark mode
            </label>
          </div>
        </div>
      </Tabs.Content>
    </Tabs>
  ),
  args: {
    variant: 'default',
    size: 'md',
    orientation: 'horizontal',
    defaultValue: 'account'
  }
};

// Variants
export const Bordered = {
  render: (args) => (
    <Tabs {...args}>
      <Tabs.List>
        <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
        <Tabs.Trigger value="analytics">Analytics</Tabs.Trigger>
        <Tabs.Trigger value="reports">Reports</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="overview">
        <div>
          <h3>Dashboard Overview</h3>
          <p>View your key metrics and performance indicators.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginTop: '1rem' }}>
            <div style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#3b82f6' }}>1,234</div>
              <div>Total Users</div>
            </div>
            <div style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10b981' }}>89%</div>
              <div>Conversion Rate</div>
            </div>
            <div style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#f59e0b' }}>$12.5K</div>
              <div>Revenue</div>
            </div>
          </div>
        </div>
      </Tabs.Content>
      <Tabs.Content value="analytics">
        <div>
          <h3>Analytics</h3>
          <p>Detailed analytics and insights about your data.</p>
          <div style={{ marginTop: '1rem', padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', background: '#f9fafb' }}>
            <p>Analytics content would go here...</p>
          </div>
        </div>
      </Tabs.Content>
      <Tabs.Content value="reports">
        <div>
          <h3>Reports</h3>
          <p>Generate and view detailed reports.</p>
          <div style={{ marginTop: '1rem' }}>
            <button style={{ padding: '0.5rem 1rem', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '0.25rem', cursor: 'pointer' }}>
              Generate Report
            </button>
          </div>
        </div>
      </Tabs.Content>
    </Tabs>
  ),
  args: {
    variant: 'bordered',
    size: 'md',
    defaultValue: 'overview'
  }
};

export const Pills = {
  render: (args) => (
    <Tabs {...args}>
      <Tabs.List>
        <Tabs.Trigger value="all">All</Tabs.Trigger>
        <Tabs.Trigger value="active">Active</Tabs.Trigger>
        <Tabs.Trigger value="archived">Archived</Tabs.Trigger>
        <Tabs.Trigger value="draft">Draft</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="all">
        <div>
          <h3>All Items</h3>
          <p>Showing all items in the system.</p>
          <ul style={{ marginTop: '1rem' }}>
            <li>Item 1 - Active</li>
            <li>Item 2 - Archived</li>
            <li>Item 3 - Draft</li>
            <li>Item 4 - Active</li>
          </ul>
        </div>
      </Tabs.Content>
      <Tabs.Content value="active">
        <div>
          <h3>Active Items</h3>
          <p>Showing only active items.</p>
          <ul style={{ marginTop: '1rem' }}>
            <li>Item 1 - Active</li>
            <li>Item 4 - Active</li>
          </ul>
        </div>
      </Tabs.Content>
      <Tabs.Content value="archived">
        <div>
          <h3>Archived Items</h3>
          <p>Showing archived items.</p>
          <ul style={{ marginTop: '1rem' }}>
            <li>Item 2 - Archived</li>
          </ul>
        </div>
      </Tabs.Content>
      <Tabs.Content value="draft">
        <div>
          <h3>Draft Items</h3>
          <p>Showing draft items.</p>
          <ul style={{ marginTop: '1rem' }}>
            <li>Item 3 - Draft</li>
          </ul>
        </div>
      </Tabs.Content>
    </Tabs>
  ),
  args: {
    variant: 'pills',
    size: 'md',
    defaultValue: 'all'
  }
};

export const Underline = {
  render: (args) => (
    <Tabs {...args}>
      <Tabs.List>
        <Tabs.Trigger value="details">Details</Tabs.Trigger>
        <Tabs.Trigger value="history">History</Tabs.Trigger>
        <Tabs.Trigger value="comments">Comments</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="details">
        <div>
          <h3>Item Details</h3>
          <p>Detailed information about the selected item.</p>
          <div style={{ marginTop: '1rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '0.5rem', fontWeight: 'bold' }}>ID:</td>
                  <td style={{ padding: '0.5rem' }}>12345</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '0.5rem', fontWeight: 'bold' }}>Status:</td>
                  <td style={{ padding: '0.5rem' }}>Active</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '0.5rem', fontWeight: 'bold' }}>Created:</td>
                  <td style={{ padding: '0.5rem' }}>2024-01-15</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Tabs.Content>
      <Tabs.Content value="history">
        <div>
          <h3>Change History</h3>
          <p>Track all changes made to this item.</p>
          <div style={{ marginTop: '1rem' }}>
            <div style={{ padding: '0.5rem', borderLeft: '3px solid #3b82f6', marginBottom: '0.5rem' }}>
              <strong>2024-01-15 10:30 AM</strong> - Item created
            </div>
            <div style={{ padding: '0.5rem', borderLeft: '3px solid #10b981', marginBottom: '0.5rem' }}>
              <strong>2024-01-16 02:15 PM</strong> - Status updated to Active
            </div>
          </div>
        </div>
      </Tabs.Content>
      <Tabs.Content value="comments">
        <div>
          <h3>Comments</h3>
          <p>View and add comments for this item.</p>
          <div style={{ marginTop: '1rem' }}>
            <textarea 
              placeholder="Add a comment..." 
              style={{ 
                width: '100%', 
                minHeight: '100px', 
                padding: '0.5rem', 
                border: '1px solid #e5e7eb', 
                borderRadius: '0.25rem' 
              }} 
            />
            <button style={{ 
              marginTop: '0.5rem', 
              padding: '0.5rem 1rem', 
              background: '#3b82f6', 
              color: 'white', 
              border: 'none', 
              borderRadius: '0.25rem', 
              cursor: 'pointer' 
            }}>
              Add Comment
            </button>
          </div>
        </div>
      </Tabs.Content>
    </Tabs>
  ),
  args: {
    variant: 'underline',
    size: 'md',
    defaultValue: 'details'
  }
};

// Sizes
export const Small = {
  render: (args) => (
    <Tabs {...args}>
      <Tabs.List>
        <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
        <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">
        <div>Content for tab 1</div>
      </Tabs.Content>
      <Tabs.Content value="tab2">
        <div>Content for tab 2</div>
      </Tabs.Content>
      <Tabs.Content value="tab3">
        <div>Content for tab 3</div>
      </Tabs.Content>
    </Tabs>
  ),
  args: {
    variant: 'default',
    size: 'sm',
    defaultValue: 'tab1'
  }
};

export const Large = {
  render: (args) => (
    <Tabs {...args}>
      <Tabs.List>
        <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
        <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">
        <div>Content for tab 1</div>
      </Tabs.Content>
      <Tabs.Content value="tab2">
        <div>Content for tab 2</div>
      </Tabs.Content>
      <Tabs.Content value="tab3">
        <div>Content for tab 3</div>
      </Tabs.Content>
    </Tabs>
  ),
  args: {
    variant: 'default',
    size: 'lg',
    defaultValue: 'tab1'
  }
};

// Vertical orientation
export const Vertical = {
  render: (args) => (
    <Tabs {...args}>
      <Tabs.List>
        <Tabs.Trigger value="profile">Profile</Tabs.Trigger>
        <Tabs.Trigger value="security">Security</Tabs.Trigger>
        <Tabs.Trigger value="notifications">Notifications</Tabs.Trigger>
        <Tabs.Trigger value="billing">Billing</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="profile">
        <div>
          <h3>Profile Settings</h3>
          <p>Manage your profile information and preferences.</p>
        </div>
      </Tabs.Content>
      <Tabs.Content value="security">
        <div>
          <h3>Security Settings</h3>
          <p>Configure your security preferences and authentication methods.</p>
        </div>
      </Tabs.Content>
      <Tabs.Content value="notifications">
        <div>
          <h3>Notification Preferences</h3>
          <p>Control how and when you receive notifications.</p>
        </div>
      </Tabs.Content>
      <Tabs.Content value="billing">
        <div>
          <h3>Billing Information</h3>
          <p>Manage your billing details and subscription.</p>
        </div>
      </Tabs.Content>
    </Tabs>
  ),
  args: {
    variant: 'default',
    size: 'md',
    orientation: 'vertical',
    defaultValue: 'profile'
  }
};

// Interactive example
export const Interactive = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <p>Current active tab: <strong>{activeTab}</strong></p>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <Tabs.List>
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
          <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">
          <div>
            <h3>Controlled Tab 1</h3>
            <p>This tab is controlled externally. You can programmatically change tabs.</p>
            <button 
              onClick={() => setActiveTab('tab2')}
              style={{ 
                padding: '0.5rem 1rem', 
                background: '#3b82f6', 
                color: 'white', 
                border: 'none', 
                borderRadius: '0.25rem', 
                cursor: 'pointer' 
              }}
            >
              Go to Tab 2
            </button>
          </div>
        </Tabs.Content>
        <Tabs.Content value="tab2">
          <div>
            <h3>Controlled Tab 2</h3>
            <p>This is the second controlled tab.</p>
            <button 
              onClick={() => setActiveTab('tab3')}
              style={{ 
                padding: '0.5rem 1rem', 
                background: '#3b82f6', 
                color: 'white', 
                border: 'none', 
                borderRadius: '0.25rem', 
                cursor: 'pointer' 
              }}
            >
              Go to Tab 3
            </button>
          </div>
        </Tabs.Content>
        <Tabs.Content value="tab3">
          <div>
            <h3>Controlled Tab 3</h3>
            <p>This is the third controlled tab.</p>
            <button 
              onClick={() => setActiveTab('tab1')}
              style={{ 
                padding: '0.5rem 1rem', 
                background: '#3b82f6', 
                color: 'white', 
                border: 'none', 
                borderRadius: '0.25rem', 
                cursor: 'pointer' 
              }}
            >
              Back to Tab 1
            </button>
          </div>
        </Tabs.Content>
      </Tabs>
    </div>
  );
};

// Disabled tabs
export const Disabled = {
  render: (args) => (
    <Tabs {...args}>
      <Tabs.List>
        <Tabs.Trigger value="enabled">Enabled</Tabs.Trigger>
        <Tabs.Trigger value="disabled" disabled>Disabled</Tabs.Trigger>
        <Tabs.Trigger value="another">Another</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="enabled">
        <div>
          <h3>Enabled Tab</h3>
          <p>This tab is enabled and can be accessed.</p>
        </div>
      </Tabs.Content>
      <Tabs.Content value="disabled">
        <div>
          <h3>Disabled Tab</h3>
          <p>This content should not be visible since the tab is disabled.</p>
        </div>
      </Tabs.Content>
      <Tabs.Content value="another">
        <div>
          <h3>Another Tab</h3>
          <p>This is another enabled tab.</p>
        </div>
      </Tabs.Content>
    </Tabs>
  ),
  args: {
    variant: 'default',
    size: 'md',
    defaultValue: 'enabled'
  }
};
