export interface IProduct {
  name: string;
  category: string;
  image: string;
  price: number;
  specialPrice?: number;
  brand: string;
  rate: number;
  initialStock: number;
  currentStock: number;
}

// Seleciona só as propriedades que queremos
export type IProductsGroups = Pick<IProduct, 'name' | 'image' | 'currentStock'>;

export type IProductsWhitoutStock = Omit<IProduct, 'stock'>;
