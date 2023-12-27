import { ReactElement } from 'react';

export interface Menu {
  id: string;
  leftIcon: () => ReactElement;
  label: string;
  href: string;
}
