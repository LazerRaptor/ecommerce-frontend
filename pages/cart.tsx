import Layout from "../components/common/Layout";
import ListView from "../components/product/ListView";
import { getRequest, getCartItems } from "../lib/api/cart";

export async function getStaticProps() {
  const [cartID, products] = await getCartItems();
  window.localStorage.setItem('cart_id', cartID);
  return {
    props: {
      products,
    },
  };
}

export default function Cart({ products }) {
  return (
    <Layout title="Cart">
      <h1>Your cart</h1>
      {products.len > 0 ? <ListView items={products} /> : null}
    </Layout>
  );
}
