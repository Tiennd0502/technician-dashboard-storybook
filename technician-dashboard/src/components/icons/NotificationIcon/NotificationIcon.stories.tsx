import type { Meta, StoryObj } from '@storybook/react';

import NotificationIcon from '.';

const meta: Meta<typeof NotificationIcon> = {
  title: 'Components/Icons/NotificationIcon',
  component: NotificationIcon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NotificationIcon>;

export const Default: Story = {
  args: {},
};

export const Secondary: Story = {
  args: {
    fillColor: '#f8d9af',
  },
};
