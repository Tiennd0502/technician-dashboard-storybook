import type { Meta, StoryObj } from '@storybook/react';

import ArrowLeftIcon from '.';

const meta: Meta<typeof ArrowLeftIcon> = {
  title: 'Components/Icons/ArrowLeftIcon',
  component: ArrowLeftIcon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArrowLeftIcon>;

export const Default: Story = {
  args: {},
};
