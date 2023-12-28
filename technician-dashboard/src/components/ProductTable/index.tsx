'use client';

import React, { useCallback, useMemo, useState } from 'react';
import { Box, useDisclosure } from '@chakra-ui/react';

// Types
import { Filter, STATUS, TableData } from '@/interfaces';

// Constants
import { DEFAULT_PRODUCT_FILTER } from '@/constants';

// Components
import { StatusLabel, Table } from '..';

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

  const { data: products = [] } = useFetchProducts(DEFAULT_PRODUCT_FILTER);

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
    }));
  }, []);

  const handleOpenConfirmModal = useCallback(
    (id: string) => {
      onOpenConfirmModal();
    },
    [onOpenConfirmModal],
  );

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
    <Box>
      <Table
        title='Products listing'
        filter={productFilter}
        columns={productHeaderColumn}
        data={products as unknown as TableData[]}
        onAdd={onOpenForm}
        onEdit={handleClickEditProduct}
        onDelete={handleOpenConfirmModal}
        onSearch={handleSearchProduct}
      />
    </Box>
  );
};

export default ProductTable;
