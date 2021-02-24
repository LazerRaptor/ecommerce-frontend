import axios from "axios";
import { BASE_URL } from "../constants";
import { RESTError } from "../utils/errors";

const URLPatterns = {
    /** Create or retrieve. Only GET allowed */ 
    cart: (uuid) => `${BASE_URL}/api/baskets.json/${uuid}`,
    /** Get a list of items in the cart. PUT, DELETE allowed*/
    content: () => `${BASE_URL}/api/basket/items.json`,
    /** Manage an item with a given ID associated with customer's cart */
    item: (id) => `${BASE_URL}/api/basket/items.json/${id}`
}

type Data = {
    product: number;
    cart?: string;
    qty?: number;
};

const addProduct = async (data: Data) => {
    const res = await axios.post(URLPatterns.content(), data);
    if (res.status !== 200) {
        const error = new RESTError("An error occured while posing the data");
        error.info = res.statusText;
        error.status = res.status;
        throw error;
    }
    return res.data;
}

export { URLPatterns, addProduct };