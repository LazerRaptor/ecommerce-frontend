import { useState, useRef } from "react";
import { v4 } from "uuid";
import styles from "./index.module.scss";

type IProps = {
  value: string;
  type: "text" | "email" | "password";
  label: string;
  name: string;
  children: React.ReactNode | null;
  handleOnChange: (e) => void;
};

const Input = ({
  value,
  type,
  label,
  name,
  handleOnChange,
  children,
}: IProps) => {
  const [uuid] = useState(() => v4());
  const ref = useRef(null);
  const handleFocus = () => {
    ref.current.classList.add(styles['label__on-focus'])
  };
  const handleBlur = (e) => {
    if (!e.target.value) {
      ref.current.classList.remove(styles['label__on-focus'])
    } 
  };
  return (
    <div className={styles.field}>
      <input
        onChange={(e) => handleOnChange(e)}
        onFocus={() => handleFocus()}
        onBlur={(e) => handleBlur(e)}
        value={value}
        type={type}
        className={styles.input}
        name={name}
        id={uuid}
      />
      <label className={styles.label} ref={ref} htmlFor={uuid}>
        {label}
      </label>
      {children}
    </div>
  );
};

Input.defaultProps = {
  children: null,
};

export default Input;
