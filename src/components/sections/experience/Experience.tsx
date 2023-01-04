import { useState } from "react";

import { Corner } from "@assets";
import { PageTitle } from "@components";
import { workExperience } from "./config";
import { Companies, Description } from "./components";

import styles from "./Experience.module.scss";

const Experience = () => {
  const [selectedCompany, setSelectedCompany] = useState(1);
  console.log({ selectedCompany });
  return (
    <section id="work" className={styles.container}>
      <PageTitle title="Work Experience" />
      <div className={styles.content}>
        {/* <Corner id={"1"} className={styles.topLeft} /> */}
        <div className={styles.wrapper}>
          <Description {...workExperience[+selectedCompany - 1]} />
          <Companies
            workExperience={workExperience}
            setSelectedCompany={setSelectedCompany}
          />
        </div>
        {/* <Corner id={"2"} className={styles.bottomRight} /> */}
      </div>
    </section>
  );
};

export default Experience;
