import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.module.css';
import {
  ListItem,
  ListIcon,
  ListGroup,
  ListDivider,
  ListHeader,
  ListFooter,
} from './List.atom';

/**
 * List - Flexible, accessible list component
 *
 * @param {Object} props
 * @param {'ul'|'ol'} [props.as] - Render as unordered (ul) or ordered (ol) list
 * @param {string} [props.variant] - Visual variant (plain, bordered, inset, elevated)
 * @param {string} [props.size] - Size/density (sm, md, lg)
 * @param {boolean} [props.divided] - Show dividers between items
 * @param {boolean} [props.nested] - Is this a nested list?
 * @param {string} [props.className] - Additional CSS classes
 * @param {Object} [props.style] - Inline styles
 * @param {React.ReactNode} props.children - List content
 * @param {Object} [props.rest] - Other props
 */
export function List({
  as = 'ul',
  variant = 'plain',
  size = 'md',
  divided = false,
  nested = false,
  className = '',
  style,
  children,
  ...rest
}) {
  const Component = as;
  const listClass = [
    styles.list,
    styles[`variant${variant.charAt(0).toUpperCase() + variant.slice(1)}`],
    styles[`size${size.charAt(0).toUpperCase() + size.slice(1)}`],
    divided && styles.divided,
    nested && styles.nested,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component
      className={listClass}
      style={style}
      role={as === 'ul' ? 'list' : 'list'}
      {...rest}
    >
      {children}
    </Component>
  );
}

List.propTypes = {
  as: PropTypes.oneOf(['ul', 'ol']),
  variant: PropTypes.oneOf(['plain', 'bordered', 'inset', 'elevated']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  divided: PropTypes.bool,
  nested: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
};

List.Item = ListItem;
List.Icon = ListIcon;
List.Group = ListGroup;
List.Divider = ListDivider;
List.Header = ListHeader;
List.Footer = ListFooter;

export default List;
