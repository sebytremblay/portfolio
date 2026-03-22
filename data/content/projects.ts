import { kebabCase } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    title: "Graph Theory Arbitrage",
    desc: "Prediction market arbitrage system using graph theory, SAT solving, and real-time WebSocket execution.",
    img: "/static/projects/graph-theory-arbitrage.svg",
    github: "https://github.com/sebytremblay/graph-theory-trading",
    tags: ["Python", "Graph Theory", "Prediction Markets", "NetworkX", "WebSockets", "SAT Solving", "React"],
  },
  {
    title: "Code Review Decomposition Service",
    desc: "AI-powered LangGraph pipeline that decomposes PRs into reviewable tasks.",
    img: "/static/projects/code-review-decomposition.svg",
    github: "https://github.com/sebytremblay/commits",
    tags: ["TypeScript", "LangGraph", "Next.js", "Anthropic Claude", "Tree-sitter", "Prisma"],
  },
  {
    title: "Surface Plugin",
    desc: "Claude Code plugin that turns AI session transcripts into structured PR descriptions.",
    img: "/static/projects/surface-plugin.svg",
    github: "https://github.com/sebytremblay/commits",
    tags: ["Python", "Claude Code", "Git", "Plugins"],
  },
  {
    title: "Standup Plugin",
    desc: "Claude Code plugin that generates standup-ready status updates from session traces.",
    img: "/static/projects/standup-plugin.svg",
    github: "https://github.com/AlexanderBZ/claude-status-update",
    tags: ["Python", "Claude Code", "Git", "CLI", "NLP"],
  },
  {
    title: "Wordle Bot",
    desc: "AI-powered Wordle solver using MCTS, minimax, and information theory.",
    img: "/static/projects/wordle-bot.svg",
    github: "https://github.com/sebytremblay/wordle_bot",
    tags: ["Python", "React", "TypeScript", "Flask", "Monte Carlo Tree Search", "Supabase"],
  },
  {
    title: "Automated Attendance Tracker",
    desc: "Automatically tracks appearances using facial recognition.",
    img: "/static/projects/attendance-assistant.png",
    github: "https://github.com/sebytremblay/attendance-assistant",
    tags: ["Python", "Azure", "Google Cloud Platform", "OpenCV"],
  },
  {
    title: "Financial Data Scraper",
    desc: "Scrapes data from Twitter and uses fine-tuned RoBERTA model to classify financial information.",
    img: "/static/projects/twitter-scraper.png",
    github: "https://github.com/sebytremblay/twitter_scraper",
    tags: ["Python", "PyTorch", "Twscrape", "RoBERTA", "Pandas"],
  },
  {
    title: "Twitter Stock Predictions",
    desc: "Predicts stock prices by analyzing tweets from financial influencers.",
    img: "/static/projects/stock-predictions.png",
    github: "https://github.com/sebytremblay/tweet-stock-prediction",
    tags: ["Python", "sklearn", "NLTK", "Pandas", "Numpy"],
  },
  {
    title: "Job Description Analyzer",
    desc: "Analyzes job descriptions to provide insights on the most desired skills.",
    img: "/static/projects/resume-skills.png",
    github: "https://github.com/hugh-parker/JobAssist",
    tags: ["Python", "sklearn", "NLTK", "Pandas", "Numpy"],
  },
  {
    title: "Open-Source Game Platform",
    desc: "Battleship extension for an open-source game platform.",
    img: "/static/projects/covey-town.png",
    github: "https://github.com/neu-cs4530/spring-23-team-208",
    tags: ["React", "Typescript", "Node", "Jest"],
  },
  {
    title: "2048 Game",
    desc: "A simple 2048 game built with React.",
    img: "/static/projects/2048-game.png",
    github: "https://github.com/sebytremblay/2048Game",
    tags: ["React", "Typescript", "MongoDB", "REST API"],
  },
].map((project, index) => ({ ...project, id: index }));

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects
