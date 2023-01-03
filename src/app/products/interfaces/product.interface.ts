export const productCategories = ['refrescos', 'galletas'] as const;
type ProductCategories = typeof productCategories[number];

export interface Product {
  _id: string;
  name: string;
  description: string;
  category: ProductCategories;
  price: number;
  created_at: Date;
  updated_at: Date;
}
