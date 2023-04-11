import { Project } from "./model";

export const projects: Project[] = [
  {
    name: "Qurba Main website",
    url: "https://qurba.io/",
    descriptionPoints: [
      "Website for social food ordering where users can see offers and meals and interact with them via like comments, shares, and orders from restaurants.",
    ],
    responsibilities: [
      "Took full ownership of website implementation from scratch.",
      "Implemented social foodies' news feed with posts, comments, likes, and shares",
      "Integrated state management using NgRx.",
      "Obtaining User Addresses with Google Maps API: Geolocation, Mapping, and Country/City/Area Data.",
      "Implemented Google and Facebook login for seamless authentication.",
      "Integrated Google and Facebook login.",
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
      "I was responsible for creating and executing the front-end design of the primary website in its entirety.",
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
      "My role was to implement the API from scratch completely.",
      "Implemented user access rules: admin, user and guest.",
      "Added pagination, filtering and sorting to all lists.",
      "Integrated email messaging service to enable order status tracking.",
    ],
    techs: ["Node.js", "Paypal-rest-SDK", "Express", "Mongoose", "JWT"],
    image: "",
  },
];
