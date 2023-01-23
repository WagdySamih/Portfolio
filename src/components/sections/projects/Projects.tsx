import { PageTitle, Section, Techs } from "components/UI";
import styles from "./Projects.module.scss";
import { projects } from "./config";
import { Project } from "./model";
import { useCardsAnimate } from "@libs";

const Projects = () => {
  useCardsAnimate("#projects", undefined);
  return (
    <Section id="projects" className={styles.container}>
      <PageTitle title="Featured Projects" />
      <div>
        {projects.map((project) => (
          <Project key={project.name} {...project} />
        ))}
      </div>
    </Section>
  );
};

const Project: React.FC<Project> = ({
  name,
  url,
  responsibilities,
  descriptionPoints,
  techs,
  image,
}) => {
  return (
    <div className={styles.projectContainer}>
      <h3 className={styles.title}>{name}</h3>
      <ul className={styles.description}>
        {descriptionPoints.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
      <ul className={styles.responsibilities}>
        {responsibilities.map((r) => (
          <li key={r}>{r}</li>
        ))}
      </ul>
      <Techs techs={techs} />
    </div>
  );
};

export default Projects;
