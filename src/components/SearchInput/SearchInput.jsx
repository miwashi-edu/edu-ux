import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchInput.module.css';

const SearchIcon = () => (
  <span className={styles.searchIcon} aria-hidden="true">
    🔍
  </span>
);

const ClearButton = ({ onClick, visible }) => (
  visible && (
    <button
      type="button"
      className={styles.clearButton}
      onClick={onClick}
      aria-label="Clear search"
    >
      ✕
    </button>
  )
);

ClearButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  visible: PropTypes.bool
};

const SearchInput = forwardRef(function SearchInput({
  value = '',
  placeholder = 'Search...',
  disabled = false,
  label,
  error,
  onSearch,
  clearable = true,
  className = '',
  onChange,
  ...props
}, ref) {
  const [inputValue, setInputValue] = useState(value);
  const showClear = clearable && inputValue.length > 0;

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (onChange) onChange(e);
  };

  const handleClear = () => {
    setInputValue('');
    if (onChange) onChange({ target: { value: '' } });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && onSearch) {
      onSearch(inputValue);
    }
  };

  return (
    <label className={[styles.searchField, disabled ? styles.disabled : '', error ? styles.error : '', className].filter(Boolean).join(' ')}>
      {label && <span className={styles.label}>{label}</span>}
      <div className={styles.inputWrapper}>
        <SearchIcon />
        <input
          ref={ref}
          type="text"
          value={inputValue}
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={!!error}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className={styles.input}
          {...props}
        />
        <ClearButton onClick={handleClear} visible={showClear} />
      </div>
      {error && <span className={styles.errorMsg}>{error}</span>}
    </label>
  );
});

SearchInput.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.node,
  error: PropTypes.node,
  onSearch: PropTypes.func,
  clearable: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func
};

SearchInput.displayName = 'SearchInput';
SearchInput.Icon = SearchIcon;
SearchInput.ClearButton = ClearButton;

export { SearchInput };
