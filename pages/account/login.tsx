import { useState } from "react";
import Form from "../../components/Form/";
import Input from "../../components/Form/Input";
import styles from "./Login.module.scss";

type State = {
  password: string;
  email: string;
};

const Login = () => {
  const [state, setState] = useState<State>({
    password: "",
    email: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const updateState = (name: string, value: string) => {
    const obj = Object.assign({}, state, { [name]: value });
    setState(obj);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div className={styles["form-wrapper"]}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.title}>Sign in to your account</h1>
        <Input
          value={state.email}
          handleOnChange={(e) => updateState(e.target.name, e.target.value)}
          type="email"
          label="Email"
          name="email"
        />
        <Input
          value={state.password}
          handleOnChange={(e) => updateState(e.target.name, e.target.value)}
          type={passwordVisible ? "text" : "password"}
          label="Password"
          name="password"
        >
          <span
            onClick={() => setPasswordVisible(!passwordVisible)}
            className={styles["visibility-toggler"]}
          >
            {passwordVisible ? "Show" : "Hide"}
          </span>
        </Input>
        <input type="submit" value="Sign In" className={styles["btn-submit"]} />
      </form>
    </div>
  );
};

export default Login;
