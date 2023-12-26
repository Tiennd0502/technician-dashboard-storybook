import { defineStyleConfig } from '@chakra-ui/react';

export const Heading = defineStyleConfig({
  baseStyle: {
    color: 'text.primary',
    fontWeight: 'bold',
    fontFamily: 'primary',
  },
  variants: {
    headingLg: {
      fontSize: 'lg',
      fontWeight: 'bold',
    },
    headingXl: {
      fontSize: 'xl',
      fontWeight: 'bold',
    },
    heading2Xl: {
      fontSize: '2xl',
    },
  },
  defaultProps: {
    variant: 'headingLg',
  },
});
