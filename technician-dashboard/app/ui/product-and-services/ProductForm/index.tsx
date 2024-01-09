'use client';

import React, { memo, useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
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
import { Input } from '@/ui/commons';
import { removeSpaces } from '@/lib/utils';

interface ProductFromProps {
  title?: string;
  isOpen: boolean;
  product?: Product;
  onClose: VoidFunction;
}

const ProductFrom = ({ title = 'Add Product', product, isOpen, onClose }: ProductFromProps) => {
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
          onClose();
          toast({
            position: 'top-right',
            title: `Product ${isUpdate ? 'updated' : 'created'}.`,
            status: 'success',
            duration: 9000,
            isClosable: true,
          });
          router.refresh();
        },
        onError: () => {
          onClose();
          toast({
            position: 'top-right',
            title: `Failed to ${isUpdate ? 'update' : 'create'} the product.`,
            status: 'error',
            duration: 9000,
            isClosable: true,
          });
        },
      });
    },
    [product?.id, editProduct, createProduct, toast, router, onClose],
  );

  const isLoading = isCreating || isEditing;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent borderRadius='md' p='7' minW='90%'>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack
            as='form'
            onSubmit={handleSubmit(handleSubmitProduct)}
            id='form'
            spacing='2'
            w='full'
          >
            <Controller
              control={control}
              name='name'
              rules={PRODUCT_RULES.name}
              render={({ field: { value, onChange, ...field }, fieldState: { error } }) => (
                <Input
                  {...field}
                  error={error?.message || ''}
                  label='Product Name:'
                  value={removeSpaces(value)}
                  placeholder='Product Name'
                  onChange={onChange}
                  onBlur={() => {
                    onChange(removeSpaces(value, true));
                  }}
                />
              )}
            />
            <Controller
              control={control}
              name='brand'
              rules={PRODUCT_RULES.service}
              render={({ field: { value, onChange, ...field }, fieldState: { error } }) => (
                <Input
                  {...field}
                  error={error?.message || ''}
                  label='Brand Name:'
                  placeholder='Brand Name'
                  value={removeSpaces(value)}
                  onChange={onChange}
                  onBlur={() => {
                    onChange(removeSpaces(value, true));
                  }}
                />
              )}
            />
            <Controller
              control={control}
              name='service'
              rules={PRODUCT_RULES.service}
              render={({ field: { value, onChange, ...field }, fieldState: { error } }) => (
                <Input
                  {...field}
                  error={error?.message || ''}
                  label='Service:'
                  placeholder='Service'
                  value={removeSpaces(value)}
                  onChange={onChange}
                  onBlur={() => {
                    onChange(removeSpaces(value, true));
                  }}
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
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default memo(ProductFrom);
