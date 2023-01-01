import { PageTitle } from "../../pageTitle";
import styles from "./About.module.scss";

const About: React.FC = () => {
  return (
    <div className={styles.container}>
     <PageTitle title="About Me"/>
    </div>
  );
};
export default About;
