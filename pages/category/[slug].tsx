import { fetcher } from "../../lib/utils/fetcher";
import { BASE_URL } from "../../lib/constants";
import { useCategory } from "../../lib/hooks/useCategory";
import Layout from "../../components/common/Layout";
import ListView from "../../components/product/ListView";
import { ICategory } from "../../lib/utils/interfaces";

export async function getStaticPaths() {
  const categories = await fetcher(`${BASE_URL}/api/categories.json`);
  const paths = categories.map((category: ICategory) => ({
    params: { slug: category.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const content = await fetcher(`${BASE_URL}/api/categories/${params.slug}/content.json`);
  return {
    props: {
      content,
      slug: params.slug,
    },
  };
}

export default function CategoryPage({ content: initialData, slug }) {
  const { data } = useCategory(`${BASE_URL}/api/categories/${slug}/content`, initialData);
  return (
    <Layout>
      <ListView items={data} />
    </Layout>
  );
}
