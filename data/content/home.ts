import { TExperience } from "types";

type Skill = {
  title: string,
  icon: string,
  style?: object
};
type Testimonial = {
  quote: string,
  name: string,
  job: string
};

export const skills: Skill[] = [
  {
    title: "C#",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  },
  {
    title: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    title: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    title: "Typescript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    title: "C",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  {
    title: "SQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    title: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    title: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    title: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    title: "NumPy",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  },
  {
    title: "Pandas",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  },
  {
    title: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
];

export const testimonials: Testimonial[] = [];

export const experiences: TExperience[] = [
  {
    title: "Software Engineer",
    companyName: "Salesforce, Agentic Registry",
    icon: "/static/logos/salesforce.png",
    iconBg: "#ade0ed",
    date: "2025 - Present",
    points: [
      "Architected and launched the Public MCP Registry to solve fragmented discovery of thousands of MCP servers.",
    ],
  },
  {
    title: "Software Engineer",
    companyName: "Salesforce, Intelligent Document Processing",
    icon: "/static/logos/salesforce.png",
    iconBg: "#ade0ed",
    date: "2024",
    points: [
      "Designed observability and monitoring tools for the Intelligent Document Processing service, integrating them into the MuleSoft admin console.",
    ],
  },
  {
    title: "Founder",
    companyName: "GitMarks",
    icon: "/static/logos/git_marks.png",
    iconBg: "#FFFFFF",
    date: "2024",
    points: [
      "Led a 6-member team to drive the development of a full-stack grading platform for GitHub, helping expose students to industry-standard development workflows.",
    ],
  },
];
