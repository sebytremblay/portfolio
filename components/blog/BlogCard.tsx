import React from "react";
import Link from "next/link";
import { BlogPost } from "types";
import BlogCardContent from "./BlogCardContent";

interface BlogCardProps {
    post: BlogPost;
}

function BlogCard({ post }: BlogCardProps) {
    return (
        <div
            className="border-2 border-fun-gray-light rounded-lg p-4 hover:border-fun-pink transition-colors cursor-pointer bg-gray-50/10"
            onClick={post.type === "external" ? () => window.open(post.link, "_blank") : undefined}
        >
            {post.type === "external" ? (
                <BlogCardContent post={post} />
            ) : (
                <Link href={`/blog/pdf/${post.id}`}>
                    <BlogCardContent post={post} />
                </Link>
            )}
        </div>
    );
}

export default BlogCard; 