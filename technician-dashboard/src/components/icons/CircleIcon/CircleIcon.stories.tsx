import type { Meta, StoryObj } from '@storybook/react';

import CircleIcon from '.';

const meta: Meta<typeof CircleIcon> = {
  title: 'Components/Icons/CircleIcon',
  component: CircleIcon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CircleIcon>;

export const Error: Story = {
  args: {
    color: '#f45744',
  },
};

export const Success: Story = {
  args: {
    color: '#b4e55c',
  },
};
