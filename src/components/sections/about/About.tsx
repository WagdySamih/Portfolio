import { PageTitle, ProfileImage, Section } from "@components";
import styles from "./About.module.scss";

const About: React.FC = () => {
  return (
    <Section id="about" className={styles.container}>
      <PageTitle title="About Me" />
      <div className={styles.content}>
        <div>
          <p>Hello, My name is Wagdy Samih</p>
          <p>I am a software developer with more than three years of experience,</p>
          <p>
            I graduated from the faculty of engineering, electronics and communications department 2019.
          </p>
          <p>I started my career in July 2020.</p>
          <br />
          Will, Mostly. I just like new stuff, new techs, new challenges,
          <h2>Recent Techs I been working with:</h2>
          <ul className={styles.techs}>
            <li>Javascript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Next</li>
            <li>GraphQL</li>
            <li>Node</li>
          </ul>
        </div>
        <ProfileImage
          imagePath="/images/me.webp"
          alt="Wagdy Samih Profile Image"
        />
      </div>
    </Section>
  );
};
export default About;
