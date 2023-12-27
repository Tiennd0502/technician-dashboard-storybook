import { memo } from 'react';
import { Box, IconButton as ChakraIconButton, IconButtonProps } from '@chakra-ui/react';

interface Props extends IconButtonProps {
  isActive?: boolean;
}

const IconButton = ({ isActive = false, ...props }: Props) => (
  <Box data-testid='icon-button-component' pos='relative' maxW='fit-content'>
    <Box
      pos='absolute'
      bg={isActive ? 'success.500' : 'error.500'}
      rounded='full'
      boxSize='10px'
      textAlign='center'
      top='-2px'
      right='-4px'
      zIndex={1}
    />
    <ChakraIconButton data-testid='icon-button' pos='relative' variant='outline' {...props} />
  </Box>
);

export default memo(IconButton);
