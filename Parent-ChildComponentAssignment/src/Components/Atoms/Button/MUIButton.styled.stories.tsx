import { Meta, StoryFn } from '@storybook/react';
import { ActionButton } from './MUIButton.styled';

const meta: Meta<typeof ActionButton> = {
  title: 'Components/DisabledActionButton',
  component: ActionButton,
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;

const Template: StoryFn<typeof ActionButton> = (args) => (
  <ActionButton {...args}>Click Me</ActionButton>
);

export const Enabled = Template.bind({});
Enabled.args = {
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
