import { socialLinks } from "./config";

import styles from "./SocialLinks.module.scss";

const SocialLinks: React.FC = () => {
  return (
    <div className={styles.container}>
      <ul>
        {socialLinks.map(({ link, onClick, icon, ["aria-label"]: label }) => (
          <li key={link}>
            <a href={link} target={"_blank"} aria-label={label} rel="noreferrer">
              {icon}
            </a>
          </li>
        ))}
      </ul>
      <div className={styles.vertical} />
    </div>
  );
};

export default SocialLinks;
