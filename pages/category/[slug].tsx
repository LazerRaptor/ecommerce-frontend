import useSWR from "swr";
import { fetcher } from "../../lib/utils/fetcher";
import { URLPatterns } from "../../lib/api/category";
import { useCategory } from "../../lib/hooks/useCategory";
import Layout from "../../components/common/Layout";
import ListView from "../../components/product/ListView";
import { ICategory } from "../../lib/utils/interfaces";

export async function getStaticPaths() {
  const categories = await fetcher(URLPatterns.list());
  const paths = categories.map((category: ICategory) => ({
    params: { slug: category.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const content = await fetcher(URLPatterns.content(params.slug));
  return {
    props: {
      content,
      slug: params.slug,
    },
  };
}

export default function CategoryPage({ content, slug }) {
  const { data } = useCategory("content", slug, content);
  return (
    <Layout>
      <ListView items={data} />
    </Layout>
  );
}
