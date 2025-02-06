import React from "react";
import { BlogPost } from "types";

interface BlogCardContentProps {
    post: BlogPost;
}

function BlogCardContent({ post }: BlogCardContentProps) {
    return (
        <div>
            <h3 className="text-xl font-bold mb-2 text-fun-pink">{post.title}</h3>
            <p className="text-fun-gray">{post.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
                {post.tags.map((tag, index) => (
                    <span
                        key={index}
                        className="bg-fun-pink-darker text-fun-pink text-sm px-2 py-1 rounded"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <p className="text-fun-gray text-sm mt-3">{new Date(post.date).toLocaleDateString()}</p>
        </div>
    );
}

export default BlogCardContent; 