import React, { useState } from "react";
import styled from "styled-components";
import { 
  CardElement,
  useElements, 
  useStripe 
} from "@stripe/react-stripe-js";
import { saveStripeResponse } from "lib/api/service";
import { Header, Container, Form } from "styles/form";
import { useCart } from "lib/hooks";
import Spacer from "components/ui/Spacer";
import Button from "components/ui/Button";
import { variants, colors } from "styles/variables";

const Field = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 25rem;
  margin: 1rem 0;
`;

const Label = styled.label`
  color: ${colors.grey};
  margin-bottom: .2em;
`;

const Input = styled.input`
  border: 1px solid ${(props) => props.isInvalid ? variants.danger : colors.grey};
  color: "#5a5a5a";
  outline: 0;
  box-shadow: none;
  padding: .8em;
  line-height: 1.2;
  &::placeholder {
    color: #8d8d8d;
    opacity: 1;
  }
`;

const Bordered = styled.div`
  border: 1px solid ${colors.grey};
  padding: .9em;
`

const CheckoutForm = (props) => {
  // Options for CardElement component
  const options = {
    style: {
      base: {
        fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
        fontSize: '15px',
        color: '#5a5a5a',
        '::placeholder': {
          color: '#8d8d8d',
        },
      },
      invalid: {
        color: "#DA1B1B",
      },
    },
  }
  const stripe = useStripe();
  const elements = useElements();
  const { cart } = useCart();
  // State 
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  // Event handlers 
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };
  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const card = elements.getElement(CardElement);
    try {
      const { paymentMethod, error } = await stripe.createPaymentMethod({
        type: 'card',
        card: card
      });
      let res = await saveStripeResponse({ 
        payment_method_id: paymentMethod.id, 
        total: cart.total, 
        cart_id: cart.id,
        email, 
      });
      console.log(res.data);
    } catch(error) {
      console.warn(error.message);
    }
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Header>Payment</Header>
        <Field>
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email" 
            name="email" 
            type="email"
            onChange={handleChange}
            isInvalid={false}
          />
        </Field>
        <Field>
          <Label>Bank Card & ZIP Code</Label>
          <Bordered>
            <CardElement options={options} />
          </Bordered>
        </Field>
        <Button type="submit" isRound>Pay All Your Money</Button>
      </Form>
    </Container>
  )
}

export default CheckoutForm;