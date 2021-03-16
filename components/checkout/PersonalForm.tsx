import React from "react";
import { withFormik } from "formik";
import styled from "styled-components";
import { Header } from "styles/form";
import { useCart } from "lib/hooks";
import Spacer from "components/ui/Spacer";
import Button from "components/ui/Button";
import { variants, colors } from "styles/variables";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0 2rem;
  @media(max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

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
  min-width: 21rem;
  outline: 0;
  box-shadow: none;
  padding: .8em;
  line-height: 1.2;
  &::placeholder {
    color: #8d8d8d;
    opacity: 1;
  }
`;

export default function PersonalData(props) {
  const { cart } = useCart();
  // Event handlers 
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
  };
  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Header>Personal Data</Header>
        <Spacer y={2} />
          <Field>
            <Label htmlFor="firstName">First Name</Label>
            <Input 
              id="firstName" 
              name="firstName" 
              type="text" 
              placeholder="Sherlock"
              onChange={handleChange}
              isInvalid={false}
            />
          </Field>
          <Field>
            <Label htmlFor="lastName">Last Name</Label>
            <Input 
              id="lastName" 
              name="lastName" 
              type="text"
              placeholder="Holmes"
              onChange={handleChange}
              isInvalid={false}
            />
          </Field>
          <Field>
            <Label htmlFor="phone">Phone Number</Label>
            <Input 
              id="phone" 
              name="phone" 
              type="tel"
              placeholder="+911204377777" 
              onChange={handleChange}
              isInvalid={false}
            />
          </Field>
          <Field>
            <Label htmlFor="address">Address</Label>
            <Input 
              id="address" 
              name="address" 
              type="text"
              placeholder="London, 221b Baker street" 
              onChange={handleChange}
              isInvalid={false}
            />
          </Field>
        <div>
          <Button type="submit" isRound>Submit</Button>
        </div>
      </Form>
    </Container>
  )
}
