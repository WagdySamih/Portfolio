import { WorkExperience } from "./models";

export const workExperience: WorkExperience[] = [
  {
    id: 5,
    company: "Oanda - Coinpass",
    location: "London, United Kingdom",
    title: "Full stack developer",
    date: {
      start: "Oct - 2023",
      end: "current",
    },
    description: [
      "Built, designed, and styled the Affiliates Admin portal from scratch using NextJS 14 and TypeScript, featuring comprehensive forms with validations (Yup, Formik) and AWS Amplify login",
      "Implemented security measures to enhance website security.",
      "Designed and implemented new control/admin panel features, improving usability and functionality.",
      "Played a key role in rebranding Coinpass.com to OANDA Crypto, ensuring a smooth transition and consistent user experience.",
    ],
    techs: ["Next.Js", "TypeScript", "GraphQL", "Apollo client", "TailwandCSS"],
  },
  {
    id: 4,
    company: "RetreatPartner",
    location: "Germany",
    title: "Full stack developer",
    date: {
      start: "Jul - 2023",
      end: "current",
    },
    description: [
      "Led front-end team, refactoring 75% of codebase, boosting performance through code splitting and removing redundant UI libraries.",
      "Engineered a comprehensive global search feature with advanced filtering options similar to Airbnb",
      "Instrumental in UI development, implementing reusable code and components, and driving website optimization efforts to ensure seamless user experiences.",
      "Developed reusable code and components, maintaining readability and quick bug fixes.",
    ],
    techs: ["Next.Js", "TypeScript", "GraphQL", "Apollo client", "TailwandCSS"],
  },
  {
    id: 3,
    company: "Cult of coders",
    location: "Iasi, Romania",
    title: "Mid level - Full stack developer",
    date: {
      start: "Aug - 2022",
      end: "current",
    },
    description: [
      "Expanded functionality of The Super Club website and admin dashboard by developing new features for streamlined event management.",
      " Assumed full ownership and successfully implemented the AgencyBox landing page.",
      "Leveraged technical expertise to enhance the project management capabilities of Agency Box website with the development of new features for small businesses.",
      "Front-end development using React, Next.Js, GraphQL, Apollo client.",
    ],
    techs: ["React", "Next.Js", "GraphQL", "Apollo client", "Antd"],
  },
  {
    id: 2,
    company: "Callvita LLC",
    location: "Cairo, Egypt",
    title: "Software engineer",
    description: [
      "Led development of new features and improvements for Srvy app, ensuring quality and timely delivery.",
      "Developed new features, maintained the Srvy app, and translated 40+ wireframes into prototypes",
      "Implemented real-time call booking through AppSync and GraphQL integration.",
      "Conducted code reviews, mentored junior developers, and led pair programming sessions",
      "Maintained backend with Node, Express & Postgres database",
    ],

    date: {
      start: "Sep - 2021",
      end: "Aug - 2022",
    },
    techs: [
      "React",
      "React native",
      "NodeJS",
      "Express",
      "Postgres",
      "graphQL",
      "Apollo client",
      "AppSync",
      "AWS",
    ],
  },
  {
    id: 1,
    company: "Qurba",
    location: "Alexandria, Egypt",
    title: "Full stack developer",
    description: [
      "Developed Qurba’s main website from scratch.",
      "Oversaw the restaurant manager’s website, handling all aspects of its functionality.",
      "Implemented Elastic Search in restaurant managers' applications.",
      "Implemented Google analytics and Elastic Search.",
      "Implemented Logalytics using LogDNA for comprehensive front/ back-end logging",
      "Managed AWS S3, CodePipeline, CodeBuild, and CloudWatch for efficient.deployment and monitoring",
      "Monitored backend performance using NewRelic",
      "Task management using Agile, and Jira",
    ],
    date: {
      start: "July - 2020",
      end: "Sep - 2021",
    },
    techs: [
      "Angular",
      "Ngrx",
      "NodeJS",
      "MongoDB",
      "Mongoose",
      "Express",
      "Elastic Search",
    ],
  },
];
