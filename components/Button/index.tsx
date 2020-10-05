type Props = {
  title: string;
  type?: "primary" | "info" | "warning" | "danger" | null;
  size?: "xs" | "sm" | "base" | "lg" | "xl" | null;
  rounded?: boolean;
};

const Button = (props: Props) => {
  const rounded = props.rounded ? "rounded" : null;
  const variant = ["btn", props.type, props.size, rounded]
    .filter((prop) => prop)
    .join(" btn-");
  return <button className={variant}>{props.title}</button>;
};

Button.defaultProps = {
  variant: null,
  size: null,
  rounded: true,
};

export default Button;
