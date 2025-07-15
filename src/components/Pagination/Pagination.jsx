import React from 'react';
import PropTypes from 'prop-types';
import { getPaginationStyles } from './Pagination.style.js';
import './Pagination.module.css';

// Atomic subcomponents
export const PaginationItemAtom = ({ 
  children, 
  active = false,
  disabled = false,
  className = '', 
  ...props 
}) => {
  const styles = getPaginationStyles();
  const baseClass = styles.paginationItem;
  const activeClass = active ? styles.active : '';
  const disabledClass = disabled ? styles.disabled : '';
  
  return (
    <li>
      <button 
        className={`${baseClass} ${activeClass} ${disabledClass} ${className}`.trim()}
        disabled={disabled}
        type="button"
        aria-current={active ? 'page' : undefined}
        {...props}
      >
        {children}
      </button>
    </li>
  );
};

PaginationItemAtom.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string
};

// Main component
const Pagination = ({ 
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  showFirstLast = true,
  showPrevNext = true,
  maxVisible = 5,
  size = 'medium',
  variant = 'default',
  disabled = false,
  className = '',
  ...props 
}) => {
  const styles = getPaginationStyles();
  
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages && !disabled) {
      onPageChange?.(page);
    }
  };

  const getVisiblePages = () => {
    const pages = [];
    const halfVisible = Math.floor(maxVisible / 2);
    
    let start = Math.max(1, currentPage - halfVisible);
    let end = Math.min(totalPages, start + maxVisible - 1);
    
    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }
    
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    
    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <nav 
      className={`${styles.pagination} ${styles[size]} ${styles[variant]} ${className}`.trim()}
      aria-label="Pagination"
      {...props}
    >
      <ul className={styles.paginationList}>
        {showFirstLast && (
          <PaginationItemAtom
            disabled={disabled || currentPage === 1}
            onClick={() => handlePageChange(1)}
            aria-label="Go to first page"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 17L13 12L18 7M6 17L11 12L6 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </PaginationItemAtom>
        )}
        
        {showPrevNext && (
          <PaginationItemAtom
            disabled={disabled || currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            aria-label="Go to previous page"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </PaginationItemAtom>
        )}
        
        {visiblePages.map((page) => (
          <PaginationItemAtom
            key={page}
            active={page === currentPage}
            disabled={disabled}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </PaginationItemAtom>
        ))}
        
        {showPrevNext && (
          <PaginationItemAtom
            disabled={disabled || currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            aria-label="Go to next page"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </PaginationItemAtom>
        )}
        
        {showFirstLast && (
          <PaginationItemAtom
            disabled={disabled || currentPage === totalPages}
            onClick={() => handlePageChange(totalPages)}
            aria-label="Go to last page"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 17L11 12L6 7M18 17L13 12L18 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </PaginationItemAtom>
        )}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  onPageChange: PropTypes.func,
  showFirstLast: PropTypes.bool,
  showPrevNext: PropTypes.bool,
  maxVisible: PropTypes.number,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['default', 'bordered', 'rounded']),
  disabled: PropTypes.bool,
  className: PropTypes.string
};

export default Pagination;
