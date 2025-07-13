import React from 'react';
import PropTypes from 'prop-types';
import styles from './Table.module.css';
import {
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableHeaderCell,
  TableFooter,
  TableCaption
} from './Table.atom';

/**
 * Table - Main table component for displaying tabular data
 * Supports variants, sizes, responsive container, and accessibility
 */
export function Table({
  children,
  variant = 'default',
  size = 'md',
  responsive = true,
  className = '',
  style,
  caption,
  footer,
  ...props
}) {
  const tableClass = [
    styles.table,
    styles[`variant${variant.charAt(0).toUpperCase() + variant.slice(1)}`],
    styles[`size${size.charAt(0).toUpperCase() + size.slice(1)}`],
    className
  ].filter(Boolean).join(' ');

  const tableElement = (
    <table className={tableClass} style={style} {...props}>
      {caption && <TableCaption>{caption}</TableCaption>}
      {children}
      {footer && <TableFooter>{footer}</TableFooter>}
    </table>
  );

  return responsive ? (
    <TableContainer>{tableElement}</TableContainer>
  ) : (
    tableElement
  );
}

Table.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'striped', 'bordered', 'hover', 'compact']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  responsive: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  caption: PropTypes.node,
  footer: PropTypes.node,
};

Table.Container = TableContainer;
Table.Head = TableHead;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Cell = TableCell;
Table.HeaderCell = TableHeaderCell;
Table.Footer = TableFooter;
Table.Caption = TableCaption;

export default Table;
