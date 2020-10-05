import { useState } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import { useCategory } from "../../lib/hooks/useCategory";
import styles from "./index.module.scss";

const Layout = ({ children }) => {
  const { categories, isLoading, isError } = useCategory();
  const [sidebarShown, setSidebarShown] = useState(true);
  const toggleSidebar = () => setSidebarShown(!sidebarShown);
  return (
    <div className={styles["grid-container"]}>
      <div className={styles["nav-area"]}>
        <Navbar toggleSidebar={toggleSidebar} />
      </div>
      <div
        className={styles["sidebar-area"]}
        style={{ width: sidebarShown ? "20rem" : "0px" }}
      >
        {isLoading ? <p>Loading...</p> : <Sidebar items={categories} />}
      </div>
      <div className={styles["content-area"]}>{children}</div>
    </div>
  );
};

export default Layout;
