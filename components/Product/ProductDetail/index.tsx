import { useState, Fragment } from "react";
import Specifics from "./Specifics";
import StarRating from "../../StarRating";
import Gallery from "../../Gallery";
import Spacer from "../../Spacer";
import Button from "../../Button";
import styles from "./index.module.scss";

const Description = ({ fullDesc, shortDesc }) => {
  const [descShown, setDescShown] = useState(false);
  const desc = descShown ? fullDesc : shortDesc;
  return (
    <Fragment>
      <div className={styles.desc}>{desc}</div>
      <button onClick={() => setDescShown(!descShown)} className={styles['btn-desc-toggler']}>
        {descShown ? "Hide" : "Show more"}
      </button>
    </Fragment>
  );
};

const ProductDetail = ({ product }) => {
  return (
    <Fragment>
      <div className={styles["grid-container"]}>
      <div className={styles.header}>
        <h1 className={styles.title}>{product.title}</h1>
        <StarRating grade="3.5" votes="84" size="1.2em" />
      </div>
        <div className={styles.gallery}>
          <Gallery images={product.images} />
        </div>
        <div className={styles["main-area"]}>
          <div>
            <Specifics product={product} />
            <Spacer y={1.4} />
            <Button title="ADD TO CART" variant="primary" isBold isFullWidth />
          </div>
        </div>
        <div className={styles.footer}>
          <Description
            fullDesc={product.full_desc}
            shortDesc={product.short_desc}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDetail;
