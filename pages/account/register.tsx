import Link from "next/link";
import { useState } from "react";
import { Form, Field, useForm } from "../../components/core/Form";
import styles from "./Login.module.scss";

const RegLink = () => (
  <p className={styles.link}>
    <Link href="/account/register">
      <a>Already have an account? Sign in!</a>
    </Link>
  </p>
);
const VisibilityToggler = ({ hidden, toggle }) => (
  <span onClick={() => toggle(!hidden)} className={styles['visibility-toggler']}>
    {hidden ? "Show" : "Hide"}
  </span>
)

const Registration = () => {
  const initialValues = {
    email: "",
    password: "",
    password2: "",
  };
  const { formState, handleOnChange, handleOnSubmit } = useForm(initialValues);
  const [hidden, setHidden] = useState(true);
  const validatePasswordMatch = (value: string) => {
    console.log(value)
  }

  return (
    <div className={styles["form-container"]}>
      <Form
        handleOnSubmit={(e) => handleOnSubmit(e)}
        legend="Sign In To Your Account"
      >
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
          type={hidden ? "password" : "text"}
          label="Password"
          onChange={handleOnChange}
        >
          <VisibilityToggler hidden={hidden} toggle={setHidden} />
        </Field>
        <Field
          value={formState.password2}
          name="password2"
          type={hidden ? "password" : "text"}
          label="Repeat Password"
          onChange={handleOnChange}
          validate={(value) => validatePasswordMatch(value)}
        ></Field>
        <RegLink />
      </Form>
    </div>
  );
};

export default Registration;