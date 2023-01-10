import { useEffect, Dispatch, SetStateAction } from "react";
import { Button } from "components/UI";
import { navTabs } from "../header/config";

import styles from "./MobileNav.module.scss";

type Props = {
  isOpened: boolean;
  setIsOpened: Dispatch<SetStateAction<boolean>>;
  listClassName?: string;
};

const MobileNav: React.FC<Props> = ({
  isOpened,
  setIsOpened,
  listClassName = "",
}) => {
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
                <a
                  href={`#${tab.toLowerCase()}`}
                  onClick={() => setIsOpened(false)}
                >
                  {tab}
                </a>
              </li>
            ))}
          </ol>
          <Button
            className={styles.download}
            text={
              <a href="/Wagdy Samih CV.pdf" download>
                Resume
              </a>
            }
          />
        </nav>
      </aside>
    </div>
  );
};

export default MobileNav;
