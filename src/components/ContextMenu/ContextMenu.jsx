import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getContextMenuStyles } from './ContextMenu.style.js';
import './ContextMenu.module.css';

// Atomic subcomponent: ContextMenuItem
export const ContextMenuItemAtom = ({
  children,
  onClick,
  disabled = false,
  className = '',
  ...props
}) => {
  const styles = getContextMenuStyles();
  return (
    <li
      className={[
        styles.menuItem,
        disabled ? styles.disabled : '',
        className
      ].filter(Boolean).join(' ')}
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
      onClick={disabled ? undefined : onClick}
      role="menuitem"
      {...props}
    >
      {children}
    </li>
  );
};

ContextMenuItemAtom.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string
};

// Main component
const ContextMenu = ({
  open,
  anchorPoint = { x: 0, y: 0 },
  onClose,
  children,
  className = '',
  style = {},
  ...props
}) => {
  const styles = getContextMenuStyles();
  const menuRef = useRef(null);
  const [focusIndex, setFocusIndex] = useState(-1);

  // Close on click outside
  useEffect(() => {
    if (!open) return;
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose?.();
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open, onClose]);

  // Keyboard navigation
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e) => {
      const items = menuRef.current?.querySelectorAll('[role="menuitem"]:not([aria-disabled="true"])');
      if (!items || items.length === 0) return;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setFocusIndex((prev) => (prev + 1) % items.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setFocusIndex((prev) => (prev - 1 + items.length) % items.length);
      } else if (e.key === 'Escape') {
        onClose?.();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  // Focus management
  useEffect(() => {
    if (!open) return;
    const items = menuRef.current?.querySelectorAll('[role="menuitem"]:not([aria-disabled="true"])');
    if (items && items.length > 0 && focusIndex >= 0) {
      items[focusIndex]?.focus();
    }
  }, [focusIndex, open]);

  if (!open) return null;

  return (
    <ul
      ref={menuRef}
      className={[styles.menu, className].filter(Boolean).join(' ')}
      style={{ top: anchorPoint.y, left: anchorPoint.x, ...style, position: 'absolute' }}
      role="menu"
      tabIndex={-1}
      {...props}
    >
      {children}
    </ul>
  );
};

ContextMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  anchorPoint: PropTypes.shape({ x: PropTypes.number, y: PropTypes.number }),
  onClose: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

export default ContextMenu;
