import axios from "axios";
import { BASE_URL } from "../constants";
import Button from "../../components/ui/Button";
import { ICart } from "../utils/interfaces";
import Cookie from "js-cookie";
import { useState, useEffect } from "react";

const useCart = function () {
  const [cart, setCart] = useState<null | ICart>(null);
  const [error, setError] = useState<Error | null>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    let id = Cookie.get("cart_id");
    (async () => {
      try {
        if (id === undefined) {
          const res = await axios.post(`${BASE_URL}/api/basket/`);
          id = res.data.id;
          Cookie.set("cart_id", id);
          setCart(res.data);
          setIsLoading(false);
        } else {
          const res = await axios.get(`${BASE_URL}/api/basket/${id}`);
          setCart(res.data);
          setIsLoading(false);
        }
      } catch (error) {
        setError(error);
      }
    })();
  });
  return {
    cart,
    isLoading,
    isError: error,
  };
};

export { useCart };
