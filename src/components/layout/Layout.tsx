import { PropsWithChildren } from "react";
import { Email, Header, SocialLinks, Footer } from "..";

import styles from "./Layout.module.scss";
import { SEO } from "./SEO";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <SEO />
      <div className={styles.layout}>
        <div className={styles.container}>
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
