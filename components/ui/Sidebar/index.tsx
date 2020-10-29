import Link from "next/link";
import { MdClose } from "react-icons/md";
import Spacer from "../Spacer";
import { classnames } from '../../../lib/utils/classnames';
import styles from "./index.module.scss";
import { Fragment } from "react";



const List = ({ items, isNested=false }) => {
  const listClasses = classnames({
    [styles.list]: true,
    [styles['list-nested']]: isNested
  })
  return (
    <ul className={listClasses}>
      {items.map(item => (
        <li key={item.id} className={styles.item} >
          <Link href={`/category/${item.slug}`}>
            <a>{item.title}</a>
          </Link>
          <Spacer y={0.75} />
          {item.children.length > 0 ? (
            <Fragment>
              <List items={item.children} isNested />
              <Spacer y={2} />
            </Fragment>
          ) : null}
        </li>
      ))}
    </ul>
  )
}

const Sidebar = ({ items, title = null, hideSidebar }) => {
  return (
    <aside className={styles.sidebar}>
      <span onClick={() => hideSidebar()} className={styles.close}>
        <MdClose size="1.6em" />
      </span>
      <h1 className={styles.title}>{title}</h1>
      <List items={items} />
    </aside>
  );
};

export default Sidebar;
