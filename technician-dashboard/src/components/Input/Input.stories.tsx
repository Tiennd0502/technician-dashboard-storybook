import type { Meta, StoryObj } from '@storybook/react';

import Input from '.';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Name:',
  },
};

export const Error: Story = {
  args: {
    error: 'Error message',
    label: 'Name:',
  },
};
