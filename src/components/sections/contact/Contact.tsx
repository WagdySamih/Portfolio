import { Button, PageTitle, Section } from "@components";
import styles from "./Contact.module.scss";
import { onEmailClick } from "@libs";

const Contact: React.FC = () => {
  return (
    <Section id='contact' className={styles.container}>
      <PageTitle title="What's next!" />
      <p>
        Well, I&lsquo;m not currently looking for a job.
        <br />
        But my inbox is always open.
        <br />
        You can text me anytime about anything you may ever need!
      </p>
      <Button
        text={
          <a
            aria-label='Email'
            rel='preconnect'
            onClick={onEmailClick}
            href={"mailto:WagdySamih787@gmail.com"}
          >
            Say Hello!
          </a>
        }
        className={styles.contactBtn}
      />
    </Section>
  );
};
export default Contact;
