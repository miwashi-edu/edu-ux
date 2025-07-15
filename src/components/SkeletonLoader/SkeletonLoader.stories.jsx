import React, { useState, useEffect } from 'react';
import SkeletonLoader from './index';

export default {
  title: 'Overlays and Feedback/SkeletonLoader',
  component: SkeletonLoader,
  parameters: {
    docs: {
      description: {
        component: 'A skeleton loader component for displaying placeholder content while loading with accessibility features and smooth animations.'
      }
    }
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'avatar', 'image', 'button', 'card', 'list', 'table', 'custom'],
      description: 'Type of skeleton content to display'
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'pulse', 'wave', 'shimmer'],
      description: 'Visual variant of the skeleton'
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the skeleton elements'
    },
    animated: {
      control: 'boolean',
      description: 'Whether to animate the skeleton'
    },
    count: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Number of skeleton items to display'
    },
    width: {
      control: 'text',
      description: 'Width of the skeleton'
    },
    height: {
      control: 'text',
      description: 'Height of the skeleton (for text type)'
    }
  }
};

// Template for interactive stories
const Template = (args) => {
  return (
    <div style={{ padding: '2rem', maxWidth: '600px' }}>
      <SkeletonLoader {...args} />
    </div>
  );
};

// Default story
export const Default = Template.bind({});
Default.args = {
  type: 'text',
  variant: 'default',
  size: 'medium',
  animated: true,
  count: 1,
  width: '100%',
  height: 'auto'
};

// Text skeletons
export const Text = Template.bind({});
Text.args = {
  ...Default.args,
  type: 'text',
  count: 3
};

export const TextSingle = Template.bind({});
TextSingle.args = {
  ...Default.args,
  type: 'text',
  count: 1
};

// Avatar skeletons
export const Avatar = Template.bind({});
Avatar.args = {
  ...Default.args,
  type: 'avatar',
  count: 5
};

export const AvatarSingle = Template.bind({});
AvatarSingle.args = {
  ...Default.args,
  type: 'avatar',
  count: 1
};

// Image skeletons
export const Image = Template.bind({});
Image.args = {
  ...Default.args,
  type: 'image',
  count: 2
};

export const ImageSingle = Template.bind({});
ImageSingle.args = {
  ...Default.args,
  type: 'image',
  count: 1
};

// Button skeletons
export const Button = Template.bind({});
Button.args = {
  ...Default.args,
  type: 'button',
  count: 3
};

export const ButtonSingle = Template.bind({});
ButtonSingle.args = {
  ...Default.args,
  type: 'button',
  count: 1
};

// Card skeletons
export const Card = Template.bind({});
Card.args = {
  ...Default.args,
  type: 'card',
  count: 2
};

export const CardSingle = Template.bind({});
CardSingle.args = {
  ...Default.args,
  type: 'card',
  count: 1
};

// List skeletons
export const List = Template.bind({});
List.args = {
  ...Default.args,
  type: 'list',
  count: 3
};

export const ListSingle = Template.bind({});
ListSingle.args = {
  ...Default.args,
  type: 'list',
  count: 1
};

// Table skeletons
export const Table = Template.bind({});
Table.args = {
  ...Default.args,
  type: 'table',
  count: 1
};

// Custom skeletons
export const Custom = Template.bind({});
Custom.args = {
  ...Default.args,
  type: 'custom',
  count: 2
};

// Animation variants
export const Pulse = Template.bind({});
Pulse.args = {
  ...Default.args,
  variant: 'pulse',
  type: 'text',
  count: 3
};

export const Wave = Template.bind({});
Wave.args = {
  ...Default.args,
  variant: 'wave',
  type: 'text',
  count: 3
};

export const Shimmer = Template.bind({});
Shimmer.args = {
  ...Default.args,
  variant: 'shimmer',
  type: 'text',
  count: 3
};

// Sizes
export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  size: 'small',
  type: 'text',
  count: 3
};

export const Large = Template.bind({});
Large.args = {
  ...Default.args,
  size: 'large',
  type: 'text',
  count: 3
};

// Without animation
export const NoAnimation = Template.bind({});
NoAnimation.args = {
  ...Default.args,
  animated: false,
  type: 'text',
  count: 3
};

