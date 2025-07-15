import React from 'react';
import Hero from './Hero';

export default {
  title: 'Page Layout/Hero',
  component: Hero,
};

export const Default = {
  render: () => (
    <Hero>
      <Hero.Title>Welcome to the Hero Section</Hero.Title>
      <Hero.Subtitle>This is a subtitle for the hero section.</Hero.Subtitle>
      <Hero.Content>
        <p>Use this area to highlight key information or a call to action.</p>
      </Hero.Content>
      <Hero.Actions>
        <button>Get Started</button>
        <button>Learn More</button>
      </Hero.Actions>
    </Hero>
  ),
};

export const WithImage = {
  render: () => (
    <Hero
      image={{ src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80', alt: 'Mountains' }}
      variant="image-right"
      size="lg"
    >
      <Hero.Title>Stunning Views Await</Hero.Title>
      <Hero.Subtitle>Discover the beauty of nature</Hero.Subtitle>
      <Hero.Content>
        <p>Plan your next adventure with us.</p>
      </Hero.Content>
      <Hero.Actions>
        <button>Book Now</button>
      </Hero.Actions>
    </Hero>
  ),
};

export const Minimal = {
  render: () => (
    <Hero variant="minimal" size="sm">
      <Hero.Title>Minimal Hero</Hero.Title>
      <Hero.Content>
        <p>Simple and clean hero section.</p>
      </Hero.Content>
    </Hero>
  ),
};
