import type { Metadata } from 'next';
import { ChakraProvider } from '@/providers';

export const metadata: Metadata = {
  title: 'Technician Dashboard',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang='en'>
      <body>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
};

export default RootLayout;
