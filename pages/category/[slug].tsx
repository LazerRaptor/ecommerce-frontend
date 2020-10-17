import Category from "../../components/Category";
import { CategoryAPI } from "../../lib/api/categories";
import { ICategory } from "../../lib/utils/interfaces";

const CategoryPage = ({ category, relatedProducts }) => {
  return <Category category={category} products={relatedProducts} />;
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
  const relatedProducts = await CategoryAPI.getRelatedProducts(params.slug);
  return {
    props: {
      category,
      relatedProducts,
    },
  };
}
