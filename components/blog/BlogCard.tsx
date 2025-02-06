import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BlogPost } from "types";
import BlogCardContent from "./BlogCardContent";

interface BlogCardProps {
    post: BlogPost;
}

function BlogCard({ post }: BlogCardProps) {
    const router = useRouter();
    
    const handleClick = () => {
        if (post.type === "external") {
            window.open(post.link, "_blank");
        } else if (post.type === "pdf") {
            router.push(`/blog/pdf/${post.id}`);
        }
    };

    return (
        <div
            className="border-2 border-fun-gray-light rounded-lg p-4 hover:border-fun-pink transition-colors cursor-pointer bg-gray-50/10"
            onClick={post.type !== "article" ? handleClick : undefined}
        >
            {post.type === "article" ? (
                <Link href={`/blog/${post.id}`}>
                    <BlogCardContent post={post} />
                </Link>
            ) : (
                <BlogCardContent post={post} />
            )}
        </div>
    );
}

export default BlogCard; 