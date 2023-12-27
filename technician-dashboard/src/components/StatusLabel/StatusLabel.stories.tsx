import type { Meta, StoryObj } from '@storybook/react';

import { STATUS } from '@/interfaces';
import StatusLabel from '.';

const meta: Meta<typeof StatusLabel> = {
  title: 'Components/StatusLabel',
  component: StatusLabel,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof StatusLabel>;

export const Activated: Story = {
  args: {
    value: STATUS.Activated,
  },
};

export const Deactivated: Story = {
  args: {
    value: STATUS.Deactivated,
  },
};
