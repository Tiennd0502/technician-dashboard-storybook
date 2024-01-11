import type { Meta, StoryObj } from '@storybook/react';

import Table from '.';
import { DEFAULT_PRODUCT_FILTER, PRODUCTS } from '@/lib/constants';
import { generateProductHeaderColumn } from '@/lib/utils/table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    filter: DEFAULT_PRODUCT_FILTER,
    columns: generateProductHeaderColumn(),
    data: PRODUCTS,
  },
};
