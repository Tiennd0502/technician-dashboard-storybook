import { Flex, Heading, Text, Button } from '@chakra-ui/react';
import Image from 'next/image';

import { PRODUCT_STATISTICS_URL } from '@/constants';
import { StatusLabel } from '..';
import { STATUS } from '@/interfaces';

interface ProductStatisticsProps {
  src?: string;
}

const ProductStatistics = ({ src = PRODUCT_STATISTICS_URL }: ProductStatisticsProps) => (
  <Flex
    flexDirection='column'
    justifyContent='space-between'
    borderRadius='md'
    p='7'
    borderWidth='1px'
    borderColor='border.primary'
    h='100%'
  >
    <Flex justifyContent='space-between' alignItems='center'>
      <Heading as='h3' variant='headingXl'>
        Total Products
      </Heading>
      <Text variant='text3Xl'>350</Text>
    </Flex>
    <Flex justifyContent='center' alignItems='center' width='100%'>
      <Image
        src={src}
        alt='Total product'
        width={313}
        height={181}
        layout='responsive'
        loading='lazy'
      />
    </Flex>
    <Flex justifyContent='space-between'>
      <Button variant='outline'>
        <StatusLabel value={STATUS.Activated} />
      </Button>
      <Button variant='outline'>
        <StatusLabel value={STATUS.Deactivated} />
      </Button>
    </Flex>
  </Flex>
);

export default ProductStatistics;
