import { ThemeOverride } from '@chakra-ui/react';
import { Advent_Pro } from 'next/font/google';

const adventPro = Advent_Pro({
  weight: ['500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const fonts = {
  primary: `${adventPro.style.fontFamily}, sans-serif`,
  secondary: `${adventPro.style.fontFamily}, sans-serif`,
};

export const fontSizes: ThemeOverride['fontSizes'] = {
  xs: '12px',
  xxs: '13px',
  sm: '14px',
  xsm: '15px',
  md: '16px',
  lg: '20px',
  xl: '22px',
  '2xl': '26px',
  '3xl': '30px',
};

export const fontWeights: ThemeOverride['fontWeights'] = {
  normal: 500,
  bold: 700,
};
