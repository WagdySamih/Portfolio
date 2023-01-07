import styles from "./Techs.module.scss";

type Props = {
  techs: string[];
  className?: string;
};

const Techs: React.FC<Props> = ({ techs, className }) => {
  return (
    <ul className={`${styles.container} ${className}`}>
      {techs.map((tech, index) => (
        <li key={tech}>
          {tech}
          {index == techs.length - 1 ? "." : ","}
        </li>
      ))}
    </ul>
  );
};

export default Techs;
