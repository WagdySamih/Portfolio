import { useEffect } from "react";
const START_SHOW_AFTER = 300;

export const useSectionsAnimate = () => {
  useEffect(() => {
    if (typeof document == "undefined") return;

    const elements = document.querySelectorAll(
      "section:not(:nth-of-type(1),:nth-of-type(4),:nth-of-type(5))"
    ) as NodeListOf<HTMLElement>;

    document.addEventListener("scroll", animate.bind(null, elements));
    () => document.removeEventListener("scroll", animate.bind(null, elements));
  }, []);
};

const animate = (elements: NodeListOf<HTMLElement>) => {
  const top = window.pageYOffset + window.innerHeight;
  elements.forEach((el) => {
    const isVisible = top - START_SHOW_AFTER > el!.offsetTop;
    if (isVisible && !el?.classList.contains("animate")) {
      el?.classList.add("animate");
    }
  });
};
