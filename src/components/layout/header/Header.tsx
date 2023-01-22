import { useState } from "react";
import { Button, HamburgerMenuBtn, Logo, MobileNav } from "@components";
import { onCVDownload } from "@libs";

import { navTabs } from "./config";
import { useHeaderAnimate } from "./hooks";

import styles from "./Header.module.scss";

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
            <li className={styles.item} key={tab}>
              <a href={`#${tab.toLowerCase()}`}>{tab}</a>
            </li>
          ))}
        </ul>
        <Button
          className={styles.download}
          text={
            <a onClick={onCVDownload} href="/Wagdy Samih CV.pdf" download>
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
