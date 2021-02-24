import { BASE_URL } from "../constants";

const URLPatterns = {
  detail: (slug) => `${BASE_URL}/api/categories/${slug}.json`,
  list: () => `${BASE_URL}/api/categories.json`,
  content: (slug) => `${BASE_URL}/api/categories/${slug}/content.json`,
  tree: () => `${BASE_URL}/api/category-tree.json`,
};

export { URLPatterns };
