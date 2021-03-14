import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from "@stripe/stripe-js/pure";
import CheckoutForm from "components/checkout";
import Layout from "components/common/Layout";

export async function getStaticProps(){
  return {
    props: {
      apiKey: process.env.STRIPE_PUBLISHABLE_KEY,
    }
  }
}

export default function Checkout({ apiKey }) {
  const stripePromise = loadStripe(apiKey);
  return (
    <Layout>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </Layout>
  )
};
