import type { Meta, StoryObj } from '@storybook/react';

import { CATEGORIES } from '@/__mocks__';

import Categories from '.';

const meta: Meta<typeof Categories> = {
  title: 'Components/Categories',
  component: Categories,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Categories>;

export const Default: Story = {
  args: {
    list: CATEGORIES,
  },
};
