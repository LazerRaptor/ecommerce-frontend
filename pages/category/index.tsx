import { useCategory } from "../../lib/hooks/useCategory";
import { ICategory } from "../../lib/utils/interfaces";

const Category = () => {
  return <div></div>;
};

export default Category;

export async function getStaticProps({ params }) {
  const { isLoading, isError } = useCategory(true);
  return {
    props: {
      // category,
    },
  };
}

// export async function getStaticPaths() {
//   const res = await getRequest('GET_CATEGORIES')
//   const categories = await res.data

//   const paths = categories.map((category: ICategory) => ({
//     params: { slug: category.slug }
//   }))

//   return { paths, fallback: false };
// }
