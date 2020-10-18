import { useState } from "react";
import styles from "./index.module.scss";


const Field = ({ value, label, type, name, onChange, children=null }) => {
  const [inFocus, setInFocus] = useState(false);
  const toggleFocus = (inFocus: boolean) => setInFocus(inFocus)
  const variant = inFocus ? [styles.input, styles['input-focus']].join(' ') : `${styles.input}` 
  return (
    <div className={styles.field}>
      <label>{label}</label>
      <input 
        type={type} 
        value={value} 
        name={name}
        className={variant} 
        onChange={(e) => onChange(e)}
        onFocus={(e) => toggleFocus(true)} 
        onBlur={(e) => toggleFocus(false)}
      />
      {children}
    </div>
  )
}

export default Field;
