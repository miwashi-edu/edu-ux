import React, { useState, useEffect, forwardRef, createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './ThemeSwitcher.module.css';

// Theme context for global theme management
const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Theme provider component
export const ThemeProvider = ({ children, defaultTheme = 'light' }) => {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = savedTheme || systemTheme;
    
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const setThemeValue = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const contextValue = {
    theme,
    toggleTheme,
    setTheme: setThemeValue
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  defaultTheme: PropTypes.oneOf(['light', 'dark', 'system'])
};

// Atomic subcomponents
export const ThemeSwitcherButtonAtom = forwardRef(({ 
  children, 
  variant = 'default',
  size = 'md',
  className = '', 
  ...props 
}, ref) => {
  const baseClass = styles.themeButton;
  const variantClass = styles[variant] || '';
  const sizeClass = styles[size] || '';
  
  return (
    <button
      ref={ref}
      className={`${baseClass} ${variantClass} ${sizeClass} ${className}`.trim()}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
});

ThemeSwitcherButtonAtom.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'icon', 'text', 'toggle']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string
};

ThemeSwitcherButtonAtom.displayName = 'ThemeSwitcherButtonAtom';

export const ThemeSwitcherIconAtom = forwardRef(({ 
  theme = 'light',
  className = '', 
  ...props 
}, ref) => {
  const iconClass = styles[`icon${theme.charAt(0).toUpperCase() + theme.slice(1)}`] || '';
  
  return (
    <span
      ref={ref}
      className={`${styles.icon} ${iconClass} ${className}`.trim()}
      aria-hidden="true"
      {...props}
    >
      {theme === 'light' ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="5"/>
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      )}
    </span>
  );
});

ThemeSwitcherIconAtom.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']),
  className: PropTypes.string
};

ThemeSwitcherIconAtom.displayName = 'ThemeSwitcherIconAtom';

export const ThemeSwitcherDropdownAtom = forwardRef(({ 
  children,
  isOpen = false,
  className = '', 
  ...props 
}, ref) => {
  if (!isOpen) return null;
  
  return (
    <div
      ref={ref}
      className={`${styles.dropdown} ${className}`.trim()}
      role="menu"
      {...props}
    >
      {children}
    </div>
  );
});

ThemeSwitcherDropdownAtom.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  className: PropTypes.string
};

ThemeSwitcherDropdownAtom.displayName = 'ThemeSwitcherDropdownAtom';

// Main component
const ThemeSwitcher = ({ 
  variant = 'default',
  size = 'md',
  showLabel = true,
  className = '',
  ...props 
}) => {
  const { theme, toggleTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleToggle = () => {
    if (variant === 'dropdown') {
      setIsOpen(!isOpen);
    } else {
      toggleTheme();
    }
  };

  const handleThemeSelect = (selectedTheme) => {
    setTheme(selectedTheme);
    setIsOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  // Prevent hydration mismatch
  if (!isMounted) {
    return (
      <div className={`${styles.themeSwitcher} ${className}`.trim()}>
        <ThemeSwitcherButtonAtom variant={variant} size={size} disabled>
          <ThemeSwitcherIconAtom theme="light" />
          {showLabel && <span>Loading...</span>}
        </ThemeSwitcherButtonAtom>
      </div>
    );
  }

  if (variant === 'dropdown') {
    return (
      <div 
        className={`${styles.themeSwitcher} ${className}`.trim()}
        onKeyDown={handleKeyDown}
        {...props}
      >
        <ThemeSwitcherButtonAtom
          variant={variant}
          size={size}
          onClick={handleToggle}
          aria-expanded={isOpen}
          aria-haspopup="true"
          aria-label="Theme switcher"
        >
          <ThemeSwitcherIconAtom theme={theme} />
          {showLabel && <span>{theme === 'light' ? 'Light' : 'Dark'}</span>}
        </ThemeSwitcherButtonAtom>
        
        <ThemeSwitcherDropdownAtom isOpen={isOpen}>
          <button
            className={`${styles.dropdownItem} ${theme === 'light' ? styles.active : ''}`}
            onClick={() => handleThemeSelect('light')}
            role="menuitem"
          >
            <ThemeSwitcherIconAtom theme="light" />
            <span>Light</span>
          </button>
          <button
            className={`${styles.dropdownItem} ${theme === 'dark' ? styles.active : ''}`}
            onClick={() => handleThemeSelect('dark')}
            role="menuitem"
          >
            <ThemeSwitcherIconAtom theme="dark" />
            <span>Dark</span>
          </button>
          <button
            className={`${styles.dropdownItem} ${theme === 'system' ? styles.active : ''}`}
            onClick={() => handleThemeSelect('system')}
            role="menuitem"
          >
            <span className={styles.iconSystem}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" x2="16" y1="21" y2="21"/>
                <line x1="12" x2="12" y1="17" y2="21"/>
              </svg>
            </span>
            <span>System</span>
          </button>
        </ThemeSwitcherDropdownAtom>
      </div>
    );
  }

  return (
    <div className={`${styles.themeSwitcher} ${className}`.trim()} {...props}>
      <ThemeSwitcherButtonAtom
        variant={variant}
        size={size}
        onClick={handleToggle}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      >
        <ThemeSwitcherIconAtom theme={theme} />
        {showLabel && variant !== 'icon' && (
          <span>{theme === 'light' ? 'Dark' : 'Light'}</span>
        )}
      </ThemeSwitcherButtonAtom>
    </div>
  );
};

ThemeSwitcher.propTypes = {
  variant: PropTypes.oneOf(['default', 'icon', 'text', 'toggle', 'dropdown']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  showLabel: PropTypes.bool,
  className: PropTypes.string
};

// Compound component pattern
ThemeSwitcher.Button = ThemeSwitcherButtonAtom;
ThemeSwitcher.Icon = ThemeSwitcherIconAtom;
ThemeSwitcher.Dropdown = ThemeSwitcherDropdownAtom;
ThemeSwitcher.Provider = ThemeProvider;

export default ThemeSwitcher;
