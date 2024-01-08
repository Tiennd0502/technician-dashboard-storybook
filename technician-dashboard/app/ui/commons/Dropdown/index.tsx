'use client';

import { memo } from 'react';
import { Avatar, Flex, Button, Text, Menu, MenuItem, MenuButton, MenuList } from '@chakra-ui/react';

import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

interface UserCardProps {
  avatar: string;
  name: string;
}

const Dropdown = ({ name, avatar }: UserCardProps) => (
  <Menu>
    {({ isOpen }) => (
      <>
        <MenuButton
          data-testid='btn-dropdown'
          as={Button}
          variant='ghost'
          rightIcon={
            isOpen ? (
              <ChevronUpIcon data-testid='up-icon' color='primary.500' />
            ) : (
              <ChevronDownIcon data-testid='down-icon' color='primary.500' />
            )
          }
        >
          <Flex alignItems='center' gap='3'>
            <Avatar name={name} src={avatar} aria-label='Avatar User' />
            <Text>{name}</Text>
          </Flex>
        </MenuButton>
        <MenuList data-testid='dropdown-options'>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Change password</MenuItem>
        </MenuList>
      </>
    )}
  </Menu>
);

export default memo(Dropdown);
