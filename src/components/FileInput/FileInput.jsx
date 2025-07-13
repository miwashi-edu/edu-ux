import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styles from './FileInput.module.css';

const FileInput = forwardRef(function FileInput({
  value,
  placeholder = 'Choose file...',
  disabled = false,
  label,
  error,
  accept,
  multiple = false,
  className = '',
  onChange,
  ...props
}, ref) {
  const files = value && value.length ? Array.from(value) : [];
  return (
    <label className={[styles.fileField, disabled ? styles.disabled : '', error ? styles.error : '', className].filter(Boolean).join(' ')}>
      {label && <span className={styles.label}>{label}</span>}
      <input
        ref={ref}
        type="file"
        disabled={disabled}
        accept={accept}
        multiple={multiple}
        aria-invalid={!!error}
        onChange={onChange}
        className={styles.input}
        {...props}
      />
      <span className={styles.fileDisplay}>
        {files.length > 0
          ? files.map(f => f.name).join(', ')
          : placeholder}
      </span>
      {error && <span className={styles.errorMsg}>{error}</span>}
    </label>
  );
});

FileInput.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.instanceOf(FileList),
    PropTypes.arrayOf(PropTypes.instanceOf(File))
  ]),
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.node,
  error: PropTypes.node,
  accept: PropTypes.string,
  multiple: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func
};

FileInput.displayName = 'FileInput';

export { FileInput };
