import styles from "./Section.module.scss";

type Props = {
  id?: string;
  className?: string;
};

const Section: React.FC<React.PropsWithChildren<Props>> = ({
  id,
  className = "",
  children,
}) => (
  <section id={id} className={`${className} ${styles.container}`}>
    {children}
  </section>
);

export default Section;
