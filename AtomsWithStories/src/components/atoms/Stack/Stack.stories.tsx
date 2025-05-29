import { Meta, StoryObj } from '@storybook/react';
import Stack, { IStackProps } from './Stack';
import { Button } from '@mui/material';

const meta: Meta<IStackProps> = {
  title: 'Components/Stack',
  component: Stack,
  argTypes: {
    direction: {
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
      control: { type: 'select' },
    },
    spacing: {
      control: { type: 'number', min: 0, max: 10 },
    },
    alignItems: {
      options: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'],
      control: { type: 'select' },
    },
    justifyContent: {
      options: [
        'flex-start',
        'center',
        'flex-end',
        'space-between',
        'space-around',
        'space-evenly',
      ],
      control: { type: 'select' },
    },
  },
  args: {
    direction: 'row',
    spacing: 2,
    alignItems: 'center',
    justifyContent: 'center',
    children: [
      <Button key="1" variant="contained">
        Button 1
      </Button>,
      <Button key="2" variant="outlined">
        Button 2
      </Button>,
      <Button key="3" variant="text">
        Button 3
      </Button>,
    ],
  },
};

export default meta;

type Story = StoryObj<IStackProps>;

export const Default: Story = {};

export const Column: Story = {
  args: {
    direction: 'column',
    spacing: 3,
  },
};

export const SpaceBetween: Story = {
  args: {
    justifyContent: 'space-between',
    direction: 'row',
  },
};
