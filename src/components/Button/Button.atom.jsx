import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const ButtonIcon = ({ icon, position }) => (
  <span className={styles[`icon${position === 'right' ? 'Right' : 'Left'}`]}>{icon}</span>
);

ButtonIcon.propTypes = {
  icon: PropTypes.node.isRequired,
  position: PropTypes.oneOf(['left', 'right'])
};

export default ButtonIcon; 