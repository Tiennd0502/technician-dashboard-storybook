import type { Metadata } from 'next';

import { Provider } from '@/lib/providers';
import { Layout } from '@/ui/commons';

export const metadata: Metadata = {
  title: 'Technician Dashboard',
  description: 'The home page in technical dashboard',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang='en'>
      <body>
        <Provider>
          <Layout>{children}</Layout>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
