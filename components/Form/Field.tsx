import { useState } from "react";
import { classnames } from "../../lib/utils/classnames";
import styles from "./Field.module.scss";

const Field = ({ value, label, type, name, onChange, children = null }) => {
  const [inFocus, setInFocus] = useState(false);
  const toggleFocus = (inFocus: boolean) => setInFocus(inFocus);
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
        onFocus={() => toggleFocus(true)}
        onBlur={(e) => toggleFocus(true && !!e.target.value)}
      />
      {children}
    </div>
  );
};

export { Field };
