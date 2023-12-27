export enum SORT_TYPE {
  Asc = 'asc',
  Desc = 'desc',
}

export interface Filter {
  [key: string]: string;
  sortBy: string;
  order: SORT_TYPE;
}
