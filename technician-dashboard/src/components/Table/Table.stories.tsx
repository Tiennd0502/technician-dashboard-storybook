import type { Meta, StoryObj } from '@storybook/react';

import Table from '.';
import { PRODUCTS, PRODUCT_HEADER_COLUMNS } from '@/__mocks__';
import { DEFAULT_PRODUCT_FILTER } from '@/constants';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    title: 'Products listing',
    filter: DEFAULT_PRODUCT_FILTER,
    columns: PRODUCT_HEADER_COLUMNS,
    data: PRODUCTS,
  },
};
