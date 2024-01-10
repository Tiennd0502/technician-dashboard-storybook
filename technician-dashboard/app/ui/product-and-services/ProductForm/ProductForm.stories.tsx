import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';

import ProductForm from '.';

const meta: Meta<typeof ProductForm> = {
  title: 'Components/ProductForm',
  component: ProductForm,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProductForm>;

export const Default: Story = {
  args: {
    title: 'Add product',
    isOpen: true,
  },
  render: function Render(props) {
    const [{ isOpen }, updateArgs] = useArgs();

    const handleClose = () => updateArgs({ isOpen: !isOpen });

    return <ProductForm {...props} isOpen={isOpen} onClose={handleClose} />;
  },
};
