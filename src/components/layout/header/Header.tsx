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
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <button className={styles.download}>Resume</button>
      </div>
    </header>
  );
};

export default Header;
