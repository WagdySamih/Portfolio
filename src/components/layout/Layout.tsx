import { PropsWithChildren } from "react";
import { Email, Header, SocialLinks, Footer, SEO } from "..";

import styles from "./Layout.module.scss";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className={styles.layout}>
        <div className={styles.container}>
          <SEO />
          <Header />
          <main> {children}</main>
          <Footer />
        </div>
        <SocialLinks />
        <Email />
      </div>
    </>
  );
};

export default Layout;