// Mixed content example
export const MixedContent = (args) => {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px' }}>
      <h3>Mixed Content Loading</h3>
      <p>Example of different skeleton types used together.</p>
      
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <SkeletonLoader
          {...args}
          type="avatar"
          size="large"
          count={1}
          width="4rem"
        />
        <div style={{ flex: 1 }}>
          <SkeletonLoader
            {...args}
            type="text"
            count={2}
          />
        </div>
      </div>
      
      <SkeletonLoader
        {...args}
        type="image"
        count={1}
        height="12rem"
      />
      
      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        <SkeletonLoader
          {...args}
          type="button"
          count={1}
          width="8rem"
        />
        <SkeletonLoader
          {...args}
          type="button"
          count={1}
          width="6rem"
        />
      </div>
    </div>
  );
};

MixedContent.args = {
  variant: 'shimmer',
  size: 'medium',
  animated: true
};

// Blog post example
export const BlogPost = (args) => {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px' }}>
      <h3>Blog Post Loading</h3>
      <p>Example of a blog post skeleton layout.</p>
      
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', alignItems: 'center' }}>
        <SkeletonLoader
          {...args}
          type="avatar"
          count={1}
          width="3rem"
        />
        <div style={{ flex: 1 }}>
          <SkeletonLoader
            {...args}
            type="text"
            count={1}
            height="1rem"
          />
        </div>
      </div>
      
      <SkeletonLoader
        {...args}
        type="text"
        count={1}
        height="2rem"
        style={{ marginBottom: '1rem' }}
      />
      
      <SkeletonLoader
        {...args}
        type="text"
        count={3}
        style={{ marginBottom: '2rem' }}
      />
      
      <SkeletonLoader
        {...args}
        type="image"
        count={1}
        height="16rem"
        style={{ marginBottom: '2rem' }}
      />
      
      <SkeletonLoader
        {...args}
        type="text"
        count={4}
      />
    </div>
  );
};

BlogPost.args = {
  variant: 'wave',
  size: 'medium',
  animated: true
};

// Dashboard example
export const Dashboard = (args) => {
  return (
    <div style={{ padding: '2rem', maxWidth: '1200px' }}>
      <h3>Dashboard Loading</h3>
      <p>Example of a dashboard skeleton layout.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <SkeletonLoader
          {...args}
          type="card"
          count={1}
          height="12rem"
        />
        <SkeletonLoader
          {...args}
          type="card"
          count={1}
          height="12rem"
        />
        <SkeletonLoader
          {...args}
          type="card"
          count={1}
          height="12rem"
        />
        <SkeletonLoader
          {...args}
          type="card"
          count={1}
          height="12rem"
        />
      </div>
      
      <div style={{ marginTop: '2rem' }}>
        <SkeletonLoader
          {...args}
          type="table"
          count={1}
          height="20rem"
        />
      </div>
    </div>
  );
};

Dashboard.args = {
  variant: 'pulse',
  size: 'medium',
  animated: true
};

// Loading state example
export const LoadingState = (args) => {
  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setContent({
        title: 'Loaded Content',
        description: 'This content has been loaded successfully!',
        author: 'John Doe',
        date: '2024-01-15'
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div style={{ padding: '2rem', maxWidth: '600px' }}>
        <h3>Loading Content...</h3>
        <SkeletonLoader
          {...args}
          type="text"
          count={1}
          height="2rem"
          style={{ marginBottom: '1rem' }}
        />
        <SkeletonLoader
          {...args}
          type="text"
          count={3}
          style={{ marginBottom: '2rem' }}
        />
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <SkeletonLoader
            {...args}
            type="avatar"
            count={1}
            width="3rem"
          />
          <SkeletonLoader
            {...args}
            type="text"
            count={1}
            height="1rem"
            width="8rem"
          />
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '600px' }}>
      <h3>Content Loaded!</h3>
      <h2>{content.title}</h2>
      <p>{content.description}</p>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '1rem' }}>
        <div style={{ width: '3rem', height: '3rem', borderRadius: '50%', backgroundColor: '#3b82f6' }} />
        <span>By {content.author} • {content.date}</span>
      </div>
      <button 
        onClick={() => {
          setIsLoading(true);
          setContent(null);
        }}
        style={{
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Reload
      </button>
    </div>
  );
};

