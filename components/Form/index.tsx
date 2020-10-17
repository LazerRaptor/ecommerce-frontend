import { useState, Fragment } from "react";
import { v4 } from "uuid";
import Spacer from "../Spacer";
import styles from "./index.module.scss";

const Form = ({ children, title, submitValue, spaceBetween }) => {
  const [state, setState] = useState({})
  const updateState = (name: string, value: string) => {
    const obj = Object.assign({}, state, { [name]: value });
    setState(obj);
  };
  if (!Array.isArray(children)) children = [children,]
  return (
    <form className={styles.form}>
      <h1 className={styles.title}>{title}</h1>
      {children.map(child => (
        <Fragment>
          {child}
          <Spacer y={spaceBetween} />
        </Fragment>
      ))}
      <input
        type="submit"
        value={submitValue}
        className={styles["btn-submit"]}
      />
    </form>
  );
};

Form.defaultProps = {
  spaceBetween: "1.4",
};

export default Form;
