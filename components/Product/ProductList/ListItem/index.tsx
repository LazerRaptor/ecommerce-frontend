import Link from "next/link";
import StarRating from '../../../StarRating'
import Button from "../../../Button";
import Spacer from '../../../Spacer'
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
              height="182"
              width="160"
            />
          </a>
        </Link>
      </div>
      <Link href={`/products/${item.slug}`}>
        <a className={styles.link}>
          <p className={styles['item-title']}>{item.title}</p>
        </a>
      </Link>
      <StarRating grade="3.8" votes="232" />
      <Spacer y=".5" />
      <p>${item.price}</p>
      <Spacer y=".5" />
      <div>
        <Button title="Add to cart" size="sm" rounded />
      </div>
    </div>
  );
};

export default Item;
