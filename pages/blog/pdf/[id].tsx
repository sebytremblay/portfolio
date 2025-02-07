import React from "react";
import Page from "@/components/utility/Page";
import PDFViewer from "@/components/blog/PDFViewer";
import posts from "@/data/content/blog";
import { GetStaticProps, GetStaticPaths } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
    const pdfPosts = posts.filter(post => post.type === "pdf");
    const paths = pdfPosts.map((post) => ({
        params: { id: post.id.toString() },
    }));
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }: { params: { id: string } }) => {
    const post = posts.find(p => p.id === Number(params.id));
    return {
        props: JSON.parse(JSON.stringify({
            post,
        })),
    };
};

function PDFViewerPage({ post }) {
    if (!post || post.type !== "pdf") {
        return <div>Post not found</div>;
    }

    return (
        <Page
            currentPage="blog"
            meta={{
                title: post.title,
                desc: post.description
            }}
        >
            <div className="w-full max-w-5xl mx-auto px-4 pt-10">
                <h1 className="text-3xl font-bold text-fun-pink mb-4">{post.title}</h1>
                <PDFViewer pdfUrl={post.link} />
            </div>
        </Page>
    );
}

export default PDFViewerPage;