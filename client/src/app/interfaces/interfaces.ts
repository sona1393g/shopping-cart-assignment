export interface IBanner {
  bannerImageUrl: string;
  bannerImageAlt: string;
  isActive: boolean;
  order: number;
  id: string;
}

export interface ICategory {
  name?: string;
  key?: string;
  description?: string;
  enabled?: boolean;
  order?: number;
  imageUrl?: string;
  id?: string;
}

export interface IProduct {
  name?: string;
  sku?: string;
  description?: string;
  price: number;
  stock?: number;
  imageURL?: string;
  id?: string;
  category?: string;
  count: number;
  total?: number;
}

export interface ICART {
  totalItems: number;
  products: IProduct[];
}
