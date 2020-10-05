import Link from "next/link";
import Button from "../../../Button";

const Item = ({ item }) => {
  const src = item.front_image ? item.front_image.src : null;
  const alt = item.front_image ? item.front_image.alt : null;
  return (
    <div className="py-2 px-3 flex flex-col justify-between">
      <div className="flex items-center justify-center">
        <Link href={`/products/${item.slug}`}>
          <a>
            <img
              src={src}
              alt={alt}
              className="object-contain w-48 h-40"
              height="182"
              width="160"
            />
          </a>
        </Link>
      </div>
      <Link href={`/products/${item.slug}`}>
        <a>
          <h3 className="font-bold mt-5">{item.title}</h3>
        </a>
      </Link>
      <p className="my-4">${item.price}</p>
      <div className="flex">
        <Button title="Add to cart" size="sm" rounded />
      </div>
    </div>
  );
};

export default Item;
