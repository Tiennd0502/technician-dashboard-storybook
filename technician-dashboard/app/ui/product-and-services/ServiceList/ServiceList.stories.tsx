import type { Meta, StoryObj } from '@storybook/react';

import { SERVICES } from '@/lib/constants';

import ServiceList from '.';

const meta: Meta<typeof ServiceList> = {
  title: 'Components/ServiceList',
  component: ServiceList,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ServiceList>;

export const Default: Story = {
  args: { list: SERVICES },
};
