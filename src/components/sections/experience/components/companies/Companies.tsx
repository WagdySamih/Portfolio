import { SetStateAction } from "react";
import { WorkExperience } from "../../models";
import styles from "./Companies.module.scss";

type Props = {
  workExperience: WorkExperience[];
  setSelectedCompany: React.Dispatch<SetStateAction<number>>;
};

const Companies: React.FC<Props> = ({ workExperience, setSelectedCompany }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Companies</h2>
      <div className={styles.curve}>
        <ul>
          {workExperience.map((w) => (
            <li
              className={styles.gradientUnderline}
              key={w.id}
              onClick={() => setSelectedCompany(w.id)}
            >
              {w.company}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Companies;
