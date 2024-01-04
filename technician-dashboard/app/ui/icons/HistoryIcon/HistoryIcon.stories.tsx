import type { Meta, StoryObj } from '@storybook/react';

import HistoryIcon from '.';

const meta: Meta<typeof HistoryIcon> = {
  title: 'Components/Icons/HistoryIcon',
  component: HistoryIcon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HistoryIcon>;

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
