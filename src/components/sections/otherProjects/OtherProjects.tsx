import { ExternalLink, FolderIcon, GitHubIcon } from "@assets";
import { projects } from "./config";

import styles from "./OtherProjects.module.scss";

const OtherProjects: React.FC = () => {
  return (
    <div className={styles.container}>
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
};

export default OtherProjects;

type Props = {
  deploymentLink?: string;
  githubLink?: string;
  title: string;
  description: string;
  techs: string[];
};

const ProjectCard: React.FC<Props> = ({
  deploymentLink,
  githubLink,
  title,
  description,
  techs,
}) => {
  return (
    <div className={styles.card}>
      <header className={styles.header}>
        <div className={styles.icons}>
          <FolderIcon />
          <div className={styles.links}>
            {githubLink && (
              <a href={githubLink} target={"_blank"} rel="noreferrer">
                <GitHubIcon />
              </a>
            )}
            {deploymentLink && (
              <a href={deploymentLink} target={"_blank"} rel="noreferrer">
                <ExternalLink />
              </a>
            )}
          </div>
        </div>
        <h2 className={styles.title}>{title}</h2>
      </header>
      <main>
        <p>{description}</p>
      </main>
      <footer>
        <ul>
          {techs.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </footer>
    </div>
  );
};
