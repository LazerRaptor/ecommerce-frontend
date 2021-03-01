import { useState, Fragment } from "react";
import { useRouter } from "next/router";
import { Formik, FormikHelpers } from "formik";
import { v4 as uuidv4 } from "uuid";
import Head from "next/head";
import { register } from "../../lib/api/auth";
import Spacer from "../../components/ui/Spacer";
import Button from "../../components/ui/Button";
import { 
  Wrapper,
  Container, 
  StyledForm, // Formik Form component with applied styles
  StyledField, // Formik Field component with applied styles
  Header,
  Label,
  StyledError 
} from "./styles";
// TODO: add validation with Yup, hide/reveal password

type UserInput = {
  email: string;
  password: string;
  password2: string;
};

export function Registration() {
  const router = useRouter();
  const [errors, setErrors] = useState<Array<string>>([]);
  return (
    <Fragment>
      <Head>
        <title>Registration Page</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Domine:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Wrapper>
        <Container>
          <Header>Create an account</Header>
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
              password2: "",
            }}
            onSubmit={(
              input: UserInput,
              { setSubmitting }: FormikHelpers<UserInput>
            ) => {
              const { password2, ...credentials } = input;
              register(credentials)
                .then(() => {
                  setSubmitting(false);
                  router.push('account/login')
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
              <Label htmlFor="password2">Repeat Password</Label>
              <StyledField id="password2" name="password2" type="password" />
              <Spacer y={1} />
              <Button title="Sign Up" size={19} type="submit" radius="32px" />
            </StyledForm>
          </Formik>
        </Container>
      </Wrapper>
    </Fragment>
  );
}

