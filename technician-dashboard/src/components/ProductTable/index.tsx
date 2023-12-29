'use client';

import React, { useCallback, useMemo, useState } from 'react';
import { Box, Button, Flex, Heading, VStack, useDisclosure } from '@chakra-ui/react';

// Types
import { Filter, STATUS, TableData } from '@/interfaces';

// Constants
import { DEFAULT_PRODUCT_FILTER } from '@/constants';

// Components
import { FilterIcon, Pagination, SearchBox, StatusLabel, Table } from '..';

// Hooks
import { useFetchProducts } from '@/hooks';

const ProductTable = () => {
  const [productFilter, setProductFilter] = useState<Filter>(DEFAULT_PRODUCT_FILTER);

  const { isOpen: isOpenForm, onOpen: onOpenForm, onClose: onCloseForm } = useDisclosure();
  const {
    isOpen: isOpenConfirmModal,
    onOpen: onOpenConfirmModal,
    onClose: onCloseConfirmModal,
  } = useDisclosure();

  const { data: products = [], isLoading } = useFetchProducts(productFilter);

  // TODO: Config api return total pages
  const { data: productAll = [] } = useFetchProducts({
    name: productFilter.name || '',
    sortBy: productFilter.sortBy,
    order: productFilter.order,
  });

  const totalPage = useMemo(
    () => Math.ceil(productAll.length / +DEFAULT_PRODUCT_FILTER.limit),
    [productAll],
  );

  const handleSortProduct = useCallback((value: Filter) => {
    setProductFilter((prev: Filter) => ({
      ...prev,
      ...value,
    }));
  }, []);

  const handleClickEditProduct = useCallback((id: string) => {}, []);

  const handleSearchProduct = useCallback((value: string) => {
    setProductFilter((prev: Filter) => ({
      ...prev,
      name: value,
      page: '1',
    }));
  }, []);

  const handleOpenConfirmModal = useCallback(
    (id: string) => {
      onOpenConfirmModal();
    },
    [onOpenConfirmModal],
  );

  const handleChangePage = useCallback((page: number) => {
    setProductFilter((prev: Filter) => ({
      ...prev,
      page: page.toString(),
    }));
  }, []);

  const productHeaderColumn = useMemo(() => {
    const customViewStatus = (value: string | number | boolean) => (
      <StatusLabel value={value as STATUS} />
    );

    return [
      {
        key: 'checkbox',
        label: 'Checkbox',
        width: {
          md: '30px',
          lg: '50px',
        },
        isCheckbox: true,
      },
      {
        key: 'name',
        label: 'Product name',
        width: {
          md: '100%',
          lg: '28%',
        },
        onSort: handleSortProduct,
      },
      {
        key: 'brand',
        label: 'Brand name',
        width: {
          md: '100%',
          lg: '17%',
        },
      },
      {
        key: 'service',
        label: 'Service',
        width: {
          md: '100%',
          lg: '15%',
        },
      },
      {
        key: 'status',
        label: 'Status',
        width: {
          md: '100%',
          lg: '18%',
        },
        customView: customViewStatus,
      },
      {
        key: 'actions',
        label: 'Actions',
        width: {
          md: '100%',
          lg: 'calc(32% - 35px)',
        },
        isAction: true,
      },
    ];
  }, [handleSortProduct]);

  return (
    <VStack spacing={7} p='7' borderWidth='1px' borderRadius='md' borderColor='primary' h='100%'>
      <Flex justifyContent='space-between' alignItems='center' w='full'>
        <Heading variant='headingLg' mr='auto'>
          Products listing
        </Heading>
        <Box minW='200px' ml='auto' mr='4'>
          <SearchBox onSearch={handleSearchProduct} />
        </Box>
        <Button as={Flex} gap='4' variant='outline' mr='0'>
          Filter <FilterIcon />
        </Button>
        <Button ml='4'>Add new</Button>
      </Flex>

      <Table
        isLoading={isLoading}
        filter={productFilter}
        columns={productHeaderColumn}
        data={products as unknown as TableData[]}
        onEdit={handleClickEditProduct}
        onDelete={handleOpenConfirmModal}
      />

      <Pagination
        onChange={handleChangePage}
        total={totalPage}
        page={+(productFilter?.page || 1)}
      />
    </VStack>
  );
};

export default ProductTable;
