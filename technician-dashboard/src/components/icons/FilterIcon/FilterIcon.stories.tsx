import type { Meta, StoryObj } from '@storybook/react';

import FilterIcon from '.';

const meta: Meta<typeof FilterIcon> = {
  title: 'Components/Icons/FilterIcon',
  component: FilterIcon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FilterIcon>;

export const Default: Story = {
  args: {},
};

export const Primary: Story = {
  args: {
    fillColor: '#4c52bc',
  },
};

export const Secondary: Story = {
  args: {
    fillColor: '#f8d9af',
  },
};
