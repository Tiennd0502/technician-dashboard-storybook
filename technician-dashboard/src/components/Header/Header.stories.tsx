import type { Meta, StoryObj } from '@storybook/react';

import { AVATAR_DEFAULT } from '@/constants';

import Header from '.';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    user: {
      name: 'Belle',
      avatar: AVATAR_DEFAULT,
    },
    title: 'Product & Services',
  },
};
