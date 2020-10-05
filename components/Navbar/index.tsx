import Link from "next/link";
import { RiUser3Line, RiShoppingCartLine } from "react-icons/ri";
import { MdMenu } from "react-icons/md";
import BrandLogo from "../SVG/BrandLogo";
import styles from "./index.module.scss";

const Navbar = (props) => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles["nav-start"]}>
        <li className={styles["nav-item"]}>
          <MdMenu size="1.4em" onClick={() => props.toggleSidebar()} />
        </li>
        <li className={styles["nav-item"]}>
          <Link href="/">
            <a>
              <BrandLogo />
            </a>
          </Link>
        </li>
      </ul>

      <ul className={styles["nav-end"]}>
        <li className={styles["nav-item"]}>
          <Link href="/auth">
            <a className="flex items-center">
              <RiUser3Line size="1.4em" />{" "}
              <span className="ml-1 text-sm">Account</span>
            </a>
          </Link>
        </li>
        <li className={styles["nav-item"]}>
          <Link href="/cart">
            <a className="flex items-center">
              <RiShoppingCartLine size="1.4em" />{" "}
              <span className="ml-1 text-sm">Cart</span>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
