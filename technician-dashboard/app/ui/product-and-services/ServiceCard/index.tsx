import { memo } from 'react';
import { Link, Spacer, Text, Flex } from '@chakra-ui/react';

import { TRUNCATE_STYLE } from '@/lib/constants';
import { Service } from '@/lib/interfaces';

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
    minH={{ base: '100px', sm: '120px', md: '165px' }}
    w='100%'
    href='#'
    borderRadius='md'
    overflow='hidden'
    _hover={{
      opacity: '0.7',
    }}
    bg={`url('${image}') center center no-repeat`}
    bgSize='cover'
  >
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
