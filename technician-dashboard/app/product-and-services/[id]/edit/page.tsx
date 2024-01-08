'use client';

import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

// Hooks
import { useFetchProduct } from '@/lib/hooks';

// Components
import { Spinner } from '@/ui/commons';
import { ProductForm } from '@/ui/product-and-services';

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
