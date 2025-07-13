import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.module.css';

/**
 * ListItem - A single item in the list
 */
export function ListItem({ children, icon, className = '', ...props }) {
  return (
    <li className={`${styles.listItem} ${className}`} {...props}>
      {icon && <span className={styles.listIcon}>{icon}</span>}
      <span className={styles.listContent}>{children}</span>
    </li>
  );
}
ListItem.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.node,
  className: PropTypes.string,
};

/**
 * ListIcon - Icon for use in list items
 */
export function ListIcon({ children, className = '', ...props }) {
  return (
    <span className={`${styles.listIcon} ${className}`} {...props}>{children}</span>
  );
}
ListIcon.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

/**
 * ListGroup - Grouping for nested or sectioned lists
 */
export function ListGroup({ children, className = '', ...props }) {
  return (
    <ul className={`${styles.listGroup} ${className}`} {...props}>{children}</ul>
  );
}
ListGroup.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

/**
 * ListDivider - Visual divider between list sections
 */
export function ListDivider({ className = '', ...props }) {
  return <li className={`${styles.listDivider} ${className}`} role="separator" {...props} />;
}
ListDivider.propTypes = {
  className: PropTypes.string,
};

/**
 * ListHeader - Section header for a list
 */
export function ListHeader({ children, className = '', ...props }) {
  return (
    <li className={`${styles.listHeader} ${className}`} role="presentation" {...props}>
      <span className={styles.listHeaderText}>{children}</span>
    </li>
  );
}
ListHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

/**
 * ListFooter - Section footer for a list
 */
export function ListFooter({ children, className = '', ...props }) {
  return (
    <li className={`${styles.listFooter} ${className}`} role="presentation" {...props}>
      <span className={styles.listFooterText}>{children}</span>
    </li>
  );
}
ListFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}; 