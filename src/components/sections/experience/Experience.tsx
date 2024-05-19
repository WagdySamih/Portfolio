import { useState } from "react";

import { PageTitle, Section } from "@components";
import { Companies, Description, Overlay } from "./components";
import { workExperience } from "./config";

import styles from "./Experience.module.scss";
import { WorkExperience } from "./models";

const Experience = () => {
  const [selectedCompany, setSelectedCompany] = useState(workExperience.length);

  return (
    <Section id='work' className={styles.container}>
      <PageTitle title='Work Experience' />

      <div className={styles.wrapper}>
        <Overlay />
        <div className={styles.content}>
          <Description
            {...(workExperience.find(
              (ex) => ex.id === selectedCompany
            ) as WorkExperience)}
          />
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
