import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import styles from './TreeView.module.css';
import {
  TreeViewItem,
  TreeViewContent,
  TreeViewIcon,
  TreeViewLabel,
  TreeViewToggle,
  TreeViewChildren
} from './TreeView.atom';

/**
 * TreeView - Main tree view component for hierarchical data display
 * 
 * @param {Object} props - Component props
 * @param {Array} props.data - Tree data array
 * @param {string} props.variant - Visual variant (default, compact, large)
 * @param {string} props.size - Size variant (sm, md, lg)
 * @param {boolean} props.selectable - Whether items can be selected
 * @param {boolean} props.multiSelect - Allow multiple selections
 * @param {Array} props.selectedItems - Array of selected item IDs
 * @param {Array} props.expandedItems - Array of expanded item IDs
 * @param {Function} props.onSelectionChange - Selection change handler
 * @param {Function} props.onExpansionChange - Expansion change handler
 * @param {Function} props.renderItem - Custom item renderer
 * @param {boolean} props.loading - Whether to show loading state
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.style - Inline styles
 * @param {Object} props... - Additional props passed to the container
 */
export function TreeView({
  data = [],
  variant = 'default',
  size = 'md',
  selectable = false,
  multiSelect = false,
  selectedItems = [],
  expandedItems = [],
  onSelectionChange,
  onExpansionChange,
  renderItem,
  loading = false,
  className = '',
  style,
  ...props
}) {
  const [internalSelected, setInternalSelected] = useState(selectedItems);
  const [internalExpanded, setInternalExpanded] = useState(expandedItems);

  // Use controlled or uncontrolled state
  const currentSelected = selectedItems.length > 0 ? selectedItems : internalSelected;
  const currentExpanded = expandedItems.length > 0 ? expandedItems : internalExpanded;

  const handleSelectionChange = useCallback((itemId) => {
    let newSelection;
    
    if (multiSelect) {
      if (currentSelected.includes(itemId)) {
        newSelection = currentSelected.filter(id => id !== itemId);
      } else {
        newSelection = [...currentSelected, itemId];
      }
    } else {
      newSelection = currentSelected.includes(itemId) ? [] : [itemId];
    }

    if (onSelectionChange) {
      onSelectionChange(newSelection);
    } else {
      setInternalSelected(newSelection);
    }
  }, [currentSelected, multiSelect, onSelectionChange]);

  const handleExpansionChange = useCallback((itemId, expanded) => {
    let newExpanded;
    
    if (expanded) {
      newExpanded = [...currentExpanded, itemId];
    } else {
      newExpanded = currentExpanded.filter(id => id !== itemId);
    }

    if (onExpansionChange) {
      onExpansionChange(newExpanded);
    } else {
      setInternalExpanded(newExpanded);
    }
  }, [currentExpanded, onExpansionChange]);

  const renderTreeItem = useCallback((item, level = 0) => {
    const isExpanded = currentExpanded.includes(item.id);
    const isSelected = currentSelected.includes(item.id);
    const hasChildren = item.children && item.children.length > 0;

    if (renderItem) {
      return renderItem(item, level, isExpanded, isSelected, hasChildren);
    }

    return (
      <TreeViewItem
        key={item.id}
        level={level}
        expanded={isExpanded}
        selected={isSelected}
        disabled={item.disabled}
        onClick={() => !item.disabled && handleSelectionChange(item.id)}
      >
        <TreeViewContent
          hasChildren={hasChildren}
          expanded={isExpanded}
          onToggle={(expanded) => handleExpansionChange(item.id, expanded)}
        >
          {item.icon && (
            <TreeViewIcon 
              icon={item.icon} 
              variant={item.iconVariant || 'default'}
              size={size}
            />
          )}
          <TreeViewLabel variant={item.labelVariant || 'default'}>
            {item.label}
          </TreeViewLabel>
        </TreeViewContent>
        
        {hasChildren && (
          <TreeViewChildren expanded={isExpanded}>
            {item.children.map(child => renderTreeItem(child, level + 1))}
          </TreeViewChildren>
        )}
      </TreeViewItem>
    );
  }, [currentExpanded, currentSelected, handleSelectionChange, handleExpansionChange, renderItem, size]);

  const treeClasses = [
    styles.treeView,
    styles[`variant${variant.charAt(0).toUpperCase() + variant.slice(1)}`],
    styles[`size${size.charAt(0).toUpperCase() + size.slice(1)}`],
    selectable && styles.selectable,
    loading && styles.loading,
    className
  ].filter(Boolean).join(' ');

  const treeContent = useMemo(() => {
    if (loading) {
      return (
        <div className={styles.loadingState}>
          <div className={styles.loadingItem}>Loading...</div>
        </div>
      );
    }

    return data.map(item => renderTreeItem(item));
  }, [data, renderTreeItem, loading]);

  return (
    <div
      className={treeClasses}
      style={style}
      role="tree"
      aria-label="Tree view"
      {...props}
    >
      {treeContent}
    </div>
  );
}

TreeView.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.oneOfType([PropTypes.elementType, PropTypes.string]),
    iconVariant: PropTypes.oneOf(['default', 'folder', 'file', 'custom']),
    labelVariant: PropTypes.oneOf(['default', 'folder', 'file', 'custom']),
    children: PropTypes.array,
    disabled: PropTypes.bool,
  })),
  variant: PropTypes.oneOf(['default', 'compact', 'large']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  selectable: PropTypes.bool,
  multiSelect: PropTypes.bool,
  selectedItems: PropTypes.arrayOf(PropTypes.string),
  expandedItems: PropTypes.arrayOf(PropTypes.string),
  onSelectionChange: PropTypes.func,
  onExpansionChange: PropTypes.func,
  renderItem: PropTypes.func,
  loading: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
};

// Attach atomic subcomponents
TreeView.Item = TreeViewItem;
TreeView.Content = TreeViewContent;
TreeView.Icon = TreeViewIcon;
TreeView.Label = TreeViewLabel;
TreeView.Toggle = TreeViewToggle;
TreeView.Children = TreeViewChildren;

export default TreeView;
