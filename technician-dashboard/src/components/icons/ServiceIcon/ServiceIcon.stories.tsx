import type { Meta, StoryObj } from '@storybook/react';

import ServiceIcon from '.';

const meta: Meta<typeof ServiceIcon> = {
  title: 'Components/Icons/ServiceIcon',
  component: ServiceIcon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ServiceIcon>;

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
