import { Meta, StoryObj } from '@storybook/react';
import Stepper, { IStepperProps } from './Stepper';

const meta: Meta<IStepperProps> = {
  title: 'Components/Stepper',
  component: Stepper,
  argTypes: {
    steps: { control: 'object' },
    activeStep: { control: { type: 'number', min: 0 } },
    alternativeLabel: { control: 'boolean' },
  },
  args: {
    steps: ['Step One', 'Step Two', 'Step Three'],
    activeStep: 1,
    alternativeLabel: true,
  },
};

export default meta;

type Story = StoryObj<IStepperProps>;

export const Default: Story = {};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    alternativeLabel: false,
  },
};

export const CustomActiveStep: Story = {
  args: {
    activeStep: 2,
  },
};
