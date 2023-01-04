import { Button, PageTitle } from "@components";
import styles from "./Contact.module.scss";

const Contact: React.FC = () => {
  return (
    <section id="contact" className={styles.container}>
      <PageTitle title="What's next!" />
      <p>
        Well, I&lsquo;m not currently looking for a job.
        <br />
        But my inbox is always open.
        <br />
        You can text me anytime about anything you may ever need!
      </p>
      <Button text="Say Hello!" className={styles.contactBtn} />
    </section>
  );
};
export default Contact;
