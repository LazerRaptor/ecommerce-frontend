import { CategoryAPI } from "../../lib/api/categories";
import { ICategory } from "../../lib/utils/interfaces";

const CategoryPage = ({ category, content }) => {
  return null;
};

export default CategoryPage;

export async function getStaticPaths() {
  const categories = await CategoryAPI.getList();
  const paths = categories.map((category: ICategory) => ({
    params: { slug: category.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const category = await CategoryAPI.getDetail(params.slug);
  const content = await CategoryAPI.getContent(params.slug);
  return {
    props: {
      category,
      content,
    },
  };
}
