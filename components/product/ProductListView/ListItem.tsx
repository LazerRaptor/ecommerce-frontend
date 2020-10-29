import Link from "next/link";
import StarRating from "../../core/StarRating";
import Button from "../../ui/Button";
import Spacer from "../../ui/Spacer";
import styles from "./index.module.scss";

const Item = ({ item }) => {
  const src = item.front_image ? item.front_image.src : null;
  const alt = item.front_image ? item.front_image.alt : null;
  return (
    <div className={styles.container}>
      <div className="flex flex-x-center">
        <Link href={`/products/${item.slug}`}>
          <a>
            <img
              src={src}
              alt={alt}
              className={styles.img}
              height="200"
              width="auto"
            />
          </a>
        </Link>
      </div>
      <Link href={`/products/${item.slug}`}>
        <a className={styles.link}>
          <p className={styles["item-title"]}>{item.title}</p>
        </a>
      </Link>
      <StarRating grade="4.2" votes="32" />
      <Spacer y={0.6} />
      <p>${item.price}</p>
      <Spacer y={0.6} />
      <div>
        <Button title="Add to cart" size="sm" />
      </div>
    </div>
  );
};

export default Item;
