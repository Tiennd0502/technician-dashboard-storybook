export enum STATUS {
  Deactivated,
  Activated,
}

export interface Product {
  id?: string;
  name: string;
  brand: string;
  service: string;
  status: number;
}

export type ProductParam = Omit<Product, 'id'>;
