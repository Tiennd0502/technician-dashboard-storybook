import type { Meta, StoryObj } from '@storybook/react';

import ReportIcon from '.';

const meta: Meta<typeof ReportIcon> = {
  title: 'Components/Icons/ReportIcon',
  component: ReportIcon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ReportIcon>;

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
