import { Flex, Heading, Image, Text, Button } from '@chakra-ui/react';
import { StatusLabel } from '..';
import { STATUS } from '@/interfaces';

const ProductStatistics = () => (
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
      <Image src='total-product.png' alt='Total product' maxW='min-content' />
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
