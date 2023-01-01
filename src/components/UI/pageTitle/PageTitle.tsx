import styles from "./PageTitle.module.scss";

type Props = {
  title: string;
};

const PageTitle: React.FC<Props> = ({ title }) => {
  return <h1 className={styles.title}>{title}</h1>;
};

export default PageTitle;
