import { Button, HamburgerMenuBtn, Logo, MobileNav } from "@components";
import { navTabs } from "./config";
import { useHeaderAnimate } from "./hooks";

import styles from "./Header.module.scss";
import { useState } from "react";

const Header: React.FC = () => {
  useHeaderAnimate();
  const [isOpened, setIsOpened] = useState(false);

  return (
    <header className={styles.container}>
      <div>
        <Logo />
      </div>
      <div className={styles.nav}>
        <ul>
          {navTabs.map((tab) => (
            <li key={tab}>
              <a href={`#${tab.toLowerCase()}`}>{tab}</a>
            </li>
          ))}
        </ul>
        <Button
          className={styles.download}
          text={
            <a href="/Wagdy Samih CV.pdf" download>
              Resume
            </a>
          }
        />
      </div>

      <HamburgerMenuBtn
        className={styles.hamburger}
        setIsOpened={setIsOpened}
        isOpened={isOpened}
      />
      <MobileNav
        listClassName={styles.mobNav}
        isOpened={isOpened}
        setIsOpened={setIsOpened}
      />
    </header>
  );
};

export default Header;
