import { useState, Fragment } from "react";
import Sidebar from "../../ui/Sidebar";
import Navbar from "../../ui/Navbar";
import Spacer from "../../ui/Spacer";
import { SidebarSkeleton } from "../../ui/Skeleton";
import { useCategory } from "../../../lib/hooks/useCategory";
import styles from "./index.module.scss";

const Layout = ({ children }) => {
  const { categories, isLoading, isError } = useCategory();
  const [sidebarShown, setSidebarShown] = useState(false);
  const toggleSidebar = () => setSidebarShown(!sidebarShown);
  return (
    <Fragment>
      <div className={styles.container}>
        <Navbar toggleSidebar={toggleSidebar} />
        <Spacer y={2} />
        <div className={styles["content-area"]}>{children}</div>
      </div>
      <div style={{ display: sidebarShown ? "block" : "none" }}>
        {isLoading ? (
          <SidebarSkeleton />
        ) : (
          <Sidebar
            items={categories}
            title="Shop By Category"
            hideSidebar={() => setSidebarShown(false)}
          />
        )}
      </div>
      <div
        style={{ display: sidebarShown ? "block" : "none" }}
        className={styles["screen-shaded"]}
        onClick={() => setSidebarShown(false)}
      ></div>
    </Fragment>
  );
};

export default Layout;
