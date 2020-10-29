import { Fragment } from "react";
import Spacer from "../ui/Spacer";
import ProductList from "../product/ProductListView";

const Category = ({ category, products }) => {
  return (
    <Fragment>
      <h1>Category: {category.title}</h1>
      <Spacer y="1.4" />
      <ProductList products={products} />
    </Fragment>
  );
};

export default Category;
