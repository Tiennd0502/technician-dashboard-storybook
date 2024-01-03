export const MOCKAPI_URL = process.env.MOCKAPI_BASE_URL;

export const MOCKAPI_SECOND_URL = process.env.MOCKAPI_SECOND_URL;

export const API_ROUTES = {
  PRODUCT: `${MOCKAPI_URL}/products/`,
  SERVICES: `${MOCKAPI_SECOND_URL}/services/`,
  CATEGORIES: `${MOCKAPI_SECOND_URL}/categories/`,
};

export const ROUTES = {
  DASHBOARD: '/dashboard',
  PRODUCT_AND_SERVICES: '/product-and-services',
};
