import { Calendar, Pin } from "@assets";
import { WorkExperience } from "../../models";
import styles from "./Description.module.scss";

const Description: React.FC<WorkExperience> = ({
  company,
  location,
  techs,
  date,
  description,
  title,
}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.company}>{company}</h2>
      <div className={styles.info}>
        <Calendar />
        <div className={styles.date}>
          {date.start} {date.end}
        </div>
        <Pin />
        <address className={styles.location}>{location}</address>
      </div>
      <ul className={styles.description}>
        {description.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
      <ul className={styles.techs}>
        {/* Techs:{" "} */}
        {techs.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
    </div>
  );
};

export default Description;
