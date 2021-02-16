interface AncestorCategory {
  id: number;
  title: string;
  slug: string;
}

export interface ChildCategory extends AncestorCategory {
  children: AncestorCategory[];
  image: string | null;
  is_terminal_node: boolean;
}

export interface ICategory extends ChildCategory {
  slug: string;
  parent: number | null;
  ancestors: AncestorCategory[] | null;
  children: ChildCategory[] | null;
}

type Image = {
  alt: string;
  src: string;
  is_front_image: boolean;
};

export interface IProduct {
  id: number;
  title: string;
  full_title?: string;
  slug: string;
  price: number;
  short_desc?: string;
  full_desc: string;
  featured: boolean;
  in_stock: boolean;
  active: boolean;
  quantity: number;
  images: Image[];
  resourcetype: string;
}
