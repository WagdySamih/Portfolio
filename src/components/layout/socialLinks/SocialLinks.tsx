import { GitHubIcon, LinkedInIcon, PhoneIcon } from "../../../assets";
import styles from "./SocialLinks.module.scss";

const SocialLinks = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <a href="https://github.com/WagdySamih" target={"_blank"} rel="noreferrer">
            <GitHubIcon />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/wagdy-samih/" target={"_blank"} rel="noreferrer">
            <LinkedInIcon />
          </a>
        </li>
        <li>
          <a href="tel:+201029844735">
            <PhoneIcon />
          </a>
        </li>
      </ul>
      <div className={styles.vertical} />
    </div>
  );
};

export default SocialLinks;
