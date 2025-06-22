import type { Meta, StoryObj } from '@storybook/react';

import { DisabledActionButton } from './MUIButton.styled';

const meta = {
  component: DisabledActionButton,
} satisfies Meta<typeof DisabledActionButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};