import type { Metadata } from 'next';

import { Provider } from '@/lib/providers';
import { Layout } from '@/ui/components';

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