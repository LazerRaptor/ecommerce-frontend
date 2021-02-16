import { setClassname } from "../../../lib/utils/setClassname";
import styles from "./Button.module.scss";

type Props = {
  title: string;
  variant?: "primary" | "info" | "warning" | "danger" | "success" | null;
  size?: "xs" | "sm" | "lg" | "xl" | null;
  isRounded?: boolean;
  isOutlined?: boolean;
  isSubmit?: boolean;
  isFullWidth?: boolean;
  isBold?: boolean;
};

const Button = ({
  title,
  variant = null,
  size = null,
  isRounded = false,
  isOutlined = false,
  isSubmit = false,
  isFullWidth = false,
  isBold = false,
}: Props) => {
  const classes = {
    [styles.btn]: true,
    [styles.primary]: variant === "primary",
    [styles.info]: variant === "info",
    [styles.warning]: variant === "warning",
    [styles.danger]: variant === "danger",
    [styles.success]: variant === "success",
    [styles.xs]: size === "xs",
    [styles.sm]: size === "sm",
    [styles.lg]: size === "lg",
    [styles.xl]: size === "xl",
    [styles.outlined]: isOutlined,
    [styles.rounded]: isRounded,
    [styles.fullwidth]: isFullWidth,
    [styles.bold]: isBold,
  };
  const myClass = setClassname(classes);
  return (
    <button className={myClass} type={isSubmit ? "submit" : null}>
      {title}
    </button>
  );
};

export default Button;
