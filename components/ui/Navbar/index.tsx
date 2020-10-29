import Link from "next/link";
import { RiUser3Line, RiShoppingCartLine } from "react-icons/ri";
import { HiMenu } from "react-icons/hi";
import Logo from "../../icons/Logo";
import styles from "./index.module.scss";

const Navbar = (props) => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles["nav-start"]}>
        <li className={styles["nav-item"]}>
          <HiMenu size={24} onClick={() => props.toggleSidebar()} />
        </li>
        <li className={styles["nav-item"]}>
          <Link href="/">
            <a><Logo /></a>
          </Link>
        </li>
      </ul>

      <ul className={styles["nav-end"]}>
        <li className={styles["nav-item"]}>
          <Link href="/account/login">
            <a className={styles["nav-link"]}>
              <RiUser3Line size={24} />
              <span className={styles.caption}>Account</span>
            </a>
          </Link>
        </li>
        <li className={styles["nav-item"]}>
          <Link href="/cart">
            <a className={styles["nav-link"]}>
              <RiShoppingCartLine size={24} />
              <span className={styles.caption}>Cart</span>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
