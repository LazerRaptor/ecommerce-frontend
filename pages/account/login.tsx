import { Fragment, useState } from "react";
import { useRouter } from "next/router";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { v4 as uuidv4 } from "uuid";
import Head from "next/head";
import styled from "styled-components";
import { login } from "../../lib/api/auth";
import Spacer from "../../components/ui/Spacer";
import Button from "../../components/ui/Button";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Container = styled.div`
  max-width: 20rem;
  min-width: min(90%, 20rem);
`;

const Header = styled.header`
  font-family: "Domine", serif;
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
  padding: 0.65em;
  color: hsl(0, 0%, 33%);
`;

const Label = styled.label`
  font-size: 1em;
  font-weight: 400;
  letter-spacing: 0.25px;
  color: hsl(0, 0%, 32%);
  margin-bottom: 0.4rem;
`;

const StyledError = styled.div`
  font-size: 0.9em;
  color: hsl(0, 53%, 48%);
  text-align: center;
  padding-top: 1em;
`;

type UserInput = {
  email: string;
  password: string;
};

function Login() {
  const router = useRouter();
  const [errors, setErrors] = useState<Array<string>>([]);
  return (
    <Fragment>
      <Head>
        <title>Login Page</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Domine:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Wrapper>
        <Container>
          <Header>Sign in to your account</Header>
          <StyledError>
            {errors.map((err) => (
              <p key={uuidv4()}>{err}</p>
            ))}
          </StyledError>
          <Spacer y={2} />
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={async (
              input: UserInput,
              { setSubmitting }: FormikHelpers<UserInput>
            ) => {
              login(input)
                .then(() => {
                  setSubmitting(false);
                  router.push("/");
                })
                .catch((e) => setErrors(e.response.data.non_field_errors));
            }}
          >
            <StyledForm>
              <Label htmlFor="email">Email</Label>
              <StyledField id="email" name="email" type="email" />
              <Spacer y={0.6} />
              <Label htmlFor="password">Password</Label>
              <StyledField id="password" name="password" type="password" />
              <Spacer y={1} />
              <Button title="Sign In" size={19} type="submit" radius="32px" />
            </StyledForm>
          </Formik>
        </Container>
      </Wrapper>
    </Fragment>
  );
}

export default Login;
