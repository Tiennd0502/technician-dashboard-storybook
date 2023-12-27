import type { Meta, StoryObj } from '@storybook/react';

import Technician from '.';

const meta: Meta<typeof Technician> = {
  title: 'Components/Technician',
  component: Technician,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Technician>;

export const Default: Story = {
  args: {},
};
