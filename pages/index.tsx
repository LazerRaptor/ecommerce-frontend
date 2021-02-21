import { URLPatterns } from "../lib/api/product";
import { fetcher } from "../lib/utils/fetcher";
import ListView from "../components/product/ListView";
import Layout from "../components/common/Layout";


const Home = ({ items }) => (
  <Layout>
    <ListView items={items} />
  </Layout>
)

export async function getStaticProps() {
  const items = await fetcher(URLPatterns.list("featured", true));
  return {
    props: {
      items,
    },
  };
}

export default Home;
