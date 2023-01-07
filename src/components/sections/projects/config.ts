import { Project } from "./model";

export const projects: Project[] = [
  {
    name: "Qurba Main website",
    url: "https://qurba.io/",
    descriptionPoints: [
      "Website for social food ordering. Where users can see offers and meals and interact with them via likes, comments, shares, and ordering from restaurants.",
    ],
    responsibilities: [
      "Was responsible for starting the website implementation from scratch.",
      "Implemented social foodies' news feed with posts, comments, replies, likes and shares.",
      "Integrated state management using NgRx",
      "getting user addresses using google, map moving, and country city and areas APIs",
      "Integrated Google and Facebook login",
    ],
    techs: [
      "angular",
      "angular universal",
      "NgRx",
      "Google maps API",
      "angularx-social-login",
    ],
    image: "",
  },
  {
    name: "Code To Geeks",
    url: "",
    descriptionPoints: [
      "A medium like website, where users can follow up with latest tech articles, and interact with them.",
    ],
    responsibilities: [
      "My role was to completely design and implement the front-end of the main website",
    ],
    techs: ["Next.js", "TypeScript", "Redux", "Redux Toolkit", "SSG", "SSR"],
    image: "",
  },
  {
    name: "E-commerce API",
    url: "https://github.com/WagdySamih/E-commerce-API",
    descriptionPoints: [
      "A complete E-commerce API with PayPal payment method and all its basic features, authentication, products, carts, orders, reviews, and a user wish list.",
    ],
    responsibilities: [
      "My role was to completely design and implement the front-end of the main website",
      "Implemented user access rules: admin user and guest",
      "Added pagination, filtering and sorting to all lists",
      "Implemented order status tracking through email service.",
    ],
    techs: ["Node.js", "Paypal-rest-SDK", "Express", "Mongoose", "JWT"],
    image: "",
  },
];
