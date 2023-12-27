import { FC, ReactNode } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

import { MENU_ITEM_LIST, HEADER_INFO } from '@/constants';

import { Sidebar, Header } from '..';

const GRID_TEMPLATE = `
  "nav header"
  "nav main"
`;

const Layout: FC<{ children: ReactNode }> = ({ children }) => (
  <Grid
    gap='5'
    templateAreas={GRID_TEMPLATE}
    gridTemplateRows='100px 1fr'
    gridTemplateColumns='250px 1fr'
  >
    <GridItem area='nav'>
      <Sidebar listItem={MENU_ITEM_LIST} />
    </GridItem>
    <GridItem area='header'>
      <Header {...HEADER_INFO} />
    </GridItem>
    <GridItem area='main'>{children}</GridItem>
  </Grid>
);

export default Layout;
