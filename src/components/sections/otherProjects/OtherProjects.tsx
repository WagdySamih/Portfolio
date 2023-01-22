import { useState } from "react";
import { Button, Section, Techs } from "@components";
import { useCardsAnimate } from "@libs";
import { ExternalLink, FolderIcon, GitHubIcon } from "@assets";
import { projects } from "./config";

import styles from "./OtherProjects.module.scss";

const OtherProjects: React.FC = () => {
  const [list, setList] = useState(projects.slice(0, 6));
  useCardsAnimate("#projects-cards", list);
  const onClickHandler = () => {
    const newList =
      list.length === 6 ? [...projects] : [...projects.slice(0, 6)];
    setList(newList);
  };
  return (
    <Section className={styles.container} id="projects-cards">
      <h2 className={styles.title}>Other Projects</h2>
      <div id="projects-cards">
        {list.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
      <Button
        text={`${list.length === 6 ? "Read More" : "Read Less"}`}
        className={styles.btn}
        onClick={onClickHandler}
      />
    </Section>
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
        <h3 className={styles.title}>{title}</h3>
      </header>
      <main>
        <p>{description}</p>
      </main>
      <footer>
        <Techs className={styles.techs} techs={techs} />
      </footer>
    </div>
  );
};
