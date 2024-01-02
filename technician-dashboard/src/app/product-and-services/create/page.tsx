import React from 'react';
import { Flex } from '@chakra-ui/react';

import { ProductForm } from '@/components';

const Page = () => {
  return (
    <Flex w='full' p='7'>
      <ProductForm />
    </Flex>
  );
};

export default Page;
