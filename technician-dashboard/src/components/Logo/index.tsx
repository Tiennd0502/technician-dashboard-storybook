import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';

import { LOGO_URL } from '@/constants';

interface LogoProps {
  src?: string;
}

const Logo = ({ src = LOGO_URL }: LogoProps) => (
  <Flex gap='2.5'>
    <Image src={src} alt='Technician' width={37} height={38} />
    <Box>
      <Text
        width='fit-content'
        color='text.tertiary'
        fontWeight='normal'
        variant='textLg'
        letterSpacing='0.275px'
      >
        Technician
      </Text>
      <Text
        width='fit-content'
        fontWeight='normal'
        variant='textSm'
        color='text.tertiary'
        opacity='0.5'
        letterSpacing='0.193px'
      >
        At Home
      </Text>
    </Box>
  </Flex>
);

export default Logo;
