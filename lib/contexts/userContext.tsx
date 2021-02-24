import { createContext, useState } from "react";


type A = number | string | null

interface userContextInterface {
  user: string | number,
  setUser: React.Dispatch<React.SetStateAction<A>>,
  cart: string,
  setCart: React.Dispatch<React.SetStateAction<A>>,
}

const UserContext = createContext<userContextInterface>(null);
UserContext.displayName = "userContext";

const cartID = window.localStorage.getItem('cart');
const userID = window.localStorage.getItem('user');

const UserContextProvider = (props) => {
  const [user, setUser] = useState(userID);
  const [cart, setCart] = useState(cartID);
  return (
    <UserContext.Provider value={{ user, setUser, cart, setCart }}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContextProvider, UserContext };
