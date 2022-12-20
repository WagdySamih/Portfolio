import styles from "./Hero.module.scss";

const Hero: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hi}>Hi, My name is</div>
      <h1 className={styles.name}>Wagdy Samih.</h1>
      <div className={styles.intro}>I build things for the web.</div>
      <p className={styles.text}>
        I am software engineer, specialized in front-end development
        <br />
        I have more than one year of Experience in react, react native.
        <br />
        Also I&rsquo;m ITI graduate
      </p>
    </div>
  );
};
export default Hero;
