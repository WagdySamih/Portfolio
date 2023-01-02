import React from "react";
import { Button } from "../../UI";
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
        <Button text="Resume" />
      </div>
    </header>
  );
};

export default Header;
