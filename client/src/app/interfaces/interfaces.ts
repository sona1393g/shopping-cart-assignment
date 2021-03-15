export interface Banner {
  bannerImageUrl: string;
  bannerImageAlt: string;
  isActive: boolean;
  order: number;
  id: string;
}

export interface Category {
  name?: string;
  key?: string;
  description?: string;
  enabled?: boolean;
  order?: number;
  imageUrl?: string;
  id?: string;
}

export interface Product {
  name?: string;
  sku?: string;
  description?: string;
  price: number;
  stock?: number;
  imageURL?: string;
  id: string;
  category?: string;
  count: number;
  total?: number;
}

export interface Cart {
  totalItems: number;
  products: Product[];
}
