import { StatusLabel } from '@/ui/commons';
import { STATUS } from '../interfaces';

export const generateProductHeaderColumn = () => [
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
    customView: (value: string | number | boolean) => <StatusLabel value={value as STATUS} />,
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
