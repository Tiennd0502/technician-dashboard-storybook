import { defineStyleConfig } from '@chakra-ui/react';

export const Text = defineStyleConfig({
  baseStyle: {
    color: 'text.primary',
    fontWeight: 'bold',
  },
  variants: {
    textXs: {
      fontSize: 'xs',
    },
    textXxs: {
      fontSize: 'xxs',
    },
    textSm: {
      fontSize: 'sm',
    },
    textXsm: {
      fontSize: 'xsm',
    },
    textMd: {
      fontSize: 'md',
    },
    textLg: {
      fontSize: 'lg',
    },
    textXl: {
      fontSize: 'xl',
    },
    text2Xl: {
      fontSize: '2xl',
    },
    text3Xl: {
      fontSize: '3xl',
    },
  },
  defaultProps: {
    variant: 'textMd',
  },
});
