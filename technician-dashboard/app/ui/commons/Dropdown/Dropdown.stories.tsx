import type { Meta, StoryObj } from '@storybook/react';

import { AVATAR_DEFAULT } from '@/lib/constants';

import Dropdown from '.';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    name: 'Belle',
    avatar: AVATAR_DEFAULT,
  },
};
