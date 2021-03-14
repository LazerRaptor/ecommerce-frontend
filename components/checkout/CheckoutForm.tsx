import React, { useState } from "react";
import { 
  CardElement,
  useElements, 
  useStripe 
} from "@stripe/react-stripe-js";
import styled from "styled-components";
import Spacer from "components/ui/Spacer";
import Button from "components/ui/Button";
import { saveStripeResponse } from "lib/api/service";
import {
  Wrapper,
  Container,
  Header,
} from "styles/form";
import { variants, colors } from "styles/variables";

const CheckoutWrapper = styled(Wrapper)`
  font-size: 15px;
  height: 100%;
`;

const Form = styled.div`
  display: grid;
  grid-template-rows: 1fr 5rem;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "lft rgt" "ft ft";
  grid-gap: 2rem;
`;

const Label = styled.label`
  color: ${colors.grey};
  margin-bottom: .2em;
`;

const Input = styled.input`
  border: 1px solid ${(props) => props.isInvalid ? variants.danger : colors.grey};
  color: "#5a5a5a";
  min-width: 21rem;
  outline: 0;
  box-shadow: none;
  padding: .8em;
  line-height: 1.2;
`;

const Bordered = styled.div`
  border: 1px solid ${colors.grey};
  padding: .9em;
`
const Left = styled.div`
  grid-area: lft;
`

const Right = styled.div`
  grid-area: rgt;
`
const Footer = styled.div`
  grid-area: ft;
`

const PaymentForm = (props) => {
   // Options for CardElement component
  const options = {
    style: {
      base: {
        fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
        fontSize: '14px',
        color: '#5a5a5a',
        '::placeholder': {
          color: colors.grey,
        },
      },
      invalid: {
        color: "#DA1B1B",
      },
    },
  }
  const stripe = useStripe();
  const elements = useElements();
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
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card: card
    });
    try {
      let res = await saveStripeResponse({ payment_method_id: paymentMethod.id, email });
      console.log(res.data);
    } catch(error) {
      console.warn(error.message);
    }
  };
  return (
    <CheckoutWrapper>
      <Container>
        <Header>Checkout</Header>
        <Spacer y={1} />
        <Form onSubmit={handleSubmit}>
          <Left>
            <Label htmlFor="name">First & Last Name</Label>
            <Input 
              id="name" 
              name="name" 
              type="text" 
              onChange={handleChange}
              isInvalid={false}
            />
            <Spacer y={.75} />
            <Label htmlFor="phone">Phone Number</Label>
            <Input 
              id="phone" 
              name="phone" 
              type="tel"
              placeholder="+911204377777" 
              onChange={handleChange}
              isInvalid={false}
            />
            <Spacer y={.75} />
            <Label htmlFor="address">Address</Label>
            <Input 
              id="address" 
              name="address" 
              type="text"
              placeholder="London, 221b Baker street" 
              onChange={handleChange}
              isInvalid={false}
            />
          </Left>
          <Right>
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              name="email" 
              type="email" 
              onChange={handleChange}
              isInvalid={false}
            />
            <Spacer y={.75} />
            <Label>Bank Card & ZIP Code</Label>
            <Bordered>
              <CardElement />
            </Bordered>
          </Right>
          <Footer>
            <Button type="submit" isRound>Pay All Your Money</Button>
          </Footer>
        </Form>
      </Container>
    </CheckoutWrapper>
  )
}

export default function Checkout() {
  return <PaymentForm />
};

