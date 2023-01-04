import styles from "./Corner.module.scss";

type Props = {
  id: string;
  className?: string;
};

const ExternalLink: React.FC<Props> = ({ id, className }) => {
  return (
    <svg
      width="300"
      height="300"
      data-name="corner-top-left"
      xmlns="http://www.w3.org/2000/svg"
      className={`${styles.container} ${className}`}
    >
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0" className={styles.gradient1}></stop>
          <stop offset=".5" className={styles.gradient2}></stop>
          <stop offset="1" className={styles.gradient1}></stop>
        </linearGradient>
      </defs>
      <path
        fill={`url(#${id})`}
        d="M8 0h292l-20 20H25a5 5 0 0 0-5 5v255L0 300V8a8 8 0 0 1 8-8Z"
      ></path>
    </svg>
  );
};
export default ExternalLink;
