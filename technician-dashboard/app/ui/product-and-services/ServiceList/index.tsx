import { memo } from 'react';
import { Flex } from '@chakra-ui/react';

import { CURRENCY_CHARACTERS } from '@/lib/constants';
import { Service } from '@/lib/interfaces';
import { ServiceCard } from '..';

interface ServiceListProps {
  list: Service[];
}

const ServiceList = ({ list }: ServiceListProps) => (
  <Flex gap='5' data-testid='list-services'>
    {list.map((item) => (
      <ServiceCard key={item.id} service={item} currencyCharacter={CURRENCY_CHARACTERS.EURO} />
    ))}
  </Flex>
);

export default memo(ServiceList);
