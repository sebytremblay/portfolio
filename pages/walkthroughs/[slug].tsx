import React from "react";
import Page from "@/components/utility/Page";
import VideoPlayer from "@/components/walkthroughs/VideoPlayer";
import walkthroughs from "@/data/content/walkthroughs";
import { Walkthrough } from "types";
import { GetStaticProps, GetStaticPaths } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = walkthroughs.map((walkthrough) => ({
    params: { slug: walkthrough.slug },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: { params: { slug: string } }) => {
  const walkthrough = walkthroughs.find((w) => w.slug === params.slug);
  return {
    props: JSON.parse(JSON.stringify({ walkthrough })),
  };
};

function WalkthroughPage({ walkthrough }: { walkthrough: Walkthrough }) {
  if (!walkthrough) {
    return <div>Walkthrough not found</div>;
  }

  return (
    <Page
      currentPage="Walkthroughs"
      meta={{
        title: walkthrough.title,
        desc: walkthrough.desc,
      }}
    >
      <div className="w-full max-w-4xl mx-auto px-4 pt-10 text-left">
        <h1 className="text-3xl font-bold text-fun-pink mb-6">{walkthrough.title}</h1>

        <VideoPlayer youtubeId={walkthrough.youtubeId} title={walkthrough.title} />

        <h2 className="text-2xl font-bold mt-10 mb-3">Overview</h2>
        {walkthrough.overview.split("\n\n").map((paragraph, index) => (
          <p key={index} className="text-fun-gray leading-relaxed mb-4">
            {paragraph}
          </p>
        ))}

        {walkthrough.references && walkthrough.references.length > 0 && (
          <>
            <h2 className="text-2xl font-bold mt-10 mb-3">References</h2>
            <ul className="list-disc pl-6 space-y-2">
              {walkthrough.references.map((reference, index) => (
                <li key={index}>
                  <a
                    href={reference.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-fun-pink hover:underline"
                  >
                    {reference.label}
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </Page>
  );
}

export default WalkthroughPage;
