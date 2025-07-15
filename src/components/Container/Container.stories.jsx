import React from 'react';
import Container from './Container';

export default {
  title: 'Page Layout/Container',
  component: Container,
};

export const Default = {
  render: () => (
    <Container>
      <h2>Default Container (lg)</h2>
      <p>This container uses the default maxWidth (lg) and is centered.</p>
    </Container>
  )
};

export const AllMaxWidths = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Container maxWidth="xs"><div style={{ background: '#e0e7ef', padding: 8 }}>xs (320px)</div></Container>
      <Container maxWidth="sm"><div style={{ background: '#e0e7ef', padding: 8 }}>sm (480px)</div></Container>
      <Container maxWidth="md"><div style={{ background: '#e0e7ef', padding: 8 }}>md (640px)</div></Container>
      <Container maxWidth="lg"><div style={{ background: '#e0e7ef', padding: 8 }}>lg (960px)</div></Container>
      <Container maxWidth="xl"><div style={{ background: '#e0e7ef', padding: 8 }}>xl (1200px)</div></Container>
      <Container maxWidth="full"><div style={{ background: '#e0e7ef', padding: 8 }}>full (100vw)</div></Container>
    </div>
  )
};

export const Fluid = {
  render: () => (
    <Container fluid>
      <h2>Fluid Container</h2>
      <p>This container stretches to the full viewport width.</p>
    </Container>
  )
};

export const NotCentered = {
  render: () => (
    <Container center={false} style={{ background: '#f9fafb' }}>
      <h2>Not Centered</h2>
      <p>This container is not horizontally centered.</p>
    </Container>
  )
};

export const CustomElement = {
  render: () => (
    <Container as="section">
      <h2>Custom Element (section)</h2>
      <p>This container renders as a &lt;section&gt; element.</p>
    </Container>
  )
};

export const WithContent = {
  render: () => (
    <Container maxWidth="md">
      <h2>Container with Content</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, eget facilisis enim nisl nec elit.</p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </Container>
  )
};

export const ResponsiveDemo = {
  render: () => (
    <Container maxWidth="lg">
      <h2>Responsive Demo</h2>
      <p>Resize the window to see the container adapt to different screen sizes.</p>
      <div style={{ background: '#e0e7ef', height: 100, margin: '1rem 0' }} />
    </Container>
  )
};
