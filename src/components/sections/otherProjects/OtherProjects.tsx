import { ExternalLink, FolderIcon, GitHubIcon } from "@assets";
import { Button } from "components/UI";
import { useState } from "react";
import { projects } from "./config";

import styles from "./OtherProjects.module.scss";

const OtherProjects: React.FC = () => {
  const [list, setList] = useState(projects.slice(0, 6));
  const onClickHandler = () => {
    const newList =
      list.length === 6 ? [...projects] : [...projects.slice(0, 6)];
    setList(newList);
  };
  return (
    <section className={styles.container}>
      <div>
        {list.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
      <Button
        text={`${list.length === 6 ? "Read More" : "Read Less"}`}
        className={styles.btn}
        onClick={onClickHandler}
      />
    </section>
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
