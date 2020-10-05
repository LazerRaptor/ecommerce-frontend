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
