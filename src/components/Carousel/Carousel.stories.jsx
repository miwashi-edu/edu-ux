import React, { useState } from 'react';
import Carousel from './index';

export default {
  title: 'Data Display/Carousel',
  component: Carousel,
  parameters: {
    docs: {
      description: {
        component: 'A horizontally scrollable carousel component with touch/swipe support, auto-play, and accessibility features.',
      },
    },
  },
  argTypes: {
    autoPlay: {
      control: 'boolean',
      description: 'Enable automatic slide advancement',
    },
    autoPlayInterval: {
      control: { type: 'number', min: 1000, max: 10000, step: 500 },
      description: 'Interval between auto-play transitions (ms)',
    },
    showControls: {
      control: 'boolean',
      description: 'Show navigation arrows',
    },
    showIndicators: {
      control: 'boolean',
      description: 'Show dot indicators',
    },
    infinite: {
      control: 'boolean',
      description: 'Enable infinite loop',
    },
    swipeable: {
      control: 'boolean',
      description: 'Enable touch/swipe navigation',
    },
    pauseOnHover: {
      control: 'boolean',
      description: 'Pause auto-play on hover',
    },
    defaultActiveIndex: {
      control: { type: 'number', min: 0, max: 4 },
      description: 'Initial active slide index',
    },
  },
};

// Sample slide content
const SampleSlide = ({ number, color, title, description }) => (
  <div style={{
    width: '100%',
    height: '100%',
    backgroundColor: color,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
    padding: '2rem',
  }}>
    <h2 style={{ margin: '0 0 1rem 0', fontSize: '2.5rem' }}>{title}</h2>
    <p style={{ margin: '0', fontSize: '1.2rem', maxWidth: '400px' }}>{description}</p>
    <div style={{ 
      position: 'absolute', 
      top: '1rem', 
      right: '1rem', 
      fontSize: '3rem', 
      opacity: 0.3 
    }}>
      {number}
    </div>
  </div>
);

const slides = [
  {
    number: 1,
    color: '#4f46e5',
    title: 'Welcome to Our Platform',
    description: 'Discover amazing features and possibilities with our comprehensive solution.',
  },
  {
    number: 2,
    color: '#059669',
    title: 'Powerful Analytics',
    description: 'Get insights into your data with our advanced analytics dashboard.',
  },
  {
    number: 3,
    color: '#dc2626',
    title: 'Seamless Integration',
    description: 'Connect with your favorite tools and services effortlessly.',
  },
  {
    number: 4,
    color: '#ea580c',
    title: '24/7 Support',
    description: 'Our dedicated team is here to help you succeed every step of the way.',
  },
  {
    number: 5,
    color: '#7c3aed',
    title: 'Start Today',
    description: 'Join thousands of satisfied customers and transform your workflow.',
  },
];

// Default story
export const Default = {
  args: {
    autoPlay: false,
    showControls: true,
    showIndicators: true,
    infinite: true,
    swipeable: true,
    pauseOnHover: true,
    defaultActiveIndex: 0,
  },
  render: (args) => (
    <div style={{ height: '400px', width: '100%' }}>
      <Carousel {...args}>
        {slides.map((slide) => (
          <SampleSlide key={slide.number} {...slide} />
        ))}
      </Carousel>
    </div>
  ),
};

// Auto-play story
export const AutoPlay = {
  args: {
    ...Default.args,
    autoPlay: true,
    autoPlayInterval: 3000,
  },
  render: Default.render,
};

// Without controls
export const WithoutControls = {
  args: {
    ...Default.args,
    showControls: false,
  },
  render: Default.render,
};

// Without indicators
export const WithoutIndicators = {
  args: {
    ...Default.args,
    showIndicators: false,
  },
  render: Default.render,
};

// Non-infinite
export const NonInfinite = {
  args: {
    ...Default.args,
    infinite: false,
  },
  render: Default.render,
};

// Non-swipeable
export const NonSwipeable = {
  args: {
    ...Default.args,
    swipeable: false,
  },
  render: Default.render,
};

// Image carousel
export const ImageCarousel = {
  args: Default.args,
  render: (args) => (
    <div style={{ height: '400px', width: '100%' }}>
      <Carousel {...args}>
        {[
          'https://picsum.photos/800/400?random=1',
          'https://picsum.photos/800/400?random=2',
          'https://picsum.photos/800/400?random=3',
          'https://picsum.photos/800/400?random=4',
        ].map((src, index) => (
          <div key={index} style={{ width: '100%', height: '100%' }}>
            <img 
              src={src} 
              alt={`Slide ${index + 1}`}
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover' 
              }} 
            />
          </div>
        ))}
      </Carousel>
    </div>
  ),
};

// Card carousel
export const CardCarousel = {
  args: Default.args,
  render: (args) => (
    <div style={{ height: '300px', width: '100%' }}>
      <Carousel {...args}>
        {[
          { title: 'Feature 1', icon: '🚀', description: 'Lightning fast performance' },
          { title: 'Feature 2', icon: '🛡️', description: 'Enterprise-grade security' },
          { title: 'Feature 3', icon: '📊', description: 'Advanced analytics' },
          { title: 'Feature 4', icon: '🔧', description: 'Easy customization' },
        ].map((card, index) => (
          <div key={index} style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
          }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '2rem',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
              maxWidth: '300px',
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{card.icon}</div>
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#333' }}>{card.title}</h3>
              <p style={{ margin: '0', color: '#666' }}>{card.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  ),
};

// Interactive carousel with state
export const Interactive = {
  args: Default.args,
  render: (args) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    return (
      <div>
        <div style={{ 
          marginBottom: '1rem', 
          padding: '1rem', 
          backgroundColor: '#f0f0f0', 
          borderRadius: '8px' 
        }}>
          <p>Current slide: {currentSlide + 1} of {slides.length}</p>
          <button 
            onClick={() => setCurrentSlide(0)}
            style={{ marginRight: '0.5rem' }}
          >
            Go to first
          </button>
          <button 
            onClick={() => setCurrentSlide(slides.length - 1)}
          >
            Go to last
          </button>
        </div>
        
        <div style={{ height: '400px', width: '100%' }}>
          <Carousel 
            {...args} 
            defaultActiveIndex={currentSlide}
            onSlideChange={setCurrentSlide}
          >
            {slides.map((slide) => (
              <SampleSlide key={slide.number} {...slide} />
            ))}
          </Carousel>
        </div>
      </div>
    );
  },
};

// Small size
export const Small = {
  args: {
    ...Default.args,
  },
  render: (args) => (
    <div style={{ height: '200px', width: '100%' }}>
      <Carousel {...args}>
        {slides.slice(0, 3).map((slide) => (
          <SampleSlide key={slide.number} {...slide} />
        ))}
      </Carousel>
    </div>
  ),
};

// Large size
export const Large = {
  args: {
    ...Default.args,
  },
  render: (args) => (
    <div style={{ height: '600px', width: '100%' }}>
      <Carousel {...args}>
        {slides.map((slide) => (
          <SampleSlide key={slide.number} {...slide} />
        ))}
      </Carousel>
    </div>
  ),
};
