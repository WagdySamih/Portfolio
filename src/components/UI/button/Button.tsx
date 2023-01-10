import styles from "./Button.module.scss";

type Props = {
  onClick?: () => void;
  className?: string;
  text: React.ReactNode;
};

const Button: React.FC<Props> = ({ text, className, onClick }) => {
  return (
    <button className={`${styles.btn} ${className}`} onClick={onClick}>
      <div>{text}</div>
    </button>
  );
};

export default Button;
