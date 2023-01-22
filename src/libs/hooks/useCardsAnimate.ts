import { useEffect } from "react";

const START_SHOW_AFTER = 200;

export const useCardsAnimate = (id: string, list?: any[]) => {
  useEffect(() => {
    // let elements: NodeListOf<HTMLElement>;
    if (typeof document == "undefined") return;

    // Select all cards and titles
    const elements = document.querySelectorAll(
      `${id} > h1, ${id} > h2, ${id} > div > div`
    ) as NodeListOf<HTMLElement>;

    cardsAnimate.bind(null, elements)();
    document.addEventListener("scroll", cardsAnimate.bind(null, elements));
    () =>
      document.removeEventListener("scroll", cardsAnimate.bind(null, elements));
  }, [list, id]);
};

const cardsAnimate = (elements: NodeListOf<HTMLElement>) => {
  const top = window.pageYOffset + window.innerHeight;
  for (let i = 0; i < elements.length; i++) {
    const el = elements[i];
    const isVisible = top - START_SHOW_AFTER > el!.offsetTop;
    setTimeout(() => {
      if (isVisible && !el?.classList.contains("animate-card")) {
        el?.classList.add("animate-card");
      }
      // the max size of elements in projects-cards
    }, (i * 100) % 700);
  }
};
