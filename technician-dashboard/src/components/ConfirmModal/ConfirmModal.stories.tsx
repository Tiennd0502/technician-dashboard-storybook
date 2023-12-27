import type { Meta, StoryObj } from '@storybook/react';

import ConfirmModal from '.';

const meta: Meta<typeof ConfirmModal> = {
  title: 'Components/ConfirmModal',
  component: ConfirmModal,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ConfirmModal>;

export const Hide: Story = {
  args: {
    isOpen: false,
    title: 'Confirm modal',
    description: 'Are you sure to delete it?',
    onClose: () => null,
    onSubmit: () => null,
  },
};

export const Show: Story = {
  args: {
    isOpen: true,
    title: 'Confirm modal',
    description: 'Are you sure to delete it?',
    onClose: () => null,
    onSubmit: () => null,
  },
};
