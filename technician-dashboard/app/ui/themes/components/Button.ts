import { defineStyleConfig } from '@chakra-ui/react';

export const Button = defineStyleConfig({
  baseStyle: {
    py: 3,
    fontSize: 'sm',
  },
  variants: {
    solid: {
      color: 'white',
      backgroundColor: 'primary.500',
      _hover: {
        backgroundColor: 'primary.600',
      },
    },
    outline: {
      borderColor: 'border.secondary',
    },
  },
  defaultProps: {
    variant: 'solid',
  },
});
