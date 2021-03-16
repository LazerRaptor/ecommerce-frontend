import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import useSWR from "swr";
import { BASE_URL } from "../constants";
import { ICart } from "../utils/interfaces";
import Cookie from "js-cookie";
import Button from "../../components/ui/Button";
import Loader from "../../components/ui/Loader";
import styled from "styled-components";

const RemoveBtn = styled.button`
  border: 0;
  outline: 0;
  text-decoration: underline;
  font-size: 0.8em;
  font-weight: 300;
  cursor: pointer;
`;

const useCart = function() {
  const fetcher = async function getOrCreateCart(url: string, id: string) {
    try {
      const response: AxiosResponse<ICart> = await axios.get(url+id);
      return response.data;
    } catch(error) {
      if (error.response.status === 404) {
        const response: AxiosResponse<ICart> = await axios.post(url); 
        Cookie.set('cart_id', response.data.id);
        return response.data;
      }
      throw error;
    }
  };

  const cartId = Cookie.get('cart_id');
  const { data: cart, error, mutate } = useSWR([`${BASE_URL}/api/basket/`, cartId], fetcher);

  const AddButton = function({ productId, quantity = 1 }: { productId: number, quantity?: number }) {
    const [loading, setLoading] = useState<boolean>(false);
    const addItem = async () => {
      setLoading(true);
      try {
        await axios.post(`${BASE_URL}/api/basket/${cartId}/`, { product: productId, quantity });
        mutate()
      } catch(error) {
        console.warn(error.message);
      } finally {
        setLoading(false);
      }
    }

    const removeItem = async () => {
      setLoading(true);
      try {
        await axios.delete(`${BASE_URL}/api/basket/${cartId}/`, { data: { product: productId } });
        mutate()
      } catch(error) {
        console.warn(error.message);
      } finally {
        setLoading(false);
      }
    }

    const inCart = ((): boolean => {
      if (!cart && !error) return false;
      const productIds = cart.items.map(item => item.product.id);
      return productIds.includes(productId);
    })();

    if (loading) return <Button><Loader /><span style={{ marginLeft: "1rem" }}>Loading...</span></Button>;
    else if (inCart) return <Button onClick={() => removeItem()}>Remove from Cart</Button>;
    else return <Button onClick={() => addItem()}>Add to Cart</Button>;

  }

  const RemoveButton = ({ productId }: { productId: number }) => {
    const [loading, setLoading] = useState(false);
    const remove = async () => {
      setLoading(true);
      try {
        await axios.delete(`${BASE_URL}/api/basket/${cartId}/`, { data: { product: productId } });
        mutate();
      } catch(error) {
        console.warn(error.message);
      } finally {
        setLoading(false);
      }
    }
    return loading ? <Loader /> : <RemoveBtn onClick={() => remove()}>Remove</RemoveBtn>
  }

  return {
    cart,
    error,
    isLoading: !cart && !error,
    mutate,
    AddButton,
    RemoveButton
  }
};

export { useCart };
