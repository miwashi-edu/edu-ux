import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Backdrop from '../Backdrop';
import styles from './Modal.module.css';
import { getModalStyles } from './Modal.style';

/**
 * Modal component for focused dialog interactions
 * Provides accessibility features, focus management, and smooth animations
 */
const Modal = ({
  isOpen = false,
  onClose,
  children,
  title,
  size = 'medium',
  variant = 'default',
  closeOnBackdropClick = false,
  closeOnEscape = true,
  showCloseButton = true,
  className = '',
  style = {},
  ...props
}) => {
  const modalRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isOpen && closeOnEscape && onClose) {
        onClose(event);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, closeOnEscape, onClose]);

  // Focus management
  useEffect(() => {
    if (isOpen && modalRef.current) {
      // Focus the modal when it opens
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements.length > 0) {
        focusableElements[0].focus();
      } else {
        modalRef.current.focus();
      }
    }
  }, [isOpen]);

  // Animation handling
  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    }
  }, [isOpen]);

  const handleBackdropClick = (event) => {
    if (closeOnBackdropClick && onClose) {
      onClose(event);
    }
  };

  const handleModalClick = (event) => {
    // Prevent clicks inside modal from closing it
    event.stopPropagation();
  };

  const handleClose = (event) => {
    if (onClose) {
      onClose(event);
    }
  };

  const modalStyles = getModalStyles({ size, variant });
  const combinedClassName = `${styles.modal} ${modalStyles.modal} ${className}`.trim();

  if (!isOpen) return null;

  return (
    <Backdrop
      isOpen={isOpen}
      onClick={handleBackdropClick}
      variant="dark"
      animated={true}
    >
      <div
        ref={modalRef}
        className={combinedClassName}
        style={{ ...modalStyles.style, ...style }}
        onClick={handleModalClick}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
        tabIndex={-1}
        {...props}
      >
        {/* Header */}
        {(title || showCloseButton) && (
          <div className={styles.modalHeader}>
            {title && (
              <h2 id="modal-title" className={styles.modalTitle}>
                {title}
              </h2>
            )}
            {showCloseButton && (
              <button
                type="button"
                className={styles.closeButton}
                onClick={handleClose}
                aria-label="Close modal"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            )}
          </div>
        )}

        {/* Content */}
        <div className={styles.modalContent}>
          {children}
        </div>
      </div>
    </Backdrop>
  );
};

Modal.propTypes = {
  /** Whether the modal is visible */
  isOpen: PropTypes.bool,
  /** Callback fired when modal should close */
  onClose: PropTypes.func,
  /** Modal content */
  children: PropTypes.node,
  /** Modal title */
  title: PropTypes.string,
  /** Size of the modal */
  size: PropTypes.oneOf(['small', 'medium', 'large', 'full']),
  /** Visual variant of the modal */
  variant: PropTypes.oneOf(['default', 'centered', 'fullscreen']),
  /** Whether clicking backdrop closes the modal */
  closeOnBackdropClick: PropTypes.bool,
  /** Whether pressing escape closes the modal */
  closeOnEscape: PropTypes.bool,
  /** Whether to show the close button */
  showCloseButton: PropTypes.bool,
  /** Additional CSS class name */
  className: PropTypes.string,
  /** Additional inline styles */
  style: PropTypes.object,
};

export default Modal;
