import { useEffect } from "react";
import styles from "./Header.module.scss";
const scrollUp = styles.scrollUp;
const scrollDown = styles.scrollDown;
let lastScroll = 0;
const HideHeaderOffset = 500;

export const useHeaderAnimate = () => {
  useEffect(() => {
    if (!document || !window) return;
    window.addEventListener("scroll", HandleScroll);
  }, []);
};

const HandleScroll = () => {
  const body = document.body;

  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    body.classList.remove(scrollUp);
    return;
  }

  const shouldRemoveHeader =
    currentScroll > HideHeaderOffset &&
    currentScroll > lastScroll &&
    !body.classList.contains(scrollDown);

  const shouldDisplayHeader =
    currentScroll < lastScroll && body.classList.contains(scrollDown);

  if (shouldRemoveHeader) {
    body.classList.remove(scrollUp);
    body.classList.add(scrollDown);
  } else if (shouldDisplayHeader) {
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp);
  }

  lastScroll = currentScroll;
};
