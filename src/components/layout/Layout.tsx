import { PropsWithChildren } from "react";
import { Email, Header, SocialLinks, Footer } from "..";

import styles from "./Layout.module.scss";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <Header />
        <main> {children}</main>
        <Footer />
      </div>
      <div className={styles["bottom-links"]}>
        <SocialLinks />
        <Email />
      </div>
    </div>
  );
};

export default Layout;
