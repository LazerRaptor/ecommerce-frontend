import Error from "../components/error-page/";
import { useContext, useEffect } from "react";
import { LayoutContext } from "../lib/contexts/layoutContext";

const Custom404 = () => {
  const { setNavbar, setSidebar } = useContext(LayoutContext);
  useEffect(() => {
    setNavbar(false);
    setSidebar(false);
  });
  return <Error code={404} message="Page Not Found" />;
};

export default Custom404;
