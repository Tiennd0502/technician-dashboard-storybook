import { LayoutProps } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { Filter } from './filter';

export interface TableHeader {
  key: string;
  label: string;
  width: LayoutProps['w'];
  onSort?: (value: Filter) => void;
  isAction?: boolean;
  isCheckbox?: boolean;
  customView?: (value: string | number | boolean) => ReactElement;
}

export interface TableData {
  id: string;
  [key: string]: string | number | boolean;
}
