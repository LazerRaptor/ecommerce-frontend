import { BASE_URL } from "../lib/constants";
import { fetcher } from "../lib/utils/fetcher";
import ListView from "../components/product/ListView";
import Layout from "../components/common/Layout";

export async function getStaticProps() {
  const items = await fetcher(`${BASE_URL}/api/products.json/?featured=true`);
  return {
    props: {
      items,
    },
  };
}

export default function Home({ items }) {
  return (
    <Layout>
      <ListView items={items} />
    </Layout>
  );
}
