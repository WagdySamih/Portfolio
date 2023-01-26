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
      "Developed new features in TheSuperClub website.",
      "Developed new features in TheSuperClub admin dashboard website.",
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
      "Developed and maintained code in the Srvy mobile application and added new features.",
      "Maintained the admin dashboard",
      "Integrated real-time call booking using graphQL and AppSync.",
      "Was responsible for reviewing code and mentoring fresh developers.",
      // "Front-end development using React, React native.",
      // "Back-end developing using NodeJS, Express, Postgres.",
      // "Integrated real-time calls booking using graphQL, AppSync.",
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
    ],
  },
  {
    id: 3,
    company: "Qurba",
    location: "Alexandria, Egypt",
    title: "Full stack developer",
    description: [
      "Developed Qurba main website from scratch.",
      "Was completely responsible for the restaurant managers website.",
      "Implemented Google analytics and Elastic Search.",
      "Implemented logalytics using LogDNA in the whole front and back-end.",
      "Dealt with AWS S3, code pipeline, code build and cloudwatch.",
      // "Front-end developing using Angular framework.",
      // "Back-end developing using NodeJS, MongoDB, Mongoose, Express.",
      // "Version Control using Git and GitHub",
      "Tasks management using Agile and Jira.",
    ],
    date: {
      start: "July - 2020",
      end: "Sep - 2021",
    },
    techs: [
      "Angular",
      "NodeJS",
      "MongoDB",
      "Mongoose",
      "Express",
      "Elastic Search",
    ],
  },
];
