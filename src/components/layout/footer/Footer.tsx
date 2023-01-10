import { FacebookIcon, GitHubIcon, LinkedInIcon } from "@assets";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.container}>
      <ul className={styles.social}>
        <li>
          <a
            href="https://github.com/WagdySamih"
            target={"_blank"}
            rel="noreferrer"
          >
            <GitHubIcon/>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/wagdy-samih/"
            target={"_blank"}
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=100006375610497"
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
