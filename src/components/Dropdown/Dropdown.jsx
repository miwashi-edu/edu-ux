import React, { forwardRef, useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Dropdown.module.css';

const DropdownTrigger = ({ children, isOpen, disabled, onClick }) => (
  <button
    type="button"
    className={[styles.trigger, isOpen ? styles.open : '', disabled ? styles.disabled : ''].filter(Boolean).join(' ')}
    onClick={onClick}
    disabled={disabled}
    aria-expanded={isOpen}
    aria-haspopup="listbox"
  >
    {children}
    <span className={styles.arrow}>▼</span>
  </button>
);

DropdownTrigger.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

const DropdownOption = ({ option, isSelected, onSelect }) => (
  <li
    className={[styles.option, isSelected ? styles.selected : ''].filter(Boolean).join(' ')}
    onClick={() => onSelect(option)}
    role="option"
    aria-selected={isSelected}
  >
    {option.label}
  </li>
);

DropdownOption.propTypes = {
  option: PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  }).isRequired,
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func.isRequired
};

const Dropdown = forwardRef(function Dropdown({
  options = [],
  value,
  placeholder = 'Select an option...',
  disabled = false,
  label,
  error,
  className = '',
  onChange,
  ...props
}, ref) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const selectedOption = options.find(option => option.value === value);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleTriggerClick = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleOptionSelect = (option) => {
    if (onChange) {
      onChange(option.value);
    }
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className={[styles.dropdown, error ? styles.error : '', className].filter(Boolean).join(' ')}>
      {label && <span className={styles.label}>{label}</span>}
      <DropdownTrigger
        isOpen={isOpen}
        disabled={disabled}
        onClick={handleTriggerClick}
      >
        {selectedOption ? selectedOption.label : placeholder}
      </DropdownTrigger>
      {isOpen && (
        <ul className={styles.options} role="listbox">
          {options.map((option) => (
            <DropdownOption
              key={option.value}
              option={option}
              isSelected={option.value === value}
              onSelect={handleOptionSelect}
            />
          ))}
        </ul>
      )}
      {error && <span className={styles.errorMsg}>{error}</span>}
    </div>
  );
});

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ),
  value: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.node,
  error: PropTypes.node,
  className: PropTypes.string,
  onChange: PropTypes.func
};

Dropdown.displayName = 'Dropdown';
Dropdown.Trigger = DropdownTrigger;
Dropdown.Option = DropdownOption;

export { Dropdown };
