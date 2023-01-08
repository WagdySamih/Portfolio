import { Button, Logo } from "@components";
import { navTabs } from "./config";
import { useHeaderAnimate } from "./hooks";

import styles from "./Header.module.scss";

const Header: React.FC = () => {
  useHeaderAnimate();

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
        <Button className={styles.download} text="Resume" />
      </div>
    </header>
  );
};

export default Header;
