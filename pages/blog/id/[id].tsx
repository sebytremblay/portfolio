import React from "react";
import { useRouter } from "next/router";
import Page from "@/components/utility/Page";
import PDFViewer from "@/components/blog/PDFViewer";
import posts from "@/data/content/blog";

function PDFViewerPage() {
    const router = useRouter();
    const { id } = router.query;

    const post = posts.find(p => p.id === Number(id));

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