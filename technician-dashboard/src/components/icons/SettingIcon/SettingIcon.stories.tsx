import type { Meta, StoryObj } from '@storybook/react';

import SettingIcon from '.';

const meta: Meta<typeof SettingIcon> = {
  title: 'Components/Icons/SettingIcon',
  component: SettingIcon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SettingIcon>;

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
