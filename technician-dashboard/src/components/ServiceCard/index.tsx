import { memo } from 'react';
import { Link, Spacer, Text, Flex, Box } from '@chakra-ui/react';
import Image from 'next/image';

// Constants
import { TRUNCATE_STYLE } from '@/constants';

// Types
import { Service } from '@/interfaces';

interface ServiceCardProps {
  service: Service;
  currencyCharacter?: string;
}

const ServiceCard = ({
  service: { id, name, image, price },
  currencyCharacter = '',
}: ServiceCardProps) => (
  <Link
    key={id}
    pos='relative'
    minH='165px'
    w='100%'
    href='#'
    borderRadius='md'
    overflow='hidden'
    _hover={{
      opacity: '0.7',
    }}
  >
    <Box w='full' pos='absolute' zIndex='-1'>
      <Image
        src={image}
        alt={name}
        objectFit='cover'
        style={{
          width: '100%',
          height: '100%',
        }}
        width='161'
        height='165'
        blurDataURL={image}
        placeholder='blur'
      />
    </Box>
    <Flex flexDirection='column' justify-content='flex-end' h='100%'>
      <Spacer />
      <Text
        color='text.tertiary'
        variant={{ base: 'textXs', md: 'textMd' }}
        px='2.5'
        {...TRUNCATE_STYLE}
      >
        {name}
      </Text>
      <Text
        color='text.tertiary'
        variant={{ base: 'textXs', md: 'textMd' }}
        px='2.5'
        mb='3'
      >{`${currencyCharacter}${price}`}</Text>
    </Flex>
  </Link>
);

export default memo(ServiceCard);
