import Layout from "../../components/common/Layout";
import DetailView from "../../components/product/DetailView";
import { fetcher } from "../../lib/utils/fetcher";
import { BASE_URL } from "../../lib/constants";
import { useProduct } from "../../lib/hooks/";
import Loader from "../../components/ui/Loader";

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
  const { data, isLoading } = useProduct(product.slug, product);
  return isLoading ? null : (
    <Layout title={product.title}>
      <DetailView product={data} />
    </Layout>
  );
}
