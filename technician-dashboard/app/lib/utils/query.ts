import { Filter } from '@/lib/interfaces';

export const generateQuery = (filter: Filter): string =>
  `?${Object.entries(filter)
    .map(([key, value]) => `${key}=${value}`)
    .join('&')}`;
