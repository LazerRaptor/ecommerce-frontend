import axios from "axios";
import { BASE_URL } from "../utils/constants";

export const ProductAPI = {
  get: async (field, value) =>
    (await axios.get(`${BASE_URL}/products/?${field}=${value}`)).data,
  getDetail: async (slug) =>
    (await axios.get(`${BASE_URL}/products/${slug}`)).data,
};
