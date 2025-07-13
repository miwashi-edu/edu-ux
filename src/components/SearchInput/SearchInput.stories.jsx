import React, { useState } from 'react';
import { SearchInput } from './SearchInput';

export default {
  title: 'Interactive Elements/SearchInput',
  component: SearchInput,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    value: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    error: { control: 'text' },
    clearable: { control: 'boolean' },
  },
};

export const Basic = (args) => <SearchInput {...args} />;
Basic.args = { label: 'Search', placeholder: 'Search...' };

export const Disabled = (args) => <SearchInput {...args} disabled={true} label="Disabled" placeholder="Can't search" />;

export const Error = (args) => <SearchInput {...args} error="Search is required" label="With Error" placeholder="Error" />;

export const NotClearable = (args) => <SearchInput {...args} clearable={false} label="No Clear" placeholder="Type here" />;

export const WithSearch = () => {
  const [searchResults, setSearchResults] = useState([]);
  
  const handleSearch = (query) => {
    console.log('Searching for:', query);
    setSearchResults([`Result for: ${query}`]);
  };

  return (
    <div>
      <SearchInput
        label="Search"
        placeholder="Type and press Enter"
        onSearch={handleSearch}
      />
      {searchResults.length > 0 && (
        <div style={{ marginTop: '1em' }}>
          {searchResults.map((result, i) => (
            <div key={i}>{result}</div>
          ))}
        </div>
      )}
    </div>
  );
};
