import { ERROR_MESSAGE } from './messages';

export const PRODUCT_RULES = {
  name: {
    required: ERROR_MESSAGE.FIELD_REQUIRED('Product Name'),
  },
  brand: {
    required: ERROR_MESSAGE.FIELD_REQUIRED('Brand Name'),
  },
  service: {
    required: ERROR_MESSAGE.FIELD_REQUIRED('Service Name'),
  },
};
