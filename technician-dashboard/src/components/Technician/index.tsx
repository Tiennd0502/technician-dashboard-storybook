import { Box, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

import { TECHNICIAN_URL } from '@/constants';

interface TechnicianProps {
  src?: string;
}

const Technician = ({ src = TECHNICIAN_URL }: TechnicianProps) => (
  <Box p='7' borderWidth='1px' borderColor='border.primary' borderRadius='md' height='100%'>
    <Heading variant='headingXl'>Add Technicians</Heading>
    <Text as='p' variant='textXxs'>
      Click on the &nbsp;
      <Text as='span' variant='textXxs' color='primary.500'>
        Email&nbsp;
      </Text>
      &amp; send the magic link to technicians
    </Text>
    <Image
      src={src}
      alt='Technicians'
      width={326}
      height={300}
      layout='responsive'
      loading='lazy'
    />
  </Box>
);

export default Technician;
