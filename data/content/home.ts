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
    title: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    title: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    title: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    title: "Next.js",
    icon: "https://cdn.simpleicons.org/nextdotjs/white",
  },
  {
    title: "Rust",
    icon: "https://cdn.simpleicons.org/rust/white",
  },
  {
    title: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    title: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  },
  {
    title: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    title: "Kafka",
    icon: "https://cdn.simpleicons.org/apachekafka/white",
  },
  {
    title: "Redis",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },
  {
    title: "Temporal",
    icon: "https://cdn.simpleicons.org/temporal/white",
  },
  {
    title: "LangGraph",
    icon: "https://cdn.simpleicons.org/langgraph",
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
