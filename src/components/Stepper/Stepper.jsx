import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Stepper.module.css';

// Atomic subcomponents
export const StepperStepAtom = ({ step, index, isActive, isCompleted, isClickable, onClick }) => (
  <div
    className={[
      styles.step,
      isActive ? styles.active : '',
      isCompleted ? styles.completed : '',
      isClickable ? styles.clickable : ''
    ].filter(Boolean).join(' ')}
    onClick={isClickable ? () => onClick(index) : undefined}
  >
    <div className={styles.stepNumber}>
      {isCompleted ? '✓' : index + 1}
    </div>
    <span className={styles.stepLabel}>{step.label}</span>
  </div>
);

StepperStepAtom.propTypes = {
  step: PropTypes.shape({
    label: PropTypes.string.isRequired,
    content: PropTypes.node
  }).isRequired,
  index: PropTypes.number.isRequired,
  isActive: PropTypes.bool,
  isCompleted: PropTypes.bool,
  isClickable: PropTypes.bool,
  onClick: PropTypes.func
};

export const StepperContentAtom = ({ step, isActive }) => (
  isActive && (
    <div className={styles.content}>
      {step.content}
    </div>
  )
);

StepperContentAtom.propTypes = {
  step: PropTypes.shape({
    label: PropTypes.string.isRequired,
    content: PropTypes.node
  }).isRequired,
  isActive: PropTypes.bool
};

// Main component
const Stepper = forwardRef(function Stepper({
  steps = [],
  currentStep = 0,
  onStepChange,
  disabled = false,
  className = '',
  ...props
}, ref) {
  const canNavigate = !disabled && onStepChange;

  return (
    <div ref={ref} className={[styles.stepper, className].filter(Boolean).join(' ')} {...props}>
      <div className={styles.steps}>
        {steps.map((step, index) => (
          <StepperStepAtom
            key={index}
            step={step}
            index={index}
            isActive={index === currentStep}
            isCompleted={index < currentStep}
            isClickable={canNavigate && index <= currentStep + 1}
            onClick={onStepChange}
          />
        ))}
      </div>
      {steps[currentStep] && (
        <StepperContentAtom
          step={steps[currentStep]}
          isActive={true}
        />
      )}
    </div>
  );
});

Stepper.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node
    })
  ),
  currentStep: PropTypes.number,
  onStepChange: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string
};

Stepper.displayName = 'Stepper';

export default Stepper;
