'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Flex, List, ListItem, Text, Button, useDisclosure } from '@chakra-ui/react';

import { Menu } from '@/lib/interfaces';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Logo } from '..';

interface SidebarPros {
  listItem: Menu[];
}

const MiniSidebar = ({ listItem }: SidebarPros) => {
  const pathname = usePathname();
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex pos='relative' flexDirection='column' bg='primary.500'>
      <Flex m='5' justifyContent='space-between' alignItems='center'>
        <Logo />
        <Button aria-label='Icon Toggle Menu' variant='outline' onClick={onToggle}>
          <HamburgerIcon />
        </Button>
      </Flex>
      {isOpen && (
        <List
          as={Flex}
          flexDirection='column'
          pos='absolute'
          zIndex='2'
          top='100%'
          bg='primary.500'
          w='100%'
          role='list'
        >
          {listItem?.map(({ id, label, leftIcon, href }, index) => {
            const LeftIcon = leftIcon || <></>;

            return (
              <ListItem
                key={id}
                _hover={{
                  background: 'background.component.tertiary',
                }}
                {...(pathname?.startsWith(href) && {
                  background: 'background.component.tertiary',
                })}
                {...(index === listItem.length - 1 && {
                  mt: 'auto',
                  mb: 2,
                })}
                onClick={onToggle}
              >
                <Flex as={Link} href={href} p='5' gap='2.5' _hover={{ textDecoration: 'none' }}>
                  <LeftIcon />
                  <Text color='text.tertiary'>{label}</Text>
                </Flex>
              </ListItem>
            );
          })}
        </List>
      )}
    </Flex>
  );
};

export default MiniSidebar;
