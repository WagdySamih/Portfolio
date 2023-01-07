import { useState } from "react";

import { PageTitle, Section } from "@components";
import { Companies, Description, Overlay } from "./components";
import { workExperience } from "./config";

import styles from "./Experience.module.scss";

const Experience = () => {
  const [selectedCompany, setSelectedCompany] = useState(1);

  return (
    <Section id="work" className={styles.container}>
      <PageTitle title="Work Experience" />

      <div className={styles.wrapper}>
        <Overlay />
        <div className={styles.content}>
          <Description {...workExperience[+selectedCompany - 1]} />
          <Companies
            workExperience={workExperience}
            setSelectedCompany={setSelectedCompany}
          />
        </div>
      </div>
    </Section>
  );
};

export default Experience;