LoadingState.args = {
  variant: 'shimmer',
  size: 'medium',
  animated: true
};

// Side-by-side comparison for text
export const TextComparison = (args) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', padding: '2rem' }}>
    <div>
      <h4>Skeleton</h4>
      <SkeletonLoader {...args} type="text" count={3} />
    </div>
    <div>
      <h4>Real Content</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio.</p>
        <p>Vitae scelerisque enim ligula venenatis dolor.</p>
      </div>
    </div>
  </div>
);

// Side-by-side comparison for avatar
export const AvatarComparison = (args) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', padding: '2rem' }}>
    <div>
      <h4>Skeleton</h4>
      <SkeletonLoader {...args} type="avatar" count={1} width="4rem" />
    </div>
    <div>
      <h4>Real Content</h4>
      <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Avatar" style={{ width: '4rem', height: '4rem', borderRadius: '50%' }} />
    </div>
  </div>
);

// Side-by-side comparison for image
export const ImageComparison = (args) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', padding: '2rem' }}>
    <div>
      <h4>Skeleton</h4>
      <SkeletonLoader {...args} type="image" count={1} width="12rem" height="8rem" />
    </div>
    <div>
      <h4>Real Content</h4>
      <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Example" style={{ width: '12rem', height: '8rem', objectFit: 'cover', borderRadius: '4px' }} />
    </div>
  </div>
);

// Side-by-side comparison for button
export const ButtonComparison = (args) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', padding: '2rem' }}>
    <div>
      <h4>Skeleton</h4>
      <SkeletonLoader {...args} type="button" count={1} width="8rem" />
    </div>
    <div>
      <h4>Real Content</h4>
      <button style={{ width: '8rem', height: '2.5rem', borderRadius: '4px', background: '#3b82f6', color: 'white', border: 'none' }}>Button</button>
    </div>
  </div>
);

// Side-by-side comparison for card
export const CardComparison = (args) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', padding: '2rem' }}>
    <div>
      <h4>Skeleton</h4>
      <SkeletonLoader {...args} type="card" count={1} width="16rem" height="20rem" />
    </div>
    <div>
      <h4>Real Content</h4>
      <div style={{ width: '16rem', height: '20rem', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', background: '#fff', display: 'flex', flexDirection: 'column' }}>
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Card" style={{ width: '100%', height: '40%', objectFit: 'cover' }} />
        <div style={{ padding: '1rem', flex: 1 }}>
          <h5 style={{ margin: 0 }}>Card Title</h5>
          <p style={{ margin: '0.5rem 0 0 0' }}>Some card content goes here.</p>
        </div>
      </div>
    </div>
  </div>
);

// Side-by-side comparison for list
export const ListComparison = (args) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', padding: '2rem' }}>
    <div>
      <h4>Skeleton</h4>
      <SkeletonLoader {...args} type="list" count={1} width="20rem" />
    </div>
    <div>
      <h4>Real Content</h4>
      <div style={{ width: '20rem', padding: '1rem', background: '#fff', borderRadius: '4px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Avatar" style={{ width: '3rem', height: '3rem', borderRadius: '50%' }} />
          <div>
            <div style={{ fontWeight: 600 }}>List Title</div>
            <div style={{ color: '#555' }}>List item text</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Side-by-side comparison for table
export const TableComparison = (args) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', padding: '2rem' }}>
    <div>
      <h4>Skeleton</h4>
      <SkeletonLoader {...args} type="table" count={1} width="24rem" />
    </div>
    <div>
      <h4>Real Content</h4>
      <table style={{ width: '24rem', borderCollapse: 'collapse', background: '#fff', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
        <thead>
          <tr>
            <th style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>Header 1</th>
            <th style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>Header 2</th>
            <th style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>Header 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>Cell 1</td>
            <td style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>Cell 2</td>
            <td style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>Cell 3</td>
          </tr>
          <tr>
            <td style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>Cell 4</td>
            <td style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>Cell 5</td>
            <td style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>Cell 6</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);
