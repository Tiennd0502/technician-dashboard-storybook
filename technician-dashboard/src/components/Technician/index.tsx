import { Box, Heading, Text, Image } from '@chakra-ui/react';

const Technician = () => (
  <Box p='7' borderWidth='1px' borderColor='border.primary' borderRadius='md' height='100%'>
    <Heading variant='headingXl'>Add Technicians</Heading>
    <Text as='p' variant='textXxs'>
      Click on the &nbsp;
      <Text as='span' variant='textXxs' color='primary.500'>
        Email&nbsp;
      </Text>
      &amp; send the magic link to technicians
    </Text>
    <Image src='technician.png' alt='Technicians' m='auto' />
  </Box>
);

export default Technician;
