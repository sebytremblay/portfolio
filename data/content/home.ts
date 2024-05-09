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

export const testimonials: Testimonial[] = [
  {
    quote:
      "The communication throughout the project was spot on and the genre of design was carried out well.",
    name: "Wilson Bright",
    job: "Co-Founder of BlockSurvey",
  },
  {
    quote:
      "The code was clean, easy to understand, and exactly what I was looking for.",
    name: "Philip Imperato",
    job: "CEO of VisualBonus",
  },
  {
    quote:
      "My vision was executed perfectly. The quality and speed of the work was excellent.",
    name: "Zach Green",
    job: "Founder of Hangxiety Shrink",
  },
];

export const experiences: TExperience[] = [
  {
    title: "Software Engineering Intern",
    companyName: "Salesforce",
    icon: "/static/logos/salesforce.png",
    iconBg: "#ade0ed",
    date: "May 2024 - Present",
    points: [
      // TODO
    ],
  },
  {
    title: "Software Tools Co-Op",
    companyName: "Insulet Corporation",
    icon: "/static/logos/insulet.png",
    iconBg: "#C7B2D7",
    date: "July 2023 - December 2023",
    points: [
        // TODO
    ],
  },
  {
    title: "Software Engineering Intern",
    companyName: "Ultimate Kronos Group (UKG)",
    icon: "/static/logos/ukg.png",
    iconBg: "#f7f7f7",
    date: "May 2022 - December 2022",
    points: [
      // TODO
    ],
  }
];
