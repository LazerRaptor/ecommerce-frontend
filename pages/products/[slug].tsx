import ProductDetail from "../../components/product/ProductDetailView";
import { ProductAPI } from "../../lib/api/product";

const Products = ({ product }) => {
  return <ProductDetail product={product} />;
};

export async function getServerSideProps(context) {
  const product = await ProductAPI.getDetail(context.params.slug);
  return {
    props: {
      product,
    },
  };
}

export default Products;
