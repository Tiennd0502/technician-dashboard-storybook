import React from 'react';
import type { Preview } from '@storybook/react';
import { Provider } from '../app/lib/providers';
import { AppRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextRouter: {
      Provider: AppRouterContext.Provider,
    },
  },
  decorators: [
    (Story) => (
      <Provider>
        <Story />
      </Provider>
    ),
  ],
};

export default preview;
