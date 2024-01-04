import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';

import ConfirmModal from '.';

const meta: Meta<typeof ConfirmModal> = {
  title: 'Components/ConfirmModal',
  component: ConfirmModal,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ConfirmModal>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: 'Confirm modal',
    description: 'Are you sure to delete it?',
  },
  render: function Render(props) {
    const [{ isOpen }, updateArgs] = useArgs();

    const handleClose = () => updateArgs({ isOpen: !isOpen });

    return <ConfirmModal {...props} isOpen={isOpen} onClose={handleClose} onSubmit={handleClose} />;
  },
};
