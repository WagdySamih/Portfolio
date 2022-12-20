import React from "react";
import { Logo } from "../logo";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.container}>
      <div>
        <Logo />
      </div>
      <div className={styles.nav}>
        <ul>
          <li>
            <a href="About">About</a>
          </li>
          <li>
            <a href="Projects">Projects</a>
          </li>
          <li>
            <a href="Work">Work</a>
          </li>
          <li>
            <a href="About">Contact</a>
          </li>
        </ul>
        <button className={styles.download}>Resume</button>
      </div>
    </header>
  );
};

export default Header;
