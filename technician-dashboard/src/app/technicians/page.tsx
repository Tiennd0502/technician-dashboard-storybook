'use client';

import { useCallback, useMemo, useState } from 'react';
import { Flex, Box, Heading, useDisclosure } from '@chakra-ui/react';

// Constants
import { SERVICES, PRODUCTS } from '@/__mocks__';
import { DEFAULT_PRODUCT_FILTER } from '@/constants';

// Types
import { Product, STATUS, Filter } from '@/interfaces';

// Components
import { ProductStatistics, ServiceList, Table, Technician, StatusLabel } from '@/components';

const Page = () => {
  const [productEdit, setProductEdit] = useState<Product>();
  const [productDelete, setProductDelete] = useState<string>('');
  const [productFilter, setProductFilter] = useState<Filter>(DEFAULT_PRODUCT_FILTER);

  const { isOpen: isOpenForm, onOpen: onOpenForm, onClose: onCloseForm } = useDisclosure();
  const {
    isOpen: isOpenConfirmModal,
    onOpen: onOpenConfirmModal,
    onClose: onCloseConfirmModal,
  } = useDisclosure();

  const handleCloseForm = useCallback(() => {
    productEdit && setProductEdit(undefined);
    onCloseForm();
  }, [onCloseForm, productEdit]);

  const handleOpenConfirmModal = useCallback(
    (id: string) => {
      setProductDelete(id);
      onOpenConfirmModal();
    },
    [onOpenConfirmModal],
  );

  const handleCloseConfirmModal = useCallback(() => {
    setProductDelete('');
    onCloseConfirmModal();
  }, [onCloseConfirmModal]);

  const handleSubmitProduct = useCallback(() => {}, []);

  const handleClickEditProduct = useCallback(
    (id: string) => {
      setProductEdit(PRODUCTS?.find((product) => product.id === id));
      onOpenForm();
    },
    [onOpenForm],
  );

  const handleSearchProduct = useCallback((value: string) => {
    setProductFilter((prev: Filter) => ({
      ...prev,
      name: value,
    }));
  }, []);

  const handleSortProduct = useCallback((value: Filter) => {
    setProductFilter((prev: Filter) => ({
      ...prev,
      ...value,
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
    <Box pr='5'>
      <Flex gap='5' flexWrap='wrap'>
        <Flex
          w={{
            base: '100%',
            xl: 'calc(67% - 10px)',
          }}
          flexDirection='column'
          justifyContent='space-between'
          gap='5'
          borderWidth='1px'
          borderColor='border.primary'
          borderRadius='md'
          p='7'
          order={{
            md: 1,
            xl: 1,
          }}
        >
          <Heading>About Services</Heading>
          <ServiceList list={SERVICES} />
        </Flex>
        <Box
          w={{
            sm: '100%',
            md: 'calc(50% - 10px)',
            xl: 'calc(33% - 10px)',
          }}
          order={{ md: 2, xl: 2 }}
        >
          <ProductStatistics />
        </Box>
        <Box
          w={{
            base: '100%',
            xl: 'calc(67% - 10px)',
          }}
          order={{ md: 4, xl: 3 }}
        >
          <Table
            title='Products listing'
            filter={productFilter}
            columns={productHeaderColumn}
            data={PRODUCTS}
            onAdd={onOpenForm}
            onEdit={handleClickEditProduct}
            onDelete={handleOpenConfirmModal}
            onSearch={handleSearchProduct}
          />
        </Box>
        <Box
          w={{
            base: '100%',
            md: 'calc(50% - 10px)',
            xl: 'calc(33% - 10px)',
          }}
          order={{ md: 3, xl: 4 }}
        >
          <Technician />
        </Box>
      </Flex>
    </Box>
  );
};

export default Page;
