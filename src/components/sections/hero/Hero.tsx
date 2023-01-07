import { Section } from "components/UI";
import styles from "./Hero.module.scss";

const Hero: React.FC = () => {
  return (
    <Section className={styles.container}>
      <div className={styles.hi}>Hi, My name is</div>
      <h1 className={styles.name}>Wagdy Samih.</h1>
      <div className={styles.intro}>I build things for the web.</div>
      <p className={styles.text}>
        I am software engineer, Working mostly with JavaScript frameworks
        <br />
        I have more than two year of Experience as MEAN | MERN stack developer
        <br />& right now I am working as software developer at{" "}
        <a
          href="https://www.cultofcoders.com/"
          target={"_blank"}
          rel="noreferrer"
        >
          Cult of coders
        </a>
        .
      </p>
    </Section>
  );
};
export default Hero;
