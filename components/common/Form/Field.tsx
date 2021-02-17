import { useState } from "react";
import styles from "./Field.module.scss";

const Field = ({
  value,
  label,
  type,
  name,
  onChange,
  children = null,
  pattern = null,
  minLength = 6,
  maxLength = 18,
}) => {
  const [inFocus, setInFocus] = useState(false);
  const handleOnFocus = () => setInFocus(true);
  const handleOnBlur = (e) => setInFocus(false || !!e.target.value);
  let cls = styles.label 
  if (inFocus) cls += styles["label-focus"]
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
        pattern={pattern}
      />
      {children}
    </div>
  );
};

export { Field };
