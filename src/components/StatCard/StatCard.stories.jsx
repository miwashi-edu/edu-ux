import React from 'react';
import { StatCard } from './index.js';

export default {
  title: 'Data Display/StatCard',
  component: StatCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A card component for displaying key metrics and statistics with support for icons, trends, and interactive states.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'success', 'warning', 'danger', 'info'],
      description: 'Visual variant',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Size variant',
    },
    clickable: {
      control: { type: 'boolean' },
      description: 'Whether the card is clickable',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Whether to show loading state',
    },
  },
};

// Basic StatCard
export const Default = {
  args: {
    label: 'Total Revenue',
    value: '$45,231',
    icon: '💰',
    trend: {
      value: 20.1,
      direction: 'up',
    },
  },
};

// All Variants
export const Variants = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
      <StatCard 
        label="Revenue" 
        value="$45,231" 
        icon="💰" 
        variant="success"
        trend={{ value: 20.1, direction: 'up' }}
      />
      <StatCard 
        label="Orders" 
        value="2,350" 
        icon="📦" 
        variant="warning"
        trend={{ value: 5.2, direction: 'down' }}
      />
      <StatCard 
        label="Customers" 
        value="1,234" 
        icon="👥" 
        variant="danger"
        trend={{ value: 12.5, direction: 'up' }}
      />
      <StatCard 
        label="Growth" 
        value="23.5%" 
        icon="📈" 
        variant="info"
        trend={{ value: 8.3, direction: 'up' }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available visual variants of the StatCard component.',
      },
    },
  },
};

// All Sizes
export const Sizes = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
      <StatCard 
        label="Small" 
        value="1,234" 
        icon="📊" 
        size="sm"
        trend={{ value: 12, direction: 'up' }}
      />
      <StatCard 
        label="Medium" 
        value="1,234" 
        icon="📊" 
        size="md"
        trend={{ value: 12, direction: 'up' }}
      />
      <StatCard 
        label="Large" 
        value="1,234" 
        icon="📊" 
        size="lg"
        trend={{ value: 12, direction: 'up' }}
      />
      <StatCard 
        label="Extra Large" 
        value="1,234" 
        icon="📊" 
        size="xl"
        trend={{ value: 12, direction: 'up' }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available size variants of the StatCard component.',
      },
    },
  },
};

// With Trends
export const WithTrends = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
      <StatCard 
        label="Revenue Growth" 
        value="$45,231" 
        icon="💰" 
        trend={{ value: 20.1, direction: 'up', variant: 'success' }}
      />
      <StatCard 
        label="Order Decline" 
        value="2,350" 
        icon="📦" 
        trend={{ value: 5.2, direction: 'down', variant: 'danger' }}
      />
      <StatCard 
        label="Stable Users" 
        value="1,234" 
        icon="👥" 
        trend={{ value: 0, direction: 'neutral', variant: 'default' }}
      />
      <StatCard 
        label="Conversion Rate" 
        value="23.5%" 
        icon="📈" 
        trend={{ value: 8.3, direction: 'up', variant: 'info' }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'StatCards with different trend indicators and directions.',
      },
    },
  },
};

// Clickable Cards
export const Clickable = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
      <StatCard 
        label="Revenue" 
        value="$45,231" 
        icon="💰" 
        clickable
        onClick={() => alert('Revenue card clicked!')}
        trend={{ value: 20.1, direction: 'up' }}
      />
      <StatCard 
        label="Orders" 
        value="2,350" 
        icon="📦" 
        clickable
        onClick={() => alert('Orders card clicked!')}
        trend={{ value: 5.2, direction: 'down' }}
      />
      <StatCard 
        label="Customers" 
        value="1,234" 
        icon="👥" 
        clickable
        onClick={() => alert('Customers card clicked!')}
        trend={{ value: 12.5, direction: 'up' }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Interactive StatCards with click handlers.',
      },
    },
  },
};

// Loading State
export const Loading = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
      <StatCard 
        label="Revenue" 
        value="$45,231" 
        icon="💰" 
        loading
        trend={{ value: 20.1, direction: 'up' }}
      />
      <StatCard 
        label="Orders" 
        value="2,350" 
        icon="📦" 
        loading
        trend={{ value: 5.2, direction: 'down' }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'StatCards in loading state with shimmer animation.',
      },
    },
  },
};

// Custom Content
export const CustomContent = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
      <StatCard variant="success">
        <StatCard.Header>
          <StatCard.Icon icon="💰" variant="success" />
          <StatCard.Label>Custom Revenue</StatCard.Label>
        </StatCard.Header>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <StatCard.Value variant="success" size="lg">$45,231</StatCard.Value>
          <StatCard.Trend value={20.1} direction="up" variant="success" />
        </div>
        <StatCard.Footer>
          <span>From last month</span>
        </StatCard.Footer>
      </StatCard>
      
      <StatCard variant="info">
        <StatCard.Header>
          <StatCard.Icon icon="📊" variant="info" />
          <StatCard.Label>Analytics</StatCard.Label>
        </StatCard.Header>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <StatCard.Value variant="info" size="lg">89.2%</StatCard.Value>
          <StatCard.Trend value={12.5} direction="up" variant="info" />
        </div>
        <StatCard.Footer>
          <span>Conversion rate</span>
        </StatCard.Footer>
      </StatCard>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'StatCards with custom content using atomic subcomponents.',
      },
    },
  },
};

// Real-World Examples
export const RealWorldExamples = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* E-commerce Dashboard */}
      <div>
        <h4>E-commerce Dashboard</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          <StatCard 
            label="Total Revenue" 
            value="$45,231" 
            icon="💰" 
            variant="success"
            trend={{ value: 20.1, direction: 'up' }}
            footer="From last month"
          />
          <StatCard 
            label="Orders" 
            value="2,350" 
            icon="📦" 
            variant="info"
            trend={{ value: 5.2, direction: 'down' }}
            footer="From last month"
          />
          <StatCard 
            label="Customers" 
            value="1,234" 
            icon="👥" 
            variant="warning"
            trend={{ value: 12.5, direction: 'up' }}
            footer="From last month"
          />
          <StatCard 
            label="Conversion Rate" 
            value="23.5%" 
            icon="📈" 
            variant="success"
            trend={{ value: 8.3, direction: 'up' }}
            footer="From last month"
          />
        </div>
      </div>
      
      {/* Analytics Dashboard */}
      <div>
        <h4>Analytics Dashboard</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          <StatCard 
            label="Page Views" 
            value="89,234" 
            icon="👁️" 
            variant="info"
            trend={{ value: 15.2, direction: 'up' }}
            footer="From last week"
          />
          <StatCard 
            label="Bounce Rate" 
            value="23.5%" 
            icon="↩️" 
            variant="warning"
            trend={{ value: 2.1, direction: 'down' }}
            footer="From last week"
          />
          <StatCard 
            label="Session Duration" 
            value="2m 34s" 
            icon="⏱️" 
            variant="success"
            trend={{ value: 8.7, direction: 'up' }}
            footer="From last week"
          />
          <StatCard 
            label="New Users" 
            value="1,234" 
            icon="🆕" 
            variant="info"
            trend={{ value: 18.3, direction: 'up' }}
            footer="From last week"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples showing various use cases for StatCards.',
      },
    },
  },
};
