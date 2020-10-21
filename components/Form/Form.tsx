import Button from "../Button";
import styles from "./Form.module.scss";

const Form = ({
  children,
  title = null,
  btnTitle = "Submit",
  handleOnSubmit,
}) => {
  return (
    <div className={styles["form-wrapper"]}>
      <h1 className={styles.title}>{title}</h1>
      <form onSubmit={(e) => handleOnSubmit(e)} className={styles.form}>
        {children}
        <Button title={btnTitle} isFullWidth isRounded />
      </form>
    </div>
  );
};

export default Form;
