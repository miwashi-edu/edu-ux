import React from 'react';
import Card from './Card';
import Button from '../Button';

export default {
  title: 'PageLayout/Card',
  component: Card,
};

export const Default = {
  render: () => (
    <Card>
      <Card.Body>
        <p>This is a basic card.</p>
      </Card.Body>
    </Card>
  )
};

export const WithHeaderFooter = {
  render: () => (
    <Card>
      <Card.Header>Card Header</Card.Header>
      <Card.Body>
        <p>This card has a header and a footer.</p>
      </Card.Body>
      <Card.Footer>Card Footer</Card.Footer>
    </Card>
  )
};

export const WithMedia = {
  render: () => (
    <Card>
      <Card.Media src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Nature" />
      <Card.Body>
        <h3>Card with Media</h3>
        <p>This card displays an image at the top.</p>
      </Card.Body>
    </Card>
  )
};

export const WithActions = {
  render: () => (
    <Card>
      <Card.Header>Card with Actions</Card.Header>
      <Card.Body>
        <p>This card has action buttons in the footer.</p>
      </Card.Body>
      <Card.Actions>
        <Button variant="secondary">Cancel</Button>
        <Button variant="primary">Save</Button>
      </Card.Actions>
    </Card>
  )
};

export const Variants = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
      <Card variant="default"><Card.Body>Default</Card.Body></Card>
      <Card variant="outlined"><Card.Body>Outlined</Card.Body></Card>
      <Card variant="elevated"><Card.Body>Elevated</Card.Body></Card>
      <Card variant="minimal"><Card.Body>Minimal</Card.Body></Card>
    </div>
  )
};

export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
      <Card size="sm"><Card.Body>Small</Card.Body></Card>
      <Card size="md"><Card.Body>Medium</Card.Body></Card>
      <Card size="lg"><Card.Body>Large</Card.Body></Card>
    </div>
  )
};

export const Interactive = {
  render: () => {
    const [count, setCount] = React.useState(0);
    return (
      <Card variant="elevated" size="md">
        <Card.Header>Interactive Card</Card.Header>
        <Card.Body>
          <p>Click count: {count}</p>
        </Card.Body>
        <Card.Actions>
          <Button onClick={() => setCount(count + 1)}>Increment</Button>
        </Card.Actions>
      </Card>
    );
  }
};
