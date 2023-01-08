import { useEffect } from "react";
import styles from "./Header.module.scss";

export const useHeaderAnimate = () => {
  useEffect(() => {
    if (!document || !window) return;

    const body = document.body;
    const scrollUp = styles.scrollUp;
    const scrollDown = styles.scrollDown;
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        body.classList.remove(scrollUp);
        return;
      }

      if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
        // down
        body.classList.remove(scrollUp);
        body.classList.add(scrollDown);
      } else if (
        currentScroll < lastScroll &&
        body.classList.contains(scrollDown)
      ) {
        body.classList.remove(scrollDown);
        body.classList.add(scrollUp);
      }
      lastScroll = currentScroll;
    });
  }, []);
};
