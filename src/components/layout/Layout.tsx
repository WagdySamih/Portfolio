import { PropsWithChildren } from "react";
import { Email } from "./email";
import { Header } from "./header";
import { SocialLinks } from "./socialLinks";

import styles from "./Layout.module.scss";
const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <Header />
        <main> {children}</main>
      </div>
      <div className={styles["bottom-links"]}>
        <SocialLinks />
        <Email />
      </div>
    </div>
  );
};

export default Layout;
