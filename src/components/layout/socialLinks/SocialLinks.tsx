import { GitHubIcon, LinkedInIcon, FacebookIcon } from "@assets";
import styles from "./SocialLinks.module.scss";

const SocialLinks: React.FC = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <a
            href="https://github.com/WagdySamih"
            target={"_blank"}
            rel="noreferrer"
          >
            <GitHubIcon />
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
      <div className={styles.vertical} />
    </div>
  );
};

export default SocialLinks;
