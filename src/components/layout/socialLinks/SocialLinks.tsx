import { GitHubIcon, LinkedInIcon, PhoneIcon } from "../../../assets";
import styles from "./SocialLinks.module.scss";

const SocialLinks = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <a href="https://github.com/MohamedMagdi0">
            <GitHubIcon />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/mohamed-magdi-00">
            <LinkedInIcon />
          </a>
        </li>
        <li>
          <a href="tel:+201207677851">
            <PhoneIcon />
          </a>
        </li>
      </ul>
      <div className={styles.vertical} />
    </div>
  );
};

export default SocialLinks;
