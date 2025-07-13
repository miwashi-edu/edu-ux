import React, { useState } from 'react';
import Gallery from './index';

export default {
  title: 'Data Display/Gallery',
  component: Gallery,
  parameters: {
    docs: {
      description: {
        component: 'A responsive image gallery component with lightbox functionality, filtering, and accessibility features.',
      },
    },
  },
  argTypes: {
    columns: {
      control: { type: 'number', min: 1, max: 6, step: 1 },
      description: 'Number of columns in the grid',
    },
    gap: {
      control: { type: 'number', min: 8, max: 32, step: 4 },
      description: 'Gap between gallery items',
    },
    aspectRatio: {
      control: { type: 'select' },
      options: ['1:1', '4:3', '3:4', '16:9', '21:9'],
      description: 'Aspect ratio of gallery items',
    },
    showFilter: {
      control: 'boolean',
      description: 'Show category filter buttons',
    },
    showLightbox: {
      control: 'boolean',
      description: 'Enable lightbox functionality',
    },
    showOverlay: {
      control: 'boolean',
      description: 'Show overlay with title and description',
    },
  },
};

// Sample images with categories
const sampleImages = [
  {
    src: 'https://picsum.photos/400/400?random=1',
    alt: 'Mountain landscape',
    title: 'Mountain Vista',
    description: 'Breathtaking mountain landscape at sunset',
    category: 'Nature',
  },
  {
    src: 'https://picsum.photos/400/400?random=2',
    alt: 'City skyline',
    title: 'Urban Skyline',
    description: 'Modern city skyline with skyscrapers',
    category: 'Urban',
  },
  {
    src: 'https://picsum.photos/400/400?random=3',
    alt: 'Abstract art',
    title: 'Abstract Composition',
    description: 'Colorful abstract art piece',
    category: 'Abstract',
  },
  {
    src: 'https://picsum.photos/400/400?random=4',
    alt: 'Ocean waves',
    title: 'Ocean Waves',
    description: 'Peaceful ocean waves crashing on shore',
    category: 'Nature',
  },
  {
    src: 'https://picsum.photos/400/400?random=5',
    alt: 'Street photography',
    title: 'Street Life',
    description: 'Vibrant street scene in the city',
    category: 'Urban',
  },
  {
    src: 'https://picsum.photos/400/400?random=6',
    alt: 'Geometric patterns',
    title: 'Geometric Patterns',
    description: 'Modern geometric design patterns',
    category: 'Abstract',
  },
  {
    src: 'https://picsum.photos/400/400?random=7',
    alt: 'Forest path',
    title: 'Forest Path',
    description: 'Serene forest path through the woods',
    category: 'Nature',
  },
  {
    src: 'https://picsum.photos/400/400?random=8',
    alt: 'Architecture',
    title: 'Modern Architecture',
    description: 'Contemporary architectural masterpiece',
    category: 'Urban',
  },
  {
    src: 'https://picsum.photos/400/400?random=9',
    alt: 'Colorful shapes',
    title: 'Colorful Shapes',
    description: 'Vibrant colorful geometric shapes',
    category: 'Abstract',
  },
];

// Default story
export const Default = {
  args: {
    images: sampleImages,
    columns: 3,
    gap: 16,
    aspectRatio: '1:1',
    showFilter: true,
    showLightbox: true,
    showOverlay: true,
  },
};

// Compact gallery
export const Compact = {
  args: {
    ...Default.args,
    columns: 4,
    gap: 12,
  },
};

// Spacious gallery
export const Spacious = {
  args: {
    ...Default.args,
    columns: 2,
    gap: 24,
    aspectRatio: '4:3',
  },
};

// Without filter
export const WithoutFilter = {
  args: {
    ...Default.args,
    showFilter: false,
  },
};

// Without lightbox
export const WithoutLightbox = {
  args: {
    ...Default.args,
    showLightbox: false,
  },
};

// Without overlay
export const WithoutOverlay = {
  args: {
    ...Default.args,
    showOverlay: false,
  },
};

// Landscape aspect ratio
export const Landscape = {
  args: {
    ...Default.args,
    aspectRatio: '16:9',
  },
};

// Portrait aspect ratio
export const Portrait = {
  args: {
    ...Default.args,
    aspectRatio: '3:4',
  },
};

// Single column
export const SingleColumn = {
  args: {
    ...Default.args,
    columns: 1,
    aspectRatio: '16:9',
  },
};

// Many columns
export const ManyColumns = {
  args: {
    ...Default.args,
    columns: 5,
    gap: 8,
  },
};

// Custom overlay content
export const CustomOverlay = {
  args: {
    ...Default.args,
    images: sampleImages.map((image, index) => ({
      ...image,
      overlayContent: (
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
            {['🌄', '🏙️', '🎨', '🌊', '🚶', '🔷', '🌲', '🏛️', '🌈'][index]}
          </div>
          <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>
            {image.title}
          </h3>
          <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.9 }}>
            {image.description}
          </p>
        </div>
      ),
    })),
  },
};

// Interactive gallery with state
export const Interactive = {
  args: Default.args,
  render: (args) => {
    const [images, setImages] = useState(sampleImages);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image, index) => {
      setSelectedImage({ image, index });
      console.log('Image clicked:', image.title, 'at index:', index);
    };

    const addRandomImage = () => {
      const categories = ['Nature', 'Urban', 'Abstract'];
      const newImage = {
        src: `https://picsum.photos/400/400?random=${images.length + 10}`,
        alt: `Random image ${images.length + 1}`,
        title: `Random Image ${images.length + 1}`,
        description: `This is a randomly generated image for testing.`,
        category: categories[Math.floor(Math.random() * categories.length)],
      };
      setImages(prev => [...prev, newImage]);
    };

    const removeLastImage = () => {
      setImages(prev => prev.slice(0, -1));
    };

    return (
      <div>
        <div style={{ 
          marginBottom: '1rem', 
          padding: '1rem', 
          backgroundColor: '#f0f0f0', 
          borderRadius: '8px' 
        }}>
          <p>Gallery has {images.length} images</p>
          <button 
            onClick={addRandomImage}
            style={{ marginRight: '0.5rem' }}
          >
            Add Random Image
          </button>
          <button 
            onClick={removeLastImage}
            disabled={images.length === 0}
          >
            Remove Last Image
          </button>
          {selectedImage && (
            <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
              Last clicked: {selectedImage.image.title}
            </p>
          )}
        </div>
        
        <Gallery 
          {...args} 
          images={images}
          onImageClick={handleImageClick}
        />
      </div>
    );
  },
};

// Empty state
export const EmptyState = {
  args: {
    ...Default.args,
    images: [],
  },
};

// Single image
export const SingleImage = {
  args: {
    ...Default.args,
    images: [sampleImages[0]],
  },
};

// Large images
export const LargeImages = {
  args: {
    ...Default.args,
    images: sampleImages.map(img => ({
      ...img,
      src: img.src.replace('400/400', '800/800'),
    })),
  },
};

// Different categories
export const NatureOnly = {
  args: {
    ...Default.args,
    images: sampleImages.filter(img => img.category === 'Nature'),
  },
};

export const UrbanOnly = {
  args: {
    ...Default.args,
    images: sampleImages.filter(img => img.category === 'Urban'),
  },
};

export const AbstractOnly = {
  args: {
    ...Default.args,
    images: sampleImages.filter(img => img.category === 'Abstract'),
  },
};
