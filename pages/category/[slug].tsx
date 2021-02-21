import useSWR from "swr";
import { fetcher } from "../../lib/utils/fetcher";
import { URLPatterns } from "../../lib/api/categories";
import { useCategory } from "../../lib/hooks/useCategory";
import Layout from "../../components/common/Layout";
import ListView from "../../components/product/ListView";
import { ICategory } from "../../lib/utils/interfaces";

// FIXME: Refactor to use SWR like in the example: https://swr.vercel.app/docs/with-nextjs
// with useCategory we should be able to get category.title to pass to Head component

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
      slug: params.slug
    },
  };
}

const CategoryPage = ({ content, slug }) => {
  const { data } = useCategory("content", slug, content)
  return (
    <Layout>
      <ListView items={data} />
    </Layout>
  ) 
};

export default CategoryPage;