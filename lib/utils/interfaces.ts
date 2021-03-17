export interface ICategory {
  id: number;
  title: string;
  slug: string;
  parent: number | null;
}

export type TImage = {
  id: number;
  alt: string;
  src: string;
  is_showcase: boolean;
};

export interface IProduct {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  featured: boolean;
  active: boolean;
  images: TImage[];
  extra: any;
}

export type TItem = {
  quantity: number,
  product: IProduct,
}

export interface ICart {
  id: string;
  owner: number;
  items: TItem[];
  status: "open" | "submitted";
  total: number;
}

export interface IProfile {
  id?: number;
  first_name: string;
  last_name: string;
  address: string;
  phone: string; 
}