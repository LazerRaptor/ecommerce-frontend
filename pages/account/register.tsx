import Link from "next/link";
import { Form, Field, useForm } from "../../components/common/Form";
import styles from "./Login.module.scss";

const Registration = () => {
  const initialValues = {
    email: "",
    password: "",
    password2: "",
  };
  const {
    email,
    password,
    password2,
    passwordShown,
    handleOnChange,
    handleOnSubmit,
    toggleVisibility,
  } = useForm(initialValues);
  return (
    <div className={styles["form-container"]}>
      <Form
        handleOnSubmit={(e) => handleOnSubmit(e)}
        legend="Create a New Account"
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

        <Field
          value={password2}
          name="password2"
          type={passwordShown ? "password" : "text"}
          label="Repeat Password"
          onChange={handleOnChange}
          pattern={password}
        ></Field>

        <p className={styles.link}>
          <Link href="/account/login">
            <a>Already have an account? Sign in!</a>
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default Registration;
