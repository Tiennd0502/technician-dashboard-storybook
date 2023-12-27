import { Box, Flex, List, ListItem, Link, Text } from '@chakra-ui/react';

// Types
import { Menu } from '@/interfaces';

// Components
import { Logo, ArrowLeftIcon } from '..';

interface SidebarPros {
  listItem: Menu[];
}

const Sidebar = ({ listItem }: SidebarPros) => (
  <Flex flexDirection='column' pos='fixed' width='250px' height='100vh'>
    <Box
      zIndex='-1'
      position='absolute'
      w='100%'
      h='100%'
      clipPath='polygon(0px 0px, 249px 0px, 249px 0px, 249px 1.0257454px, 249px 3.8115392px, 249px 7.9202178px, 249px 12.9146176px, 249px 18.357575px, 249px 23.8119264px, 249px 28.8405082px, 249px 33.0061568px, 249px 35.8717086px, 249px 37px, 249px 37px, 248.244px 43.72px, 246.192px 49.6px, 243.168px 54.82px, 239.496px 59.56px, 235.5px 64px, 231.504px 68.32px, 227.832px 72.7px, 224.808px 77.32px, 222.756px 82.36px, 222px 88px, 222px 88px, 222.756px 93.60598px, 224.808px 98.55904px, 227.832px 103.06186px, 231.504px 107.31712px, 235.5px 111.5275px, 239.496px 115.89568px, 243.168px 120.62434px, 246.192px 125.91616px, 248.244px 131.97382px, 249px 139px, 249px 139px, 249px 165.411px, 249px 226.208px, 249px 312.637px, 249px 415.944px, 249px 527.375px, 249px 638.176px, 249px 739.593px, 249px 822.872px, 249px 879.259px, 249px 100%, 0px 100%, 0px 0px)'
      bg='background.component.quaternary'
    />
    <Box m='5'>
      <Logo />
    </Box>
    <Box w='fit-content' pos='absolute' top='68px' right='-18px' zIndex='1' cursor='pointer'>
      <ArrowLeftIcon />
    </Box>
    <List as={Flex} flexDirection='column' mt='8' role='list' h='100%'>
      {listItem?.map(({ id, label, leftIcon, href }, index) => {
        const LeftIcon = leftIcon || <></>;

        return (
          <ListItem
            key={id}
            _hover={{
              background: 'background.component.tertiary',
            }}
            {...(index === listItem.length - 1 && {
              mt: 'auto',
              mb: 2,
            })}
          >
            <Flex as={Link} href={href} p='5' gap='2.5' _hover={{ textDecoration: 'none' }}>
              <LeftIcon />
              <Text color='text.tertiary'>{label}</Text>
            </Flex>
          </ListItem>
        );
      })}
    </List>
  </Flex>
);

export default Sidebar;
