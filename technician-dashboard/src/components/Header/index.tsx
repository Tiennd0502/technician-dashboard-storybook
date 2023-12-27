import { memo } from 'react';
import { Flex, Heading } from '@chakra-ui/react';

// Types
import { User } from '@/interfaces';

// Components
import { IconButton, Dropdown, NotificationIcon } from '..';

interface HeaderProps {
  title: string;
  user: User;
}

const Header = (props: HeaderProps) => {
  const {
    title,
    user: { name, avatar },
  } = props;

  return (
    <Flex alignItems='center' justifyContent='space-between' p={4} h={{ base: '60px', md: '80px' }}>
      <Heading as='h1' variant='heading2Xl'>
        {title}
      </Heading>
      <Flex gap='2'>
        <IconButton aria-label='Notifications' icon={<NotificationIcon />} />
        <Dropdown name={name} avatar={avatar} />
      </Flex>
    </Flex>
  );
};

export default memo(Header);
