import Link from "next/link";
import { Form, Field, useForm } from "../../components/common/Form";
import styles from "./Login.module.scss";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const {
    email,
    password,
    passwordShown,
    handleOnChange,
    handleOnSubmit,
    toggleVisibility,
  } = useForm(initialValues);

  return (
    <div className={styles["form-container"]}>
      <Form
        handleOnSubmit={(e) => handleOnSubmit(e)}
        legend="Sign In To Your Account"
      >
        <Field
          value={email}
          name="email"
          type="email"
          label="Email"
          onChange={handleOnChange}
        />

        <Field
          value={password}
          name="password"
          type={passwordShown ? "password" : "text"}
          label="Password"
          onChange={handleOnChange}
        >
          <span
            className={styles["visibility-toggler"]}
            onClick={() => toggleVisibility()}
          >
            {passwordShown ? "Show" : "Hide"}
          </span>
        </Field>

        <p className={styles.link}>
          <Link href="/account/register">
            <a>Don't have an account? Sign up!</a>
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default Login;
