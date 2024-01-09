import type { Meta, StoryObj } from '@storybook/react';

import { MENU_ITEM_LIST } from '@/lib/constants';

import MiniSidebar from '.';

const meta: Meta<typeof MiniSidebar> = {
  title: 'Components/MiniSidebar',
  component: MiniSidebar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MiniSidebar>;

export const Default: Story = {
  args: { listItem: MENU_ITEM_LIST },
};
