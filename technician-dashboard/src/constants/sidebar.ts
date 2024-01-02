import {
  DashboardIcon,
  HistoryIcon,
  ReportIcon,
  TechnicianIcon,
  FeedbackIcon,
  SettingIcon,
} from '@/components';
import { ROUTES } from './routes';

export const MENU_ITEM_LIST = [
  {
    id: '1',
    leftIcon: DashboardIcon,
    label: 'Dashboard',
    href: '#',
  },
  {
    id: '2',
    leftIcon: DashboardIcon,
    label: 'Product & services',
    href: ROUTES.PRODUCT_AND_SERVICES,
  },
  {
    id: '3',
    leftIcon: TechnicianIcon,
    label: 'Technicians',
    href: '#',
  },
  {
    id: '4',
    leftIcon: ReportIcon,
    label: 'Reports',
    href: '#',
  },
  {
    id: '5',
    leftIcon: FeedbackIcon,
    label: 'Feedbacks',
    href: '#',
  },
  {
    id: '6',
    leftIcon: HistoryIcon,
    label: 'History',
    href: '#',
  },
  {
    id: '7',
    leftIcon: SettingIcon,
    label: 'Settings',
    href: '#',
  },
];
