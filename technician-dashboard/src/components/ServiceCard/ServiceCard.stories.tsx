import type { Meta, StoryObj } from '@storybook/react';

import { SERVICE } from '@/__mocks__';
import { CURRENCY_CHARACTERS } from '@/constants';

import ServiceCard from '.';

const meta: Meta<typeof ServiceCard> = {
  title: 'Components/ServiceCard',
  component: ServiceCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ServiceCard>;

export const Default: Story = {
  args: { service: SERVICE },
};

export const HasCurrencyCharacter: Story = {
  args: { service: SERVICE, currencyCharacter: CURRENCY_CHARACTERS.EURO },
};
