import { memo } from 'react';
import { Link, Image, Spacer, Text, Flex } from '@chakra-ui/react';

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
    borderRadius='md'
    overflow='hidden'
    _hover={{
      opacity: '0.7',
    }}
  >
    <Image
      src={image}
      alt={name}
      objectFit='cover'
      pos='absolute'
      zIndex='-1'
      w='100%'
      height='100%'
    />
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
