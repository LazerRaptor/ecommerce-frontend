import Head from "next/head";
import { withFormik } from "formik";
import * as yup from 'yup';
import { register } from "lib/api/service";
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


const BasicRegistrationForm = (props) => {
  const {
    values,
    touched,
    errors,
    status,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
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
          <Spacer y={0.6} />
          <Label htmlFor="password-confirmation">Repeat password</Label>
          <Field 
            id="password-confirmation" 
            name="password-confirmation" 
            type="password" 
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.passwordConfirmation}
            isInvalid={errors.passwordConfirmation && touched.passwordConfirmation}
          />
          {errors.passwordConfirmation && touched.passwordConfirmation && <Feedback>{errors.passwordConfirmation}</Feedback>}
          <Spacer y={1} />
          <Button type="submit" isRound disabled={isSubmitting}>Sign Up</Button>
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
    .required("This field is required."),
  passwordConfirmation: yup.string().
    oneOf([yup.ref('password'), null], 'Passwords don\'t match')
    .required("This field is required."),
})

const RegistrationForm = withFormik({
  mapPropsToValues: () => ({ email: "", password: "", passwordConfirmation: ""}),
  validationSchema: schema,
  handleSubmit: async (values, { setStatus }) => {
    try {
      const { passwordConfirmation, ...credentials } = values;
      await register(credentials);
      window.location.href = "/account/login"
    } catch(error) {
      setStatus(...error.response.data.non_field_errors);
    };
  },
  displayName: 'RegistrationForm',
})(BasicRegistrationForm);

export function Registration() {
  return (
    <>
      <Head>
        <title>Registration Page</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Domine:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <RegistrationForm />
    </>
  );
}
