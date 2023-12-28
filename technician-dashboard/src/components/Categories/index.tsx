import { memo, useCallback } from 'react';

import { Category } from '@/interfaces';
import { Link, Flex, Text } from '@chakra-ui/react';

interface CategoriesProps {
  list: Category[];
}

const Categories = ({ list }: CategoriesProps) => {
  const getLinkStyles = useCallback(
    (url: string) => ({
      width: '100%',
      height: '70px',
      borderRadius: 'md',
      background: `linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%), url(${url}), lightgray 50% / cover no-repeat`,
    }),
    [],
  );

  return (
    <Flex gap='5' role='list'>
      {list.map(({ id, image, label }) => (
        <Link key={id} pos='relative' {...getLinkStyles(image)}>
          <Text
            color='text.tertiary'
            variant='textXsm'
            pos='absolute'
            top='50%'
            left='50%'
            transform='translate(-50%, -50%)'
          >
            {label}
          </Text>
        </Link>
      ))}
    </Flex>
  );
};

export default memo(Categories);
