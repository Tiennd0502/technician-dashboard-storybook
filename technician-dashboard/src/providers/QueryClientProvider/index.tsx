'use client';

import { useState, ReactNode } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

interface ProviderProps {
  children: ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  const [queryClient] = useState(new QueryClient());

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default Provider;
