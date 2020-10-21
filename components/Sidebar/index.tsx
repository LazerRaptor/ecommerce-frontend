import Link from "next/link";
import { MdClose } from "react-icons/md";
import styles from "./index.module.scss";

const Sidebar = ({ items, title=null, hideSidebar }) => {
  const List = ({ items }) => {
    return (
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.id} className={styles.item}>
            <div className={styles["item-title"]}>
              <Link href={`/category/${item.slug}`}>
                <a>{item.title}</a>
              </Link>
            </div>
            <ul className={styles["list-nested"]}>
              <li className={styles.item}>
                <ul>
                  {item.children.map((child) => (
                    <li key={child.id} className={styles.item}>
                      <Link href={`/category/${child.slug}`}>
                        <a className={styles["item-child"]}>{child.title}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    );
  };
  return (
    <aside className={styles.sidebar}>
      <span onClick={() => hideSidebar()} className={styles.close}>
        <MdClose size="1.6rem" />
      </span>
      <h1 className={styles.title}>{title}</h1>
      <List items={items} />
    </aside>
  );
};

export default Sidebar;
