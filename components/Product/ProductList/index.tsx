import Item from "./ListItem";
import styles from "./index.module.scss";

const ProductListView = ({ products }) => {
  return (
    <ul className={styles.grid}>
      {products.map((product) => (
        <li key={product.id}>
          <Item item={product} />
        </li>
      ))}
    </ul>
  );
};

export default ProductListView;
