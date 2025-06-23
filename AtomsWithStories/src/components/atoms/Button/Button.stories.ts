import { Meta, StoryObj } from '@storybook/react';
import Button, { IButtonProps } from './Button';

const meta: Meta<IButtonProps> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['text', 'outlined', 'contained'],
      control: { type: 'select' },
    },
    color: {
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning'],
      control: { type: 'select' },
    },
    disabled: {
      control: 'boolean',
    },
    onClick: { action: 'clicked' },
  },
  args: {
    children: 'Click Me',
    variant: 'contained',
    color: 'primary',
  },
};

export default meta;

type Story = StoryObj<IButtonProps>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'contained',
    color: 'primary',
  },
};

export const Outlined: Story = {
  args: {
    children: 'Outlined Button',
    variant: 'outlined',
    color: 'secondary',
  },
};

export const Text: Story = {
  args: {
    children: 'Text Button',
    variant: 'text',
    color: 'info',
  },
};

export const Enabled: Story = {
  args: {
    children: 'Enabled Button',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
    color: 'secondary',
  },
};
