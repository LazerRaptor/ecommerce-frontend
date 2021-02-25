import Layout from "../../components/common/Layout";
import DetailView from "../../components/product/DetailView";
import { URLPatterns } from "../../lib/api/product";
import { fetcher } from "../../lib/utils/fetcher";
import { useProduct } from "../../lib/hooks/";

export async function getStaticPaths() {
  const response = await fetcher(URLPatterns.staticPaths());
  const paths = response.map((slug) => ({
    params: { slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const product = await fetcher(URLPatterns.detail(params.slug));
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
