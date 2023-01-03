import { PageTitle, ProfileImage } from "../../UI";
import styles from "./About.module.scss";

const About: React.FC = () => {
  return (
    <div id="about" className={styles.container}>
      <PageTitle title="About Me" />
      <div className={styles.content}>
        <div>
          <p>Hello, My name is Wagdy Samih</p>
          <p>I am a software developer with almost three years of experience</p>
          <p>
            I graduated from the faculty of engineering, electronics and
            communications department 2019
          </p>
          <p>I started my career at July 2020</p>
          <br />
          Will, Mostly. I just like new stuff, new techs, new challenges
          <br />
          Travel sometimes, We only live once, you know!
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
          imagePath="/images/me.jpg"
          alt="Wagdy Samih Profile Image"
        />
      </div>
    </div>
  );
};
export default About;
