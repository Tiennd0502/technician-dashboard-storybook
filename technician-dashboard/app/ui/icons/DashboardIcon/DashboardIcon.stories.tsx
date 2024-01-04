import type { Meta, StoryObj } from '@storybook/react';

import DashboardIcon from '.';

const meta: Meta<typeof DashboardIcon> = {
  title: 'Components/Icons/DashboardIcon',
  component: DashboardIcon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DashboardIcon>;

export const Default: Story = {
  args: {},
};

export const Primary: Story = {
  args: {
    fillColor: '#4c52bc',
    strokeColor: '#4c52bc',
  },
};

export const Secondary: Story = {
  args: {
    fillColor: '#f8d9af',
    strokeColor: '#f8d9af',
  },
};
