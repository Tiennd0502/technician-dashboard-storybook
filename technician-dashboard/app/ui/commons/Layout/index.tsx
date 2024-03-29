'use client';

import { FC, ReactNode, useEffect, useMemo, useState } from 'react';
import { Grid, GridItem, useMediaQuery } from '@chakra-ui/react';

import { MENU_ITEM_LIST, HEADER_INFO } from '@/lib/constants';

import { Sidebar, Header, MiniSidebar, Spinner } from '..';

const GRID_TEMPLATE = `
  'nav header'
  'nav main'
`;

const GRID_SMALL_TEMPLATE = `
  'nav'
  'header'
  'main'
`;

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const [isSmallScreen] = useMediaQuery('(max-width: 768px)');
  const [isLoaded, setIsLoaded] = useState(false);

  const styledWrapper = useMemo(
    () =>
      isSmallScreen
        ? {
            templateAreas: GRID_SMALL_TEMPLATE,
            gridTemplateColumns: '100%',
          }
        : {
            templateAreas: GRID_TEMPLATE,
            gridTemplateRows: '100px 1fr',
            gridTemplateColumns: '250px 1fr',
          },
    [isSmallScreen],
  );

  useEffect(() => {
    if (!isLoaded) {
      setIsLoaded(true);
    }
  }, [isLoaded]);

  return isLoaded ? (
    <Grid gap='5' {...styledWrapper}>
      <GridItem area='nav'>
        {isSmallScreen ? (
          <MiniSidebar listItem={MENU_ITEM_LIST} />
        ) : (
          <Sidebar listItem={MENU_ITEM_LIST} />
        )}
      </GridItem>
      <GridItem area='header'>
        <Header {...HEADER_INFO} />
      </GridItem>
      <GridItem area='main'>{children}</GridItem>
    </Grid>
  ) : (
    <Spinner />
  );
};

export default Layout;
