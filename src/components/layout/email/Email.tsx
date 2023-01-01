import styles from "./Email.module.scss";

const Email = () => {
  return (
    <div className={styles.container}>
      <a className={styles.email} href="mailto:wagdysamih787@gmail.com">
        wagdysamih787@gmail.com
      </a>
      <div className={styles.vertical} />
    </div>
  );
};

export default Email;