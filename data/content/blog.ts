import { BlogPost } from "types";

const posts: BlogPost[] = [
    {
        id: 1,
        title: "Context-Aware Scheduling in Kubernetes: Optimizing Performance for Distributed Systems",
        description: "Exploration of advanced scheduling strategies in Kubernetes, focusing on network-aware and hardware-aware optimizations to enhance system performance and efficiency.",
        date: "2024-11-03",
        type: "pdf",
        link: "/static/papers/kubernetes-scheduling.pdf",
        tags: ["Kubernetes", "Distributed Systems", "Orchestration"]
    }
];

export const allBlogTags = [];

posts.forEach((post) => {
    post.tags.forEach((tag) => !allBlogTags.includes(tag) && allBlogTags.push(tag));
});

export default posts; 