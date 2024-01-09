import { Flex, Box } from '@chakra-ui/react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// Components
import { ServiceSection } from '@/ui/product-and-services';

const ProductStatistics = dynamic(() => import('@/ui/product-and-services/ProductStatistics'));

const ProductTable = dynamic(() => import('@/ui/product-and-services/ProductTable'));

const Technician = dynamic(() => import('@/ui/product-and-services/Technician'));

const Page = () => (
  <Box px='5'>
    <Flex gap='5' flexWrap='wrap'>
      <ServiceSection
        width={{
          base: '100%',
          xl: 'calc(67% - 10px)',
        }}
      />
      <Box
        w={{
          base: '100%',
          md: 'calc(50% - 10px)',
          xl: 'calc(33% - 10px)',
        }}
        order={{ md: 2, xl: 2 }}
      >
        <ProductStatistics />
      </Box>
      <Box
        w={{
          base: '100%',
          xl: 'calc(67% - 10px)',
        }}
        order={{ md: 4, xl: 3 }}
      >
        <ProductTable />
      </Box>
      <Box
        w={{
          base: '100%',
          md: 'calc(50% - 10px)',
          xl: 'calc(33% - 10px)',
        }}
        order={{ md: 3, xl: 4 }}
      >
        <Technician />
      </Box>
    </Flex>
  </Box>
);

export const metadata: Metadata = {
  title: 'Product & Services',
  description: 'The product and services in technical dashboard',
};

export default Page;
