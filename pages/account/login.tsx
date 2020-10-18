import Form, { Field, useForm } from "../../components/Form/";
import styles from "./Login.module.scss";



const Login = () => {
  const initialValues = {
    email: '',
    password: '',
    password2: '',
  }
  const { formState, handleOnChange, handleOnSubmit } = useForm(initialValues)

  return (
    <div className={styles["form-wrapper"]}>
      <h1 className={styles.title}>Sign In To Your Account</h1>
      <Form handleOnSubmit={(e) => handleOnSubmit(e)} submitButton="Sign In">
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
          label="Reapeat Password"
          onChange={handleOnChange}
        >
          <span>Hide?</span>
        </Field>
      </Form>
    </div>
  );
};

export default Login;
