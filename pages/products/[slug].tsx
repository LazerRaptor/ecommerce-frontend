import Layout from "../../components/common/Layout";
import DetailView from "../../components/product/DetailView";
import { fetcher } from "../../lib/utils/fetcher";
import { BASE_URL } from "../../lib/constants";
import { useProduct } from "../../lib/hooks/";

export async function getStaticPaths() {
  const response = await fetcher(`${BASE_URL}/api/paths/products.json`);
  const paths = response.map((slug) => ({
    params: { slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const product = await fetcher(`${BASE_URL}/api/products/${params.slug}.json`);
  return {
    props: {
      product,
      slug: params.slug,
    },
  };
}

export default function Products({ product }) {
  const { data } = useProduct(product.slug, product);
  return (
    <Layout title={product.title}>
      <DetailView product={data} />;
    </Layout>
  );
}
