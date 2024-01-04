'use client';

import { ReactNode } from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';

import { configThemes } from '@/ui/themes';

interface ChakraProvider {
  children: ReactNode;
}

const ThemesProvider = ({ children }: ChakraProvider): JSX.Element => (
  <ChakraProvider theme={configThemes}>
    <CSSReset />
    {children}
  </ChakraProvider>
);

export default ThemesProvider;
