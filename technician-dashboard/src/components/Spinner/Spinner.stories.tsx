import type { Meta, StoryObj } from '@storybook/react';

import { MENU_ITEM_LIST } from '@/constants';

import Spinner from '.';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {},
};

export const Large: Story = {
  args: { size: 'lg' },
};
