import { useEffect } from "react";

/**
 *  @description: end the preloading animation through the following steps
 *    1- scaling logo down to 0%
 *    2- remove the preloader after 500ms
 */

// time to draw the polygon and show the middle logo
const END_ANIMATION_OFFSET = 4000;
const REMOVE_PRELOADER_ANIMATION_OFFSET = END_ANIMATION_OFFSET + 500;
const PRELOADER_REMOVE_OFFSET = END_ANIMATION_OFFSET + 500;

const useEndPreloader = () => {
  useEffect(() => {
    if (typeof window === "undefined" || !document) return;

    const preloader = document.getElementById("preloader");
    const logo = document.getElementById("preloader-logo");
    if (!preloader || !logo) return;

    // Removing preloader animation start
    setTimeout(() => {
      logo.style.transform = "scale(0)";
      logo.style.opacity = "0";
    }, REMOVE_PRELOADER_ANIMATION_OFFSET);

    // Remove preloader node
    setTimeout(() => {
      preloader.remove();
      document.body.style.overflow = "initial";
    }, PRELOADER_REMOVE_OFFSET);
  }, []);
};

export { useEndPreloader };
