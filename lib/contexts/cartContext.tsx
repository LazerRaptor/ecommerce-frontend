import { createContext, useState, useEffect } from "react";
import { IProduct } from "../utils/interfaces";

const CartContext = createContext(null);

function CartContextProvider(props) {
  const [cartItems, setCartItems] = useState<Array<IProduct>>([]);
  const addToCart = function(product: IProduct) {
    setCartItems([...cartItems, product]);
  };
  const removeFromCart = function(product: IProduct) {
    setCartItems(cartItems.filter(item => item.id !== product.id));
  };
  /** Check if product is in cart */
  const inCart = function(product: IProduct) {
    const productIDs = cartItems.map(item => item.id);
    return productIDs.includes(product.id)
  }
  useEffect(() => {
    if (cartItems.length === 0) {
      try {
        let cart = JSON.parse(window.localStorage.getItem('cart')) || [];
        setCartItems(cart);
      } catch {};
    } else {
      try {
        let cart = JSON.stringify(cartItems);
        window.localStorage.setItem('cart', cart);
      } catch {};
    }
  }, [cartItems.length])
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, inCart }}>
      {props.children}
    </CartContext.Provider>
  )
}

export { CartContext, CartContextProvider };