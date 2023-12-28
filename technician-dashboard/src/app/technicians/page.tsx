import { Flex, Box, Heading } from '@chakra-ui/react';

// Constants
import { SERVICES, CATEGORIES } from '@/__mocks__';

// Components
import { Categories, ProductStatistics, ServiceList, Technician, ProductTable } from '@/components';

const Page = () => (
  <Box pr='5'>
    <Flex gap='5' flexWrap='wrap'>
      <Flex
        w={{
          base: '100%',
          xl: 'calc(67% - 10px)',
        }}
        flexDirection='column'
        justifyContent='space-between'
        gap='5'
        borderWidth='1px'
        borderColor='border.primary'
        borderRadius='md'
        p='7'
        order={{
          md: 1,
          xl: 1,
        }}
      >
        <Heading>About Services</Heading>
        <ServiceList list={SERVICES} />
        <Categories list={CATEGORIES} />
      </Flex>
      <Box
        w={{
          sm: '100%',
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

export default Page;
