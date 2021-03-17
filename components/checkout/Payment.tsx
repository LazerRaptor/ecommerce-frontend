import React, { useState } from "react";
import styled from "styled-components";
import { 
  CardElement,
  useElements, 
  useStripe 
} from "@stripe/react-stripe-js";
import { saveStripeResponse } from "lib/api/service";
import { Form } from "styles/form";
import { useCart } from "lib/hooks";
import Button from "components/ui/Button";
import { variants, colors } from "styles/variables";
import { StripeCardElementChangeEvent } from "@stripe/stripe-js";


const inputSize = "380px";

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
  width: ${inputSize};
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
  border: 1px solid ${props => props.isInvalid ? variants.danger : colors.grey};
  padding: .9em;
  width: ${inputSize};
`
const Footer = styled.div`
  margin-top: 1rem; 
`;

const Feedback = styled.p`
  margin-top: 4px;
  color: ${variants.danger};
  font-size: .9em;
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
        color: variants.danger,
      },
    },
  }
  const stripe = useStripe();
  const elements = useElements();
  const { cart } = useCart();

  // State 
  const [errors, setErrors] = useState({
    email: null,
    card: null,
  });
  const [isValid, setIsValid] = useState({
    email: false,
    card: false,
  })
  const [email, setEmail] = useState("");

  // Event handlers 
  const handleEmailChange = (event: React.FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };
  
  const handleEmailBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(event.currentTarget.value)) {
      setErrors({ ...errors, email: "Invalid email address." })
    } else {
      setErrors({ ...errors, email: null })
    }
  }

  const handleCardChange = (event: StripeCardElementChangeEvent) => {
    if (event.error) {
      setErrors({ ...errors, card: event.error.message })
      setIsValid({ ...isValid, card: false })
    } else if (event.complete) {
      setIsValid({ ...isValid, card: true })
    } else {
      setErrors({ ...errors, card: null })
    }
  }
  
  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const card = elements.getElement(CardElement);
    try {
      const { paymentMethod, error: paymentError } = await stripe.createPaymentMethod({
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
    <>
      <Form onSubmit={handleSubmit}>
        <Field>
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email" 
            name="email" 
            type="email"
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            isInvalid={errors.email}
          />
          {errors.email ? <Feedback>{errors.email}</Feedback> : null}
        </Field>
        <Field>
          <Label>Bank Card & ZIP Code</Label>
          <Bordered isInvalid={errors.card}>
            <CardElement 
              options={options} 
              onChange={handleCardChange}
            />
          </Bordered>
          {errors.card ? <Feedback>{errors.card}</Feedback> : null}
        </Field>
        <Footer>
          <Button type="submit" isRound disabled={!isValid.email || !isValid.card}>Next</Button>
        </Footer>
      </Form>
    </>
  )
}

export default CheckoutForm;