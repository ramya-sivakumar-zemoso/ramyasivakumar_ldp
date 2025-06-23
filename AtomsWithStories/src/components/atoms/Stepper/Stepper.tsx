import {
  Stepper as MUIStepper,
  StepperProps,
  Step,
  StepLabel,
} from '@mui/material';

interface IStepperProps extends StepperProps {
  steps: string[];
}

const Stepper = ({ steps, ...rest }: IStepperProps) => {
  return (
    <MUIStepper activeStep={1} alternativeLabel {...rest}>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </MUIStepper>
  );
};

export default Stepper;
export type { IStepperProps };
