import { ProductAPI } from "../lib/api/product";
import ListView from "../components/product/ListView";

const Home = ({ items }) => <ListView items={items} />;

export async function getStaticProps() {
  const items = await ProductAPI.getList("featured", true);
  return {
    props: {
      items,
    },
  };
}

export default Home;
