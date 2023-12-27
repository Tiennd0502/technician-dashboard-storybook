import type { Meta, StoryObj } from '@storybook/react';

import { MENU_ITEM_LIST } from '@/constants';

import Sidebar from '.';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  args: { listItem: MENU_ITEM_LIST },
};
