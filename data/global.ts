import { link } from "fs"

type Route = {
  title: string,
  path: string
}

type FooterCol = {
  title: string,
  links: {
    name: string,
    link: string,
    icon?: string,
    leavesWebsite: boolean
  }[]
}

type Footer = {
  columns: FooterCol[]
};

export const routes: Route[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  // {
  //   title: "Resume",
  //   path: "/resume",
  // }
];

export const socials = {
  github: {
    name: "GitHub",
    link: "https://github.com/sebytremblay",
    icon: "/static/icons/github-f.svg",
    leavesWebsite: true,
  },
  linkedIn: {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sebastiantremblay/",
    icon: "/static/icons/linkedin-f.svg",
    leavesWebsite: true,
  },
}

export const footer: Footer = {
  columns: [
    {
      title: "Pages",
      links: routes.map(route => ({
        name: route.title,
        link: route.path,
        leavesWebsite: false
      }))
    },
    {
      title: "Social",
      links: [
        {
          name: "GitHub",
          link: "https://github.com/sebytremblay",
          icon: "/static/icons/github-f.svg",
          leavesWebsite: true,
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/sebastiantremblay/",
          icon: "/static/icons/linkedin-f.svg",
          leavesWebsite: true,
        },
        {
          name: "Email",
          link: "mailto:tremblay.se@northeastern.edu",
          icon: "/static/icons/mail-f.svg",
          leavesWebsite: true,
        },
      ],
    },
  ],
};
