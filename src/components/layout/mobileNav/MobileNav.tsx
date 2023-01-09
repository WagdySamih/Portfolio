import { Button, HamburgerMenuBtn } from "components/UI";
import { useEffect, useState } from "react";
import { navTabs } from "../header/config";

import styles from "./MobileNav.module.scss";

type Props = {
  isOpened: boolean;
  listClassName?: string;
};

const MobileNav: React.FC<Props> = ({ isOpened, listClassName = "" }) => {
  useEffect(() => {
    if (!document || !window) return;

    const body = document.body;
    if (isOpened) body.classList.add(styles.blur);
    else body.classList.remove(styles.blur);
  }, [isOpened]);

  return (
    <div className={styles.container}>
      <aside>
        <nav className={`${styles.nav} ${isOpened ? styles.isOpen : ""}`}>
          <ol className={listClassName}>
            {navTabs.map((tab) => (
              <li key={tab}>
                <a href={`#${tab.toLowerCase()}`}>{tab}</a>
              </li>
            ))}
          </ol>
          <Button className={styles.download} text="Resume" />
        </nav>
      </aside>
    </div>
  );
};

export default MobileNav;
