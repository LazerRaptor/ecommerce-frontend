import { useState } from "react";
import { classnames } from "../../../lib/utils/classnames";
import styles from "./Field.module.scss";

const Field = ({ value, label, type, name, onChange, children = null, minLength=6, maxLength=18, validate = (v) => {} }) => {
  const [inFocus, setInFocus] = useState(false);
  const handleOnFocus = () => setInFocus(true)
  const handleOnBlur = (e) => {
    setInFocus(false || !!e.target.value)
    validate(e.target.value)
  }
  const cls = classnames({
    [styles.label]: true,
    [styles["label-focus"]]: inFocus,
  });
  return (
    <div className={styles.field}>
      <label className={cls}>{label}</label>
      <input
        type={type}
        value={value}
        name={name}
        className={styles.input}
        onChange={(e) => onChange(e)}
        onFocus={() => handleOnFocus()}
        onBlur={(e) => handleOnBlur(e)}
        minLength={minLength}
        maxLength={maxLength}
      />
      {children}
    </div>
  );
};


export { Field };
