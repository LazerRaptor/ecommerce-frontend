import { useState, Fragment } from "react";
import Specifics from "./Snippets";
import StarRating from "../../core/StarRating";
import Gallery from "../../core/Gallery";
import Spacer from "../../ui/Spacer";
import Button from "../../ui/Button";
import styles from "./index.module.scss";
import Favorite from "../../core/Favorite";

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
        <StarRating grade="3.5" votes="84" size={18} />
      </div>
        <div className={styles.gallery}>
          <Gallery images={product.images} />
        </div>
        <div className={styles["main-area"]}>
          <div>
            <div className={styles.price}>
              ${product.price}
            </div>
            <Spacer y={3} />
            <Specifics product={product} />
            <Spacer y={3} />
            <div className="flex">
              <Button title="ADD TO CART" variant="primary" isBold isFullWidth />
              <Spacer x={2} />
              <Favorite size={48} color="primary" />
            </div>
            <Spacer y={3} />
            <Description
            fullDesc={product.full_desc}
            shortDesc={product.short_desc}
          />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDetail;
