import Page from "components/utility/Page";
import Resume from "components/resume/ResumeDisplay";
import DownloadButton from "@/components/resume/DownloadButton";
import React from "react";

function resume() {
  return (
    <Page
      currentPage="Resume"
      meta={{ title: "Resume", desc: "Here is my resume!" }}
    >
      <DownloadButton />
      <Resume />
    </Page>
  );
}

export default resume;