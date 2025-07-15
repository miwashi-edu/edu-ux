import React, { useState, useRef, useEffect, forwardRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Scrollspy.module.css';

// Atomic subcomponents
export const ScrollspyNavAtom = forwardRef(({ 
  children, 
  className = '', 
  ...props 
}, ref) => {
  return (
    <nav 
      ref={ref}
      className={`${styles.nav} ${className}`.trim()}
      role="navigation"
      {...props}
    >
      {children}
    </nav>
  );
});

ScrollspyNavAtom.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

ScrollspyNavAtom.displayName = 'ScrollspyNavAtom';

export const ScrollspyItemAtom = forwardRef(({ 
  children, 
  href,
  active = false,
  className = '', 
  ...props 
}, ref) => {
  const Tag = href ? 'a' : 'div';
  
  return (
    <Tag
      ref={ref}
      href={href}
      className={`${styles.item} ${active ? styles.active : ''} ${className}`.trim()}
      aria-current={active ? 'page' : undefined}
      {...props}
    >
      {children}
    </Tag>
  );
});

ScrollspyItemAtom.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  active: PropTypes.bool,
  className: PropTypes.string
};

ScrollspyItemAtom.displayName = 'ScrollspyItemAtom';

// Main component
const Scrollspy = ({ 
  children,
  items = [],
  target = 'body',
  offset = 0,
  threshold = 0.5,
  smooth = true,
  className = '',
  fixed = false,
  onItemChange,
  ...props 
}) => {
  const [activeItem, setActiveItem] = useState('');
  const [itemRefs, setItemRefs] = useState({});
  const navRef = useRef(null);

  // Create refs for each item
  useEffect(() => {
    const refs = {};
    items.forEach(item => {
      refs[item.id] = React.createRef();
    });
    setItemRefs(refs);
  }, [items]);

  // Intersection Observer for scrollspy
  useEffect(() => {
    if (!items.length) return;

    const observerOptions = {
      root: null,
      rootMargin: `-${offset}px 0px -${100 - threshold * 100}% 0px`,
      threshold: [0, threshold, 1]
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveItem(id);
          onItemChange?.(id);
        }
      });
    }, observerOptions);

    // Observe all target elements
    items.forEach(item => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [items, offset, threshold, onItemChange]);

  const handleItemClick = (item) => {
    const element = document.getElementById(item.id);
    if (element) {
      const targetPosition = element.offsetTop - offset;
      
      if (smooth) {
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      } else {
        window.scrollTo(0, targetPosition);
      }
    }
  };

  return (
    <ScrollspyNavAtom
      ref={navRef}
      className={`${styles.scrollspy} ${fixed ? styles.fixed : ''} ${className}`.trim()}
      {...props}
    >
      {items.map((item) => (
        <ScrollspyItemAtom
          key={item.id}
          href={`#${item.id}`}
          active={activeItem === item.id}
          onClick={() => handleItemClick(item)}
        >
          {item.label}
        </ScrollspyItemAtom>
      ))}
      {children}
    </ScrollspyNavAtom>
  );
};

Scrollspy.propTypes = {
  children: PropTypes.node,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  })).isRequired,
  target: PropTypes.string,
  offset: PropTypes.number,
  threshold: PropTypes.number,
  smooth: PropTypes.bool,
  className: PropTypes.string,
  fixed: PropTypes.bool,
  onItemChange: PropTypes.func
};

// Compound component pattern
Scrollspy.Nav = ScrollspyNavAtom;
Scrollspy.Item = ScrollspyItemAtom;

export default Scrollspy;
