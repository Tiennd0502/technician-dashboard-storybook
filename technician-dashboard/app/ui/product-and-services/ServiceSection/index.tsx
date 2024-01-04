'use client';

import React, { memo } from 'react';
import { Flex, FlexProps, Heading, LayoutProps } from '@chakra-ui/react';

// Types
import { Category, Service } from '@/lib/interfaces';

// Constants
import { API_ROUTES } from '@/lib/constants';

// Components
import { Spinner } from '@/ui/components';
import { Categories, ServiceList } from '@/ui/product-and-services';

// Hooks
import { useFetchServices } from '@/lib/hooks';

interface ServiceSectionProps extends FlexProps {
  width: LayoutProps['w'];
}

const ServiceSection = ({ width, ...props }: ServiceSectionProps) => {
  const [
    { data: services = [], isLoading: isServiceLoading },
    { data: categories = [], isLoading: isBrandsLoading },
  ] = useFetchServices<[Service[], Category[]]>([API_ROUTES.SERVICES, API_ROUTES.CATEGORIES]);

  const isLoading = isServiceLoading || isBrandsLoading;

  return (
    <Flex
      w={width}
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
      {...props}
    >
      <Heading>About Services</Heading>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <ServiceList list={services as Service[]} />
          <Categories list={categories as Category[]} />
        </>
      )}
    </Flex>
  );
};

export default memo(ServiceSection);
