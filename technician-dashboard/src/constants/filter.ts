import { SORT_TYPE } from '@/interfaces';

export const PRODUCT_LIMIT = '5';

export const DEFAULT_PRODUCT_FILTER = {
  name: '',
  sortBy: 'name',
  order: SORT_TYPE.Asc,
  page: '1',
  limit: PRODUCT_LIMIT,
};
