import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "../constants";
import Button from "../../components/ui/Button";
import { ICart, TItem } from "../utils/interfaces";
import Cookie from "js-cookie";
import { useState, useEffect } from "react";

const useCart = function () {
  const [cartId, setCartId] = useState<string>("");
  const [cartItems, setCartItems] = useState<TItem[]>();
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [count, setCount] = useState(0);

  // either get id from cookie or perform post to get a new one;
  const getCartId = async function(): Promise<string> {
    let id = Cookie.get('cart_id');
    if (id === undefined) {
      try { 
        const response: AxiosResponse<ICart> = await axios.post(`${BASE_URL}/api/basket/`);
        id = response.data.id;
      } catch(error) {
        setError(error);
      }
    }
    return id;
  }

  // must run after getCartId 
  const getCartItems = async (id: string) => {
    try {
      const response: AxiosResponse<ICart> = await axios.get(`${BASE_URL}/api/basket/${id}/`);
      setCartItems(response.data.items);
      setIsLoading(false);
      Cookie.set('cart_id', response.data.id);
    } catch(error) {
      setError(error);
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const id = await getCartId();
      setCartId(id);
      getCartItems(id);
    })();
  }, [count]);

  const AddButton = function({ productId, quantity = 1 }: { productId: number, quantity?: number } ) {

    const removeItem = async () => {
      try { 
        await axios.delete(`${BASE_URL}/api/basket/${cartId}/`, { data: { product: productId } });
        setCount(count-1)
      } catch(error) {
        setError(error);
      };
    };
    const addItem = async () => {
      try { 
        await axios.post(`${BASE_URL}/api/basket/${cartId}/`, { product: productId, quantity });
        setCount(count+1)
      } catch(error) {
        setError(error);
      };
    };
    const inCart = (): boolean => {
      if (!!cartItems) {
        const cartItemsIds = cartItems.map(item => item.product.id);
        return cartItemsIds.includes(productId);
      } else return false;
    }
    return isLoading ? <Button title="Loading..." size={16} /> :
            inCart() ? <Button title="Remove from cart" size={16} onClick={() => removeItem()} />
                     : <Button title="Add to cart" size={16} onClick={() => addItem()} /> 
  }

  return {
    cartItems,
    error,
    isLoading,
    AddButton
  }
};

export { useCart };
