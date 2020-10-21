import { useState, Fragment } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import { SidebarSkeleton } from '../Skeleton';
import { useCategory } from "../../lib/hooks/useCategory";
import styles from "./index.module.scss";

const Layout = ({ children }) => {
  const { categories, isLoading, isError } = useCategory();
  const [sidebarShown, setSidebarShown] = useState(false);
  const toggleSidebar = () => setSidebarShown(!sidebarShown);
  return (
    <Fragment>
      <div className={styles.container}>
        <Navbar toggleSidebar={toggleSidebar} />
        <div className={styles["content-area"]}>{children}</div>
      </div>
      <div style={{ display: sidebarShown ? 'block' : 'none' }}>
        {
          isLoading ? (
            <SidebarSkeleton/>
          ) : (
            <Sidebar 
              items={categories} 
              title="Shop By Category" 
              hideSidebar={() => setSidebarShown(false)} 
            />
          )
        }
      </div>
      <div style={{ display: sidebarShown ? 'block' : 'none' }} className={styles['screen-shaded']}></div>
    </Fragment>
  );
};

export default Layout;
