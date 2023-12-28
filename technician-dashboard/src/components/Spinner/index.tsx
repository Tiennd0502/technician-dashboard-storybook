import React from 'react';
import { Spinner as ChakraSpinner, Flex, SpinnerProps } from '@chakra-ui/react';

const Spinner = (props: SpinnerProps) => (
  <Flex justifyContent='center' alignItems='center'>
    <ChakraSpinner color='primary.500' size='md' {...props} />
  </Flex>
);

export default Spinner;
