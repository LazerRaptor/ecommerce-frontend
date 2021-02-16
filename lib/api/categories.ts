import axios from "axios";
import { BASE_URL } from "../constants";

const URLPatterns = {
  detail: (slug) => `${BASE_URL}/categories/${slug}.json`,
  list: () => `${BASE_URL}/categories.json`,
  content: (slug) => `${BASE_URL}/categories/${slug}/content.json`,
  tree: () => `${BASE_URL}/category-tree.json`,
};

const CategoryAPI = {
  getDetail: async (slug) => {
    const response = await axios.get(URLPatterns.detail(slug));
    return response.data;
  },
  getList: async () => {
    const response = await axios.get(URLPatterns.list());
    return response.data;
  },
  getContent: async (slug) => {
    const response = await axios.get(URLPatterns.content(slug));
    return response.data;
  },
  getTree: async () => {
    const response = await axios.get(URLPatterns.tree());
    return response.data;
  },
};

export { CategoryAPI, URLPatterns };
