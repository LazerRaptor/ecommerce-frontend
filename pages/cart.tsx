import Layout from "../components/common/Layout";
import CartComponent from "../components/cart";

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default function Cart() {
  return (
    <Layout title="Cart">
      <CartComponent />
    </Layout>
  );
}
