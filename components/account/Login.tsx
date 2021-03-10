import { Fragment, useState } from "react";
import { useRouter } from "next/router";
import { Formik, FormikHelpers } from "formik";
import { v4 as uuidv4 } from "uuid";
import Head from "next/head";
import { login } from "../../lib/api/auth";
import Spacer from "../../components/ui/Spacer";
import Button from "../../components/ui/Button";
import {
  Wrapper,
  Container,
  StyledForm, // Formik Form component with applied styles
  StyledField, // Formik Field component with applied styles
  Header,
  Label,
  StyledError,
} from "./styles";

type UserInput = {
  email: string;
  password: string;
};

export function Login() {
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
              <Button type="submit" isRound >Sign In</Button>
            </StyledForm>
          </Formik>
        </Container>
      </Wrapper>
    </Fragment>
  );
}
