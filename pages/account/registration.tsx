import { Fragment } from "react";
import { Formik, Field, Form, FormikHelpers } from 'formik';
import Head from "next/head"
import styled from "styled-components";
import Layout from "../../components/common/Layout";
import Spacer from '../../components/ui/Spacer';
import Button from "../../components/ui/Button";

// TODO: add validation with Yup, hide/reveal password

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
`;

const Container = styled.div`
max-width: 20rem;
min-width: min(90%, 20rem);
`;

const Header = styled.header`
font-family: 'Domine', serif;
font-weight: 400;
font-size: 1.8em;
`;

const StyledForm = styled(Form)`
display: flex;
flex-direction: column;
`;

const StyledField = styled(Field)`
border: 1px solid hsl(0, 0%, 62%);
line-height: 2rem;
font-size: 1.1em;
font-weight: 400;
padding: .65em;
color: hsl(0, 0%, 33%);
`; 

const Label = styled.label`
font-size: 1em;
font-weight: 400;
letter-spacing: .25px;
color: hsl(0, 0%, 32%);
margin-bottom: .4rem;
`;

type UserInput = {
  email: string, 
  password: string,
  password2: string,
}

const Registration = () => {
  return (
    <Fragment>
      <Head>
        <title>Registration Page</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Domine:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Wrapper>
        <Container>
          <Header>Create an account</Header>
          <Spacer y={2} />
          <Formik
            initialValues={{
              email: '',
              password: '',
              password2: '',
            }}
            onSubmit={(
              input: UserInput,
              { setSubmitting }: FormikHelpers<UserInput>
            ) => {
              setTimeout(() => {
                alert(JSON.stringify(input, null, 2))
                setSubmitting(false);
              }, 500);
            }
          }
          >
            <StyledForm>
              <Label htmlFor="email">Email</Label>
              <StyledField id="email" name="email" type="email" />
              <Spacer y={.6} />
              <Label htmlFor="password">Password</Label>
              <StyledField id="password" name="password" type="password"/>
              <Spacer y={1} />
              <Label htmlFor="password2">Repeat Password</Label>
              <StyledField id="password2" name="password2" type="password"/>
              <Spacer y={1} />
              <Button
                title="Sign Up"
                size={19}
                type="submit"
                radius="32px"
              /> 
            </StyledForm>
          </Formik>
        </Container>
      </Wrapper>
    </Fragment>
  )
}

export default Registration;