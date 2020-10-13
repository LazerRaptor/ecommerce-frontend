import ProductList from "../components/Product/ProductList";
import { ProductAPI } from "../lib/api/product";

const Home = ({ featured }) => {
  return (
    <div>
      <ProductList products={featured} />
    </div>
  );
};

export async function getStaticProps() {
  const featured = await ProductAPI.get("featured", true);
  return {
    props: {
      featured,
    },
  };
}

export default Home;
