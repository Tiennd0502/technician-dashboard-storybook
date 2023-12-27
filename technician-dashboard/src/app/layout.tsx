import type { Metadata } from 'next';
import { ChakraProvider } from '@/providers';
import { Layout } from '@/components';

export const metadata: Metadata = {
  title: 'Technician Dashboard',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang='en'>
    <body>
      <ChakraProvider>
        <Layout>{children}</Layout>
      </ChakraProvider>
    </body>
  </html>
);

export default RootLayout;
