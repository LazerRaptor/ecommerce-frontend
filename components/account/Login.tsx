import Head from "next/head";
import { withFormik } from "formik";
import * as yup from 'yup';
import { login } from "lib/api/service";
import Spacer from "components/ui/Spacer";
import Button from "components/ui/Button";
import {
  Wrapper,
  Container,
  Form,
  Field,
  Header,
  Label,
  Feedback,
  FormStatus,
} from "styles/form";


const BasicLoginForm = (props) => {
  const {
    values,
    touched,
    errors,
    status,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    isValid
  } = props;
  return (
    <Wrapper>
      <Container>
        <Header>Sign in to your account</Header>
        <Spacer y={1} />
        <FormStatus>{status}</FormStatus>
        <Spacer y={1} />
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="email">Email</Label>
          <Field 
            id="email" 
            name="email" 
            type="email" 
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            isInvalid={errors.email && touched.email}
          />
          {errors.email && touched.email && <Feedback>{errors.email}</Feedback>}
          <Spacer y={0.6} />
          <Label htmlFor="password">Password</Label>
          <Field 
            id="password" 
            name="password" 
            type="password" 
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            isInvalid={errors.password && touched.password}
          />
          {errors.password && touched.password && <Feedback>{errors.password}</Feedback>}
          <Spacer y={1} />
          <Button type="submit" isRound disabled={!isValid || isSubmitting}>Sign In</Button>
        </Form>
      </Container>
    </Wrapper>
  )
}

const schema = yup.object().shape({
  email: yup.string()
    .email("Invalid email address.")
    .required("This field is required."),
  password: yup.string()
    .min(6, "Password must be at least 6 characters.")
    .required("This field is required.")
})

const LoginForm = withFormik({
  mapPropsToValues: () => ({ email: "", password: ""}),
  validationSchema: schema,
  handleSubmit: async (values, { setStatus }) => {
    try {
      await login(values);
      window.location.href = "/";
    } catch(error) {
      setStatus(...error.response.data.non_field_errors);
    };
  },
  displayName: 'LoginForm',
})(BasicLoginForm);

export function Login() {
  return (
    <>
      <Head>
        <title>Login Page</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Domine:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <LoginForm />
    </>
  );
}
