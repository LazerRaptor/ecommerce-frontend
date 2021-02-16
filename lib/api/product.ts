import axios from "axios";
import { BASE_URL } from "../constants";

const ProductAPI = {
  getList: async (field, value) => {
    const response = await axios.get(
      `${BASE_URL}/products.json/?${field}=${value}`
    );
    return response.data;
  },
  getDetail: async (slug) => {
    const response = await axios.get(`${BASE_URL}/products/${slug}.json`);
    return response.data;
  },
  getProductsStaticPaths: async () => {
    const response = await axios.get(`${BASE_URL}/paths/products.json`);
    return response.data;
  },
};

export { ProductAPI };
