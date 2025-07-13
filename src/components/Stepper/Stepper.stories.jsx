import React, { useState } from 'react';
import Stepper from './Stepper.jsx';

const sampleSteps = [
  {
    label: 'Step 1',
    content: <div>This is the content for step 1</div>
  },
  {
    label: 'Step 2',
    content: <div>This is the content for step 2</div>
  },
  {
    label: 'Step 3',
    content: <div>This is the content for step 3</div>
  },
  {
    label: 'Complete',
    content: <div>All steps completed!</div>
  }
];

export default {
  title: 'Interactive Elements/Stepper',
  component: Stepper,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    currentStep: { control: 'number' },
    disabled: { control: 'boolean' },
  },
};

export const Basic = (args) => <Stepper {...args} steps={sampleSteps} />;
Basic.args = { currentStep: 0 };

export const SecondStep = (args) => <Stepper {...args} steps={sampleSteps} currentStep={1} />;

export const Completed = (args) => <Stepper {...args} steps={sampleSteps} currentStep={3} />;

export const Disabled = (args) => <Stepper {...args} steps={sampleSteps} disabled={true} currentStep={1} />;

export const Interactive = () => {
  const [currentStep, setCurrentStep] = useState(0);
  return (
    <div>
      <Stepper
        steps={sampleSteps}
        currentStep={currentStep}
        onStepChange={setCurrentStep}
      />
      <div style={{ marginTop: '1em', textAlign: 'center' }}>
        <button onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}>
          Previous
        </button>
        <button onClick={() => setCurrentStep(Math.min(sampleSteps.length - 1, currentStep + 1))}>
          Next
        </button>
      </div>
    </div>
  );
};
