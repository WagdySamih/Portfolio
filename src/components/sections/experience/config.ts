import { WorkExperience } from "./models";

export const workExperience: WorkExperience[] = [
  {
    id: 1,
    company: "Cult of coders",
    location: "Iasi, Romania",
    title: "Mid level - Full stack developer",
    date: {
      start: "Aug - 2022",
      end: "current",
    },
    description: [
      "Expanded functionality of The Super Club website and admin dashboard by developing new features for streamlined event management.",
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
      "Implemented real-time call booking through AppSync and GraphQL integration.",
      "Conducted code reviews and implemented best practices to maintain the quality of the Srvy app codebase.",
      "Mainted backend with Node, Express & Postgres database",
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
    id: 3,
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
