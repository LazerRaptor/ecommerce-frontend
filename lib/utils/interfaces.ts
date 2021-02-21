export interface ICategory {
  id: number; 
  title: string;
  slug: string;
  parent: number | null;
}

type Image = {
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
  images: Image[];
  extra: any;
}
