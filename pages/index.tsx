import { ProductAPI } from "../lib/api/product";
import ListView from "../components/product/ListView";
import Layout from "../components/common/Layout";


const Home = ({ items }) => (
  <Layout>
    <ListView items={items} />
  </Layout>
)

export async function getStaticProps() {
  const items = await ProductAPI.getList("featured", true);
  return {
    props: {
      items,
    },
  };
}

export default Home;
