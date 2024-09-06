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
    title: "Software Engineering Intern",
    companyName: "Salesforce",
    icon: "/static/logos/salesforce.png",
    iconBg: "#ade0ed",
    date: "May 2024 - Present",
    points: [
      "Led integration of management tools for Intelligent Document Processing executions into the MuleSoft admin console.",
    ],
  },
  {
    title: "Software Tools Co-Op",
    companyName: "Insulet Corporation",
    icon: "/static/logos/insulet.png",
    iconBg: "#C7B2D7",
    date: "July 2023 - December 2023",
    points: [
        "Developed and supported internal software for our manufacturing team, helping streamline product quality testing.",
    ],
  },
  {
    title: "Software Engineering Intern",
    companyName: "Ultimate Kronos Group (UKG)",
    icon: "/static/logos/ukg.png",
    iconBg: "#f7f7f7",
    date: "May 2022 - December 2022",
    points: [
      "Enhanced and maintained the Performance Reviews feature of our UKG Pro product.",
    ],
  }
];
