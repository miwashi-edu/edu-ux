import React from 'react';
import PropTypes from 'prop-types';
import styles from './TreeView.module.css';

/**
 * TreeViewItem - Individual tree item component
 */
export function TreeViewItem({ 
  children, 
  level = 0,
  expanded = false,
  selected = false,
  disabled = false,
  className = '',
  ...props 
}) {
  return (
    <div 
      className={`${styles.treeViewItem} ${styles[`level${level}`]} ${expanded ? styles.expanded : ''} ${selected ? styles.selected : ''} ${disabled ? styles.disabled : ''} ${className}`}
      role="treeitem"
      aria-expanded={expanded}
      aria-selected={selected}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </div>
  );
}

TreeViewItem.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.number,
  expanded: PropTypes.bool,
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

/**
 * TreeViewContent - Content wrapper for tree item
 */
export function TreeViewContent({ 
  children, 
  hasChildren = false,
  expanded = false,
  onToggle,
  className = '',
  ...props 
}) {
  return (
    <div 
      className={`${styles.treeViewContent} ${hasChildren ? styles.hasChildren : ''} ${expanded ? styles.expanded : ''} ${className}`}
      {...props}
    >
      {hasChildren && (
        <TreeViewToggle 
          expanded={expanded} 
          onToggle={onToggle}
          className={styles.toggle}
        />
      )}
      {children}
    </div>
  );
}

TreeViewContent.propTypes = {
  children: PropTypes.node.isRequired,
  hasChildren: PropTypes.bool,
  expanded: PropTypes.bool,
  onToggle: PropTypes.func,
  className: PropTypes.string,
};

/**
 * TreeViewIcon - Icon component for tree items
 */
export function TreeViewIcon({ 
  icon: Icon, 
  variant = 'default',
  size = 'sm',
  className = '',
  ...props 
}) {
  return (
    <div 
      className={`${styles.treeViewIcon} ${styles[`icon${variant.charAt(0).toUpperCase() + variant.slice(1)}`]} ${styles[`iconSize${size.charAt(0).toUpperCase() + size.slice(1)}`]} ${className}`}
      {...props}
    >
      {typeof Icon === 'string' ? (
        <span className={styles.iconText}>{Icon}</span>
      ) : (
        <Icon />
      )}
    </div>
  );
}

TreeViewIcon.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.elementType, PropTypes.string]).isRequired,
  variant: PropTypes.oneOf(['default', 'folder', 'file', 'custom']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
};

/**
 * TreeViewLabel - Label component for tree items
 */
export function TreeViewLabel({ 
  children, 
  variant = 'default',
  className = '',
  ...props 
}) {
  return (
    <span 
      className={`${styles.treeViewLabel} ${styles[`label${variant.charAt(0).toUpperCase() + variant.slice(1)}`]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}

TreeViewLabel.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'folder', 'file', 'custom']),
  className: PropTypes.string,
};

/**
 * TreeViewToggle - Toggle button for expand/collapse
 */
export function TreeViewToggle({ 
  expanded = false, 
  onToggle,
  disabled = false,
  className = '',
  ...props 
}) {
  const handleClick = (e) => {
    e.stopPropagation();
    if (onToggle && !disabled) {
      onToggle(!expanded);
    }
  };

  return (
    <button
      type="button"
      className={`${styles.treeViewToggle} ${expanded ? styles.expanded : ''} ${disabled ? styles.disabled : ''} ${className}`}
      onClick={handleClick}
      disabled={disabled}
      aria-label={expanded ? 'Collapse' : 'Expand'}
      {...props}
    >
      <span className={styles.toggleIcon}>
        {expanded ? '▼' : '▶'}
      </span>
    </button>
  );
}

TreeViewToggle.propTypes = {
  expanded: PropTypes.bool,
  onToggle: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

/**
 * TreeViewChildren - Container for child items
 */
export function TreeViewChildren({ 
  children, 
  expanded = false,
  className = '',
  ...props 
}) {
  return (
    <div 
      className={`${styles.treeViewChildren} ${expanded ? styles.expanded : ''} ${className}`}
      role="group"
      {...props}
    >
      {children}
    </div>
  );
}

TreeViewChildren.propTypes = {
  children: PropTypes.node.isRequired,
  expanded: PropTypes.bool,
  className: PropTypes.string,
}; 