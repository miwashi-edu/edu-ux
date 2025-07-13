import React from 'react';
import PropTypes from 'prop-types';
import styles from './Table.module.css';

export function TableContainer({ children, className = '', ...props }) {
  return (
    <div className={`${styles.tableContainer} ${className}`} {...props}>
      {children}
    </div>
  );
}
TableContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export function TableHead({ children, className = '', ...props }) {
  return (
    <thead className={`${styles.tableHead} ${className}`} {...props}>
      {children}
    </thead>
  );
}
TableHead.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export function TableBody({ children, className = '', ...props }) {
  return (
    <tbody className={`${styles.tableBody} ${className}`} {...props}>
      {children}
    </tbody>
  );
}
TableBody.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export function TableRow({ children, className = '', ...props }) {
  return (
    <tr className={`${styles.tableRow} ${className}`} {...props}>
      {children}
    </tr>
  );
}
TableRow.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export function TableCell({ children, className = '', ...props }) {
  return (
    <td className={`${styles.tableCell} ${className}`} {...props}>
      {children}
    </td>
  );
}
TableCell.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export function TableHeaderCell({ children, className = '', ...props }) {
  return (
    <th className={`${styles.tableHeaderCell} ${className}`} scope="col" {...props}>
      {children}
    </th>
  );
}
TableHeaderCell.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export function TableFooter({ children, className = '', ...props }) {
  return (
    <tfoot className={`${styles.tableFooter} ${className}`} {...props}>
      {children}
    </tfoot>
  );
}
TableFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export function TableCaption({ children, className = '', ...props }) {
  return (
    <caption className={`${styles.tableCaption} ${className}`} {...props}>
      {children}
    </caption>
  );
}
TableCaption.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}; 