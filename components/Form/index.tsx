import styles from "./index.module.scss";
import Field from './Field';
import { useForm } from './useForm';

const Form = ({ children, submitButton, handleOnSubmit }) => {
  return (
    <form onSubmit={(e) => handleOnSubmit(e)} className={styles.form}>
      {children}
      <input type="submit" value={submitButton} />
    </form>
  )
}

export default Form;

export {
  Field,
  useForm
}