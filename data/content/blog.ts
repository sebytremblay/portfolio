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
    },
    {
        id: 2,
        title: "Cutting Edge Facial Detection: Vision Transfomers vs. Convolutional Neural Networks",
        description: "A comparison of vision transformers and convolutional neural networks for facial detection, exploring their performance and efficiency in real-time applications.",
        date: "2025-04-15",
        type: "pdf",
        link: "/static/papers/facial-detection.pdf",
        tags: ["Facial Detection", "Vision Transformers", "Convolutional Neural Networks"]
    },
    {
        id: 3,
        title: "Evaluation of Search-Based Algorithms for Solving Wordle",
        description: "A comparison of search-based algorithms for solving Wordle, exploring their performance and efficiency in real-time applications.",
        date: "2025-04-22",
        type: "pdf",
        link: "/static/papers/wordle-solvers.pdf",
        tags: ["Monte Carlo", "Search-Based Algorithms", "Performance"]
    }
];

export const allBlogTags = [];

posts.forEach((post) => {
    post.tags.forEach((tag) => !allBlogTags.includes(tag) && allBlogTags.push(tag));
});

export default posts; 