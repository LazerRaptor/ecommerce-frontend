import StarRating from '../../StarRating';
import Gallery from "../../Gallery";
import styles from "./index.module.scss";

const ProductDetail = ({ product }) => {
  const title = product.full_title ? product.full_title : product.title;
  const desc = product.full_desc ? product.full_desc : product.desc;
  return (
    <div className={styles["grid-container"]}>
      <div className={styles["gallery-area"]}>
        <Gallery images={product.images} />
      </div>
      <div className={styles["desc-area"]}>
        <h1 className={styles.title}>{title}</h1>
        <StarRating />
        <p>{desc}</p>
      </div>
      <div className={styles["options-area"]}></div>
    </div>
  );
};

export default ProductDetail;
