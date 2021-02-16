import DetailView from "../../components/product/DetailView";
import { ProductAPI } from "../../lib/api/product";

const Products = ({ product }) => <DetailView product={product} />;

export async function getStaticPaths() {
  const response = await ProductAPI.getProductsStaticPaths();
  const paths = response.map((slug) => ({
    params: { slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const product = await ProductAPI.getDetail(params.slug);
  return {
    props: {
      product,
    },
  };
}

export default Products;
