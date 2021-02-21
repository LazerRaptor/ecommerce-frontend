import { BASE_URL } from "../constants";


const URLPatterns = {
  list: (field, value) => `${BASE_URL}/api/products.json/?${field}=${value}`,
  detail: (slug) => `${BASE_URL}/api/products/${slug}.json`,
  staticPaths: () => `${BASE_URL}/api/paths/products.json`,
};

export { URLPatterns };
