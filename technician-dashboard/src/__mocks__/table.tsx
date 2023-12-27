import { STATUS } from '@/interfaces';
import { StatusLabel } from '@/components';

export const PRODUCTS = [
  {
    id: '1',
    name: 'Washing machine',
    brand: 'Hitachi',
    service: 'Repair',
    status: 1,
  },
  {
    id: '2',
    name: 'Air conditioner',
    brand: 'LG',
    service: 'Installation',
    status: 0,
  },
  {
    id: '3',
    name: 'Smart TV',
    brand: 'OnePlus',
    service: 'Uninstallation',
    status: 1,
  },
  {
    id: '4',
    name: 'Water purifier',
    brand: 'Kent',
    service: 'Repair',
    status: 1,
  },
];

const customViewStatus = (value: string | number | boolean) => (
  <StatusLabel value={value as STATUS} />
);

export const PRODUCT_HEADER_COLUMNS = [
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
    onSort: () => null,
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
