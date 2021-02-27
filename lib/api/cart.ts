import axios from "axios";
import { BASE_URL } from "../constants";

// TODO: add tests for these ones

/** Supply user token */
if (typeof window !== 'undefined') {
    const token = window.localStorage.getItem('auth_token');
    axios.defaults.headers.common["Authorization"] = token; 
}

/** Attempts to obtain a cart object. There are 3 scenarios: 
 * 1) uuid is supplied, we get the corresponding object unambiguously;
 * 2) user token is supplied, we get the most recent cart object bind to this user 
 * (if there is none, then (3) scenario);
 * 3) we get a newly created cart object. */
const getRequest = async function getCart(uuid: string = ""){
    const res = await axios.get(`${BASE_URL}/api/basket/${uuid}`);
    return res.data
};

/** Add a product item with id=item_id to the cart. We attempt to obtain the cart's UUID
 * from localStorage. If it fails we perform getRequest() */ 
const addProduct = async function addProductToCart(product_id: number) {
    let cart_id = null;
    if (typeof window !== 'undefined')
        cart_id = window.localStorage.getItem('cart_id');
    if (cart_id === null) {
        const cart = await getRequest();
        cart_id = cart.id
    }
    if (cart_id === null) throw new Error("cart_id is still null somehow")
    const res = await axios.post(`${BASE_URL}/api/basket/items/`, { product_id });
    return res.data
}

const getCartItems = async function(cart_id: string = null) {
    if (cart_id === null) {
        if (typeof window !== 'undefined') {
            cart_id = window.localStorage.getItem('cart_id');
        }
        if (cart_id === null) {
            const cart = await getRequest();
            cart_id = cart.id
        }
    }
    const res = await axios.get(`${BASE_URL}/api/basket/${cart_id}`);
    const products = res.data.map(item => item.product);
    return [cart_id, products];
}

export { getRequest, addProduct, getCartItems };