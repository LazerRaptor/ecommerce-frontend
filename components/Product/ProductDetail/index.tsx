import { useState, Fragment } from "react";
import Specifics from "./Specifics";
import StarRating from "../../StarRating";
import Gallery from "../../Gallery";
import styles from "./index.module.scss";

const Description = ({ fullDesc, shortDesc }) => {
  const [descShown, setDescShown] = useState(false);
  const desc = descShown ? fullDesc : shortDesc;
  const btnStyle = `${styles["btn-desc-toggler"]} text-blue-600 py-2`;
  return (
    <Fragment>
      <div className={styles.desc}>{desc}</div>
      <button onClick={() => setDescShown(!descShown)} className={btnStyle}>
        {descShown ? "Hide" : "Show more"}
      </button>
    </Fragment>
  );
};

const ProductDetail = ({ product }) => {
  const title = product.full_title ? product.full_title : product.title;
  return (
    <div className={styles["grid-container"]}>
      <div className={styles["gallery-area"]}>
        <Gallery images={product.images} />
      </div>
      <div className={styles["desc-area"]}>
        <h1 className={styles.title}>{title}</h1>
        <StarRating grade="3.5" votes="84" size="1em" />
        <Description
          fullDesc={product.full_desc}
          shortDesc={product.short_desc}
        />
        <Specifics product={product} />
      </div>
      <div className={styles["options-area"]}></div>
    </div>
  );
};

export default ProductDetail;
