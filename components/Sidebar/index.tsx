import { useState } from 'react'
import Link from "next/link";
import styles from "./index.module.scss";

const Sidebar = ({ items }) => {
  const List = ({ items, isNested }) => {
    const linkStyle = isNested ? null : "font-semibold";
    const itemStyle = isNested ? null : "mb-8";
    return (
      <ul>
        {items.map((item) => (
          <li key={item.id} className={itemStyle}>
            <div className="mb-3">
              <Link href={item.slug}>
                <a className={linkStyle}>{item.title}</a>
              </Link>
            </div>
            {item.children.length > 0 ? (
              <List items={item.children} isNested={true} />
            ) : null}
          </li>
        ))}
      </ul>
    );
  };
  return (
    <aside className={styles.sidebar}>
      <List items={items} isNested={false} />
    </aside>
  );
};

Sidebar.defaultProps = {
  title: null,
};

export default Sidebar;
