'use client';

import { ReactNode } from 'react';

import QueryClientProvider from '../QueryClientProvider';
import ChakraProvider from '../ChakraProvider';

interface ProviderProps {
  children: ReactNode;
}

const Provider = ({ children }: ProviderProps) => (
  <QueryClientProvider>
    <ChakraProvider>{children}</ChakraProvider>
  </QueryClientProvider>
);

export default Provider;
