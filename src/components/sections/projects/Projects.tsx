import { PageTitle, Section, Techs } from "components/UI";
import styles from "./Projects.module.scss";
import { projects } from "./config";
import { Project } from "./model";

const Projects = () => {
  return (
    <Section id="projects" className={styles.container}>
      <PageTitle title="Featured Projects" />
      {projects.map((project) => (
        <Project key={project.name} {...project} />
      ))}
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
      <h2 className={styles.title}>{name}</h2>
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
