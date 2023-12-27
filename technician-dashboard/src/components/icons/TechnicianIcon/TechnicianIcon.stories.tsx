import type { Meta, StoryObj } from '@storybook/react';

import TechnicianIcon from '.';

const meta: Meta<typeof TechnicianIcon> = {
  title: 'Components/Icons/TechnicianIcon',
  component: TechnicianIcon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TechnicianIcon>;

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
