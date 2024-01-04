import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { Product, Filter } from '@/lib/interfaces';
import { API_ROUTES } from '@/lib/constants';
import { APIs } from '@/lib/services';

import { generateQuery } from '@/lib/utils';

export const useFetchProducts = (filter: Filter) =>
  useQuery({
    queryKey: ['products', generateQuery(filter)],
    queryFn: () =>
      APIs.get<Product[]>(`${API_ROUTES.PRODUCT}${filter ? generateQuery(filter) : ''}`),
  });

export const useFetchProduct = (id: string) =>
  useQuery({
    queryKey: [`products/${id}`],
    queryFn: () => APIs.get<Product>(`${API_ROUTES.PRODUCT}${id}`),
  });

export const useProduct = () => {
  const queryClient = useQueryClient();

  const createProduct = useMutation({
    mutationFn: (payload: Product) => APIs.post(API_ROUTES.PRODUCT, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });

  const editProduct = useMutation({
    mutationFn: (payload: Product) => APIs.put(`${API_ROUTES.PRODUCT}${payload.id}`, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });

  const deleteProduct = useMutation({
    mutationFn: (id: string) => APIs.remove(`${API_ROUTES.PRODUCT}${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });

  return { createProduct, editProduct, deleteProduct };
};
