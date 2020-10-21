import Link from 'next/link';
import { Form, Field, useForm } from "../../components/Form/";
import styles from "./Login.module.scss";


const RegLink = () => {
  return (
    <p className={styles.link}>
      <Link href="/account/register">
        <a>Don't have an account? Sign up!</a>
      </Link>
    </p>
  )
}


const Login = () => {
  const initialValues = {
    email: '',
    password: '',
    password2: '',
  }
  const { formState, handleOnChange, handleOnSubmit } = useForm(initialValues)

  return (
    <div className={styles["form-container"]}>
      <Form handleOnSubmit={(e) => handleOnSubmit(e)} title="Sign In To Your Account">
        <Field 
          value={formState.email} 
          name="email" 
          type="email" 
          label="Email"
          onChange={handleOnChange}
        />
        <Field 
          value={formState.password} 
          name="password" 
          type="password" 
          label="Password"
          onChange={handleOnChange}
        />
        <Field 
          value={formState.password2} 
          name="password2" 
          type="password" 
          label="Repeat Password"
          onChange={handleOnChange}
        >
        </Field>
        <RegLink />
      </Form>
    </div>
  );
};

export default Login;
