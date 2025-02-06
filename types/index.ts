export type Project = {
  id: number;
  title: string;
  desc: string;
  img: string;
  link?: string;
  github?: string;
  tags: string[];
};

export type BlogPost = {
  id: number;
  title: string;
  description: string;
  date: string;
  type: "external" | "pdf" | "article";
  link?: string;
  content?: string;
  tags: string[];
};

export type TCommonProps = {
  title?: string;
  name?: string;
  icon?: string;
};

export type TExperience = {
  companyName: string;
  iconBg: string;
  date: string;
  points: string[];
} & Required<Omit<TCommonProps, "name">>;