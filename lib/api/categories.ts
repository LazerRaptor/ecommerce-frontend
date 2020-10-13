import axios from "axios";
import { BASE_URL } from "../utils/constants";


export const CategoryAPI = {
    getDetail: async (slug) => {
        return (await axios.get(`${BASE_URL}/categories/${slug}`)).data
    },
    getList: async () => {
        return (await axios.get(`${BASE_URL}/categories`)).data
    },
    getRoot: async () => {
        return (await axios.get(`${BASE_URL}/categories/root`)).data
    },
    getRelatedProducts: async (slug) => {
        return (await axios.get(`${BASE_URL}/categories/${slug}/products`)).data
    }
}