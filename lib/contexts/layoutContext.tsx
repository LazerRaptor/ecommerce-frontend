import { createContext, useState } from "react";

const defaultValue = {
  sidebar: false,
  setSidebar: (bool: boolean) => {},
  navbar: true,
  setNavbar: (bool: boolean) => {},
};

const LayoutContext = createContext(defaultValue);
LayoutContext.displayName = "LayoutContext";

const LayoutContextProvider = (props) => {
  const [sidebar, setSidebar] = useState(defaultValue.sidebar);
  const [navbar, setNavbar] = useState(defaultValue.navbar);
  return (
    <LayoutContext.Provider value={{ sidebar, setSidebar, navbar, setNavbar }}>
      {props.children}
    </LayoutContext.Provider>
  );
};

export { LayoutContextProvider, LayoutContext };
