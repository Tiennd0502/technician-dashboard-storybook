import { memo } from 'react';
import { Flex } from '@chakra-ui/react';

// Constants
import { CURRENCY_CHARACTERS } from '@/constants';

// Types
import { Service } from '@/interfaces';

// Components
import { ServiceCard } from '..';

interface ServiceListProps {
  list: Service[];
}

const ServiceList = ({ list }: ServiceListProps) => (
  <Flex gap='5' role='list'>
    {list.map((item) => (
      <ServiceCard key={item.id} service={item} currencyCharacter={CURRENCY_CHARACTERS.EURO} />
    ))}
  </Flex>
);

export default memo(ServiceList);
