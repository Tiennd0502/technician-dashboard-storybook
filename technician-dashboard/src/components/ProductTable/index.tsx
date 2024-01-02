'use client';

import React, { useCallback, useMemo, useState } from 'react';
import { Box, Button, Flex, Heading, VStack, useDisclosure } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Types
import { Filter, STATUS, TableData } from '@/interfaces';

// Constants
import { DEFAULT_PRODUCT_FILTER, ROUTES } from '@/constants';

// Components
import { ConfirmModal, FilterIcon, Pagination, SearchBox, StatusLabel, Table } from '..';

// Hooks
import { useFetchProducts, useProduct } from '@/hooks';

const ProductTable = () => {
  const router = useRouter();
  const [productFilter, setProductFilter] = useState<Filter>(DEFAULT_PRODUCT_FILTER);
  const [productDelete, setProductDelete] = useState<string>('');

  const {
    isOpen: isOpenConfirmModal,
    onOpen: onOpenConfirmModal,
    onClose: onCloseConfirmModal,
  } = useDisclosure();
  const {
    deleteProduct: { mutate: deleteProduct, isPending: isDeleting },
  } = useProduct();

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

  const handleClickEditProduct = useCallback(
    (id: string) => router.push(`${ROUTES.PRODUCT_AND_SERVICES}/${id}/edit`),
    [router],
  );

  const handleSearchProduct = useCallback((value: string) => {
    setProductFilter((prev: Filter) => ({
      ...prev,
      name: value,
      page: '1',
    }));
  }, []);

  const handleCloseConfirmModal = useCallback(() => {
    setProductDelete('');
    onCloseConfirmModal();
  }, [onCloseConfirmModal]);

  const handleDeleteProduct = useCallback(() => {
    deleteProduct(productDelete, {
      onSettled: handleCloseConfirmModal,
    });
  }, [deleteProduct, handleCloseConfirmModal, productDelete]);

  const handleOpenConfirmModal = useCallback(
    (id: string) => {
      setProductDelete(id);
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
      {isOpenConfirmModal && (
        <ConfirmModal
          title='Delete Product'
          description='Are you sure you want to delete this product?'
          isOpen={isOpenConfirmModal}
          isSubmitting={isDeleting}
          onSubmit={handleDeleteProduct}
          onClose={handleCloseConfirmModal}
        />
      )}
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
        <Button as={Link} ml='4' href={`${ROUTES.PRODUCT_AND_SERVICES}/create`}>
          Add new
        </Button>
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
