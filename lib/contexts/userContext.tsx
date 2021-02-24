import { createContext, useState } from "react";


type A = number | string | null

interface userContextInterface {
  user: string | number,
  setUser: React.Dispatch<React.SetStateAction<A>>,
  cart: string,
  setCart: React.Dispatch<React.SetStateAction<A>>,
}

const UserContext = createContext<userContextInterface>(null);
UserContext.displayName = "UserContext";

const UserContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser, cart, setCart }}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContextProvider, UserContext };
