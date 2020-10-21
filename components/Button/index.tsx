import { classnames } from '../../lib/utils/classnames';
import styles from './index.module.scss';


type Props = {
  title: string;
  variant?: "primary" | "info" | "warning" | "danger" | "success" | null;
  size?: "xs" | "sm" | "lg" | "xl" | null;
  isRounded?: boolean;
  isSubmit?: boolean;
  isFullWidth?: boolean;
};

const Button = ({ title, variant=null, size=null, isRounded=false, isSubmit=false, isFullWidth=false }: Props) => {
  const classes = {
    [styles.btn]: true,
    [styles.primary]: variant === 'primary', 
    [styles.info]: variant === 'info', 
    [styles.warning]: variant === 'warning', 
    [styles.danger]: variant === 'danger', 
    [styles.success]: variant === 'success', 
    [styles.xs]: size === 'xs', 
    [styles.sm]: size === 'sm', 
    [styles.lg]: size === 'lg', 
    [styles.xl]: size === 'xl', 
    [styles.rounded]: isRounded, 
    [styles.fullwidth]: isFullWidth, 
  }
  const myClass = classnames(classes)
  return <button className={myClass} type={isSubmit ? "submit" : null}>{title}</button>;
};


export default Button;
