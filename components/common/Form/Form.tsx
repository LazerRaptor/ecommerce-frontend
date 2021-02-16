import Button from "../../ui/Button";
import styles from "./Form.module.scss";

const Form = ({
  children,
  legend = null,
  btnTitle = "Submit",
  handleOnSubmit,
}) => {
  return (
    <div className={styles["form-wrapper"]}>
      <form onSubmit={(e) => handleOnSubmit(e)} className={styles.form}>
        <fieldset>
          <legend className={styles.legend}>{legend}</legend>
          {children}
        </fieldset>
        <Button title={btnTitle} isFullWidth isRounded isSubmit />
      </form>
    </div>
  );
};

export default Form;
