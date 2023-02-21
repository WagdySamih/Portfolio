import { FacebookIcon, GitHubIcon, LinkedInIcon } from "@assets";
import { onFacebookClick, onGithubClick, onLinkedinClick } from "@libs";

import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.container}>
      <ul className={styles.social}>
        <li>
          <a
            onClick={onGithubClick}
            href="https://github.com/WagdySamih"
            target={"_blank"}
            aria-label="Github"
            rel="noreferrer"
          >
            <GitHubIcon/>
          </a>
        </li>
        <li>
          <a
            onClick={onLinkedinClick}
            href="https://www.linkedin.com/in/wagdy-samih/"
            aria-label="Linkedin"
            target={"_blank"}
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </li>
        <li>
          <a
            onClick={onFacebookClick}
            href="https://www.facebook.com/profile.php?id=100006375610497"
            aria-label="Facebook"
            target={"_blank"}
            rel="noreferrer"
          >
            <FacebookIcon />
          </a>
        </li>
      </ul>
      Made by Wagdy Samih & Inspired by the others.
    </footer>
  );
};

export default Footer;
