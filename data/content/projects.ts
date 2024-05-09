import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Automated Attendance Tracker",
    desc: "Automatically tracks appearances using facial recognition.",
    img: "/static/projects/yei-learn.png",
    link: "https://ye",
    github: "https://github.com/sebytremblay/attendance-assistant",
    tags: ["Python", "Azure", "Google Cloud Platform", "OpenCV"],
  },
  {
    id: 1,
    title: "Twitter Stock Predictions",
    desc: "Predicts stock prices by analyzing tweets from financial influencers.",
    img: "/static/projects/buildfaster.png",
    github: "https://github.com/sebytremblay/tweet-stock-prediction",
    tags: ["Python", "sklearn", "NLTK", "Pandas", "Numpy"],
  },
  {
    id: 2,
    title: "Job Description Analyzer",
    desc: "Analyzes job descriptions to provide insights on the most desired skills.",
    img: "/static/projects/react-emoji-search.png",
    github: "https://github.com/hugh-parker/JobAssist",
    tags: ["Python", "sklearn", "NLTK", "Pandas", "Numpy"],
  },
  {
    id: 3,
    title: "2048 Game",
    desc: "A simple 2048 game built with React.",
    img: "/static/projects/react-emoji-search.png",
    github: "https://github.com/sebytremblay/2048Game",
    tags: ["React", "Typescript", "MongoDB", "REST API"],
  },
  {
    id: 4,
    title: "Open-Source Game Platform",
    desc: "Battleship extension for a open-source game platform.",
    img: "/static/projects/react-emoji-search.png",
    github: "https://github.com/neu-cs4530/spring-23-team-208",
    tags: ["React", "Typescript", "Node", "Jest"],
  },
  {
    id: 5,
    title: "Student Organization Portal",
    desc: "A portal for student organizations to manage their members and events.",
    img: "/static/projects/react-emoji-search.png",
    github: "https://github.com/sebytremblay/delt-website",
    link: "https://sebytremblay.github.io/delt-website/home",
    tags: ["Project Management", "React", "Typescript", "HTML", "CSS"]
  }
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects
