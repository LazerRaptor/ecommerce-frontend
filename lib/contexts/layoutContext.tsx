import { createContext, useState } from "react";

interface layoutContextInterface {
  sidebar: boolean;
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  navbar: boolean;
  setNavbar: React.Dispatch<React.SetStateAction<boolean>>;
}

const LayoutContext = createContext<layoutContextInterface>(null);
LayoutContext.displayName = "LayoutContext";

const LayoutContextProvider = (props) => {
  const [sidebar, setSidebar] = useState(false);
  const [navbar, setNavbar] = useState(true);
  return (
    <LayoutContext.Provider value={{ sidebar, setSidebar, navbar, setNavbar }}>
      {props.children}
    </LayoutContext.Provider>
  );
};

export { LayoutContextProvider, LayoutContext };
