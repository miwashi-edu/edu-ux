import React, { useState, useEffect } from 'react';
import styles from './Alert.module.css';
import { AlertIcon } from './AlertIcon.atom';
import { AlertClose } from './AlertClose.atom';

function Alert({ 
  children, 
  className = '', 
  type = 'info',
  variant = 'default',
  dismissible = false,
  autoDismiss = false,
  dismissTimeout = 5000,
  onDismiss,
  show = true,
  ...props 
}) {
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    setIsVisible(show);
  }, [show]);

  useEffect(() => {
    if (autoDismiss && isVisible) {
      const timer = setTimeout(() => {
        handleDismiss();
      }, dismissTimeout);

      return () => clearTimeout(timer);
    }
  }, [autoDismiss, dismissTimeout, isVisible]);

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div 
      className={`${styles.alert} ${styles[type]} ${styles[variant]} ${className}`}
      role="alert"
      aria-live="polite"
      {...props}
    >
      <div className={styles.alertContent}>
        <AlertIcon type={type} className={styles.alertIcon} />
        <div className={styles.alertMessage}>
          {children}
        </div>
        {dismissible && (
          <AlertClose 
            onClose={handleDismiss}
            className={styles.alertClose}
          />
        )}
      </div>
    </div>
  );
}

// Export subcomponents for direct use
Alert.Icon = AlertIcon;
Alert.Close = AlertClose;

export default Alert;
