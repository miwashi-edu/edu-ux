import React, { useState } from 'react';
import Pagination from './Pagination.jsx';

export default {
  title: 'Interactive Elements/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    currentPage: {
      control: { type: 'number', min: 1 },
      description: 'Current active page'
    },
    totalPages: {
      control: { type: 'number', min: 1 },
      description: 'Total number of pages'
    },
    showFirstLast: {
      control: 'boolean',
      description: 'Show first/last page buttons'
    },
    showPrevNext: {
      control: 'boolean',
      description: 'Show previous/next page buttons'
    },
    maxVisible: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Maximum number of page buttons to show'
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'The size of the pagination'
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'bordered', 'rounded'],
      description: 'The visual variant of the pagination'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the pagination is disabled'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    }
  }
};

// Default story
export const Default = {
  args: {
    currentPage: 1,
    totalPages: 10,
    showFirstLast: true,
    showPrevNext: true,
    maxVisible: 5,
    size: 'medium',
    variant: 'default',
    disabled: false
  }
};

// Variants
export const Bordered = {
  args: {
    currentPage: 3,
    totalPages: 10,
    variant: 'bordered',
    size: 'medium'
  }
};

export const Rounded = {
  args: {
    currentPage: 5,
    totalPages: 10,
    variant: 'rounded',
    size: 'medium'
  }
};

// Sizes
export const Small = {
  args: {
    currentPage: 2,
    totalPages: 8,
    size: 'small'
  }
};

export const Large = {
  args: {
    currentPage: 4,
    totalPages: 12,
    size: 'large'
  }
};

// States
export const Disabled = {
  args: {
    currentPage: 1,
    totalPages: 5,
    disabled: true
  }
};

// Configurations
export const NoFirstLast = {
  args: {
    currentPage: 3,
    totalPages: 7,
    showFirstLast: false,
    showPrevNext: true
  }
};

export const NoPrevNext = {
  args: {
    currentPage: 2,
    totalPages: 6,
    showFirstLast: true,
    showPrevNext: false
  }
};

export const Minimal = {
  args: {
    currentPage: 4,
    totalPages: 8,
    showFirstLast: false,
    showPrevNext: false,
    maxVisible: 3
  }
};

// Interactive example
export const Interactive = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 15;
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
      <p>Current page: {currentPage} of {totalPages}</p>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        showFirstLast={true}
        showPrevNext={true}
        maxVisible={5}
        variant="default"
        size="medium"
      />
    </div>
  );
};

// All variants
export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
      <div>
        <h4>Default</h4>
        <Pagination currentPage={3} totalPages={8} variant="default" />
      </div>
      <div>
        <h4>Bordered</h4>
        <Pagination currentPage={3} totalPages={8} variant="bordered" />
      </div>
      <div>
        <h4>Rounded</h4>
        <Pagination currentPage={3} totalPages={8} variant="rounded" />
      </div>
    </div>
  )
};

// All sizes
export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
      <div>
        <h4>Small</h4>
        <Pagination currentPage={2} totalPages={6} size="small" />
      </div>
      <div>
        <h4>Medium</h4>
        <Pagination currentPage={2} totalPages={6} size="medium" />
      </div>
      <div>
        <h4>Large</h4>
        <Pagination currentPage={2} totalPages={6} size="large" />
      </div>
    </div>
  )
};
