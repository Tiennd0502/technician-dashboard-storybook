import type { Metadata } from 'next';

import { Provider } from '@/providers';
import { Layout } from '@/components';

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
        <Provider>
          <Layout>{children}</Layout>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
