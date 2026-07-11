import React from "react";
import Page from "@/components/utility/Page";
import BlogCard from "@/components/blog/BlogCard";
import posts from "@/data/content/blog";
import SectionTitle from "@/components/global/SectionTitle";
import PageCTA from "@/components/global/PageCTA";

function BlogPage() {
    return (
        <Page
            currentPage="Blog"
            meta={{
                title: "Blog",
                desc: "Articles and publications about software engineering, machine learning, and technology."
            }}
        >
            <div className="w-full max-w-5xl mx-auto">
                <SectionTitle
                    title="Thoughts and Publications"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-2">
                    {posts
                        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                        .map((post) => (
                            <BlogCard key={post.id} post={post} />
                        ))}
                </div>
            </div>
            <PageCTA
                title="Curious to go deeper?"
                subtitle="I write about the systems I build. Reach out or connect if you want to talk shop."
            />
        </Page>
    );
}

export default BlogPage;
