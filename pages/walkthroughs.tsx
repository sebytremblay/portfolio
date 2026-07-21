import React from "react";
import Page from "@/components/utility/Page";
import WalkthroughCard from "@/components/walkthroughs/WalkthroughCard";
import walkthroughs from "@/data/content/walkthroughs";
import SectionTitle from "@/components/global/SectionTitle";
import PageCTA from "@/components/global/PageCTA";

function WalkthroughsPage() {
  return (
    <Page
      currentPage="Walkthroughs"
      meta={{
        title: "Walkthroughs",
        desc: "Recorded walkthroughs of the systems and projects I have built.",
      }}
    >
      <div className="w-full max-w-5xl mx-auto">
        <SectionTitle title="Video Walkthroughs" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-2">
          {walkthroughs
            .sort((a, b) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime())
            .map((walkthrough) => (
              <WalkthroughCard key={walkthrough.id} walkthrough={walkthrough} />
            ))}
        </div>
      </div>
      <PageCTA
        title="Got questions?"
        subtitle="Reach out or connect if you want to go deeper."
      />
    </Page>
  );
}

export default WalkthroughsPage;
