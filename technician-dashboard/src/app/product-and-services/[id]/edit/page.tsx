'use client';

import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

// Hooks
import { useFetchProduct } from '@/hooks';

// Components
import { ProductForm, Spinner } from '@/components';

interface PageProps {
  params: {
    id: string;
  };
}

const Page = ({ params: { id } }: PageProps) => {
  const { data: product, isLoading } = useFetchProduct(id);

  if (isLoading) {
    return (
      <Box>
        <Spinner />
      </Box>
    );
  }

  return (
    <Flex w='full' p='7'>
      <ProductForm product={product} />
    </Flex>
  );
};

export default Page;
