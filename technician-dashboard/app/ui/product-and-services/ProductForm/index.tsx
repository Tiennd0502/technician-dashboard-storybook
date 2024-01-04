'use client';

import React, { memo, useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

// Types
import { Product, STATUS } from '@/lib/interfaces';

// Constants
import { PRODUCT_RULES } from '@/lib/constants';

// Hooks
import { useProduct } from '@/lib/hooks';

// Components
import { Input } from '@/ui/components';

interface ProductFromProps {
  product?: Product;
}

const ProductFrom = ({ product }: ProductFromProps) => {
  const router = useRouter();
  const toast = useToast();

  const {
    createProduct: { mutate: createProduct, isPending: isCreating },
    editProduct: { mutate: editProduct, isPending: isEditing },
  } = useProduct();

  const { control, handleSubmit } = useForm<Product>({
    reValidateMode: 'onSubmit',
    defaultValues: {
      ...product,
      status: product?.status || STATUS.Deactivated,
    },
  });

  const handleClose = useCallback(() => router.back(), [router]);

  const handleSubmitProduct = useCallback(
    (data: Product) => {
      const isUpdate = product?.id;
      const mutate = isUpdate ? editProduct : createProduct;

      mutate(data, {
        onSuccess: () => {
          toast({
            title: `Product ${isUpdate ? 'updated' : 'created'}.`,
            status: 'success',
            duration: 9000,
            isClosable: true,
          });
          router.refresh();
        },
        onError: () => {
          toast({
            title: `Failed to ${isUpdate ? 'update' : 'create'} the product.`,
            status: 'error',
            duration: 9000,
            isClosable: true,
          });
        },
      });
    },
    [product?.id, editProduct, createProduct, toast, router],
  );

  const isLoading = isCreating || isEditing;

  return (
    <VStack as='form' onSubmit={handleSubmit(handleSubmitProduct)} id='form' spacing='2' w='full'>
      <Controller
        control={control}
        name='name'
        rules={PRODUCT_RULES.name}
        render={({ field: { value, ...field }, fieldState: { error } }) => (
          <Input
            {...field}
            error={error?.message || ''}
            label='Product Name:'
            defaultValue={value}
            placeholder='Product Name'
          />
        )}
      />
      <Controller
        control={control}
        name='brand'
        rules={PRODUCT_RULES.service}
        render={({ field: { value, ...field }, fieldState: { error } }) => (
          <Input
            {...field}
            error={error?.message || ''}
            label='Brand Name:'
            defaultValue={value}
            placeholder='Brand Name'
          />
        )}
      />
      <Controller
        control={control}
        name='service'
        rules={PRODUCT_RULES.service}
        render={({ field: { value, ...field }, fieldState: { error } }) => (
          <Input
            {...field}
            error={error?.message || ''}
            label='Service:'
            defaultValue={value}
            placeholder='Service'
          />
        )}
      />
      <Controller
        control={control}
        name='status'
        render={({ field: { value, ...field } }) => (
          <FormControl>
            <FormLabel>Status:</FormLabel>
            <RadioGroup
              defaultValue={value?.toString() || STATUS.Deactivated.toString()}
              {...field}
            >
              <Flex gap='3'>
                <Radio {...field} value={STATUS.Activated.toString()}>
                  Activated
                </Radio>
                <Radio value={STATUS.Deactivated.toString()}>Deactivated</Radio>
              </Flex>
            </RadioGroup>
          </FormControl>
        )}
      />
      <Flex w='full'>
        <Button type='submit' form='form' ml='auto' mr='6' isLoading={isLoading}>
          Submit
        </Button>
        <Button variant='outline' isDisabled={isLoading} onClick={handleClose}>
          Cancel
        </Button>
      </Flex>
    </VStack>
  );
};

export default memo(ProductFrom);
