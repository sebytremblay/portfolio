import React from "react";
import SectionTitle from "../global/SectionTitle";

function CurrentWork() {
  return (
    <div id="current-work" className="flex flex-col text-left justify-between relative">
      <SectionTitle title="What I'm currently working on." />
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
        <div className="w-full max-w-xs md:max-w-sm flex-shrink-0">
          <img
            className="w-full rounded-xl border border-fun-pink-dark"
            src="/static/projects/public-mcp-registry.png"
            alt="Public MCP Registry"
          />
        </div>
        <div className="flex flex-col justify-center text-center md:text-left">
          <h3 className="text-2xl font-bold mb-1">Public MCP Registry</h3>
          <p className="text-fun-pink font-monospace text-sm mb-4">
            Salesforce &middot; MuleSoft &middot; Agent Fabric
          </p>
          <p className="text-fun-gray-light text-base leading-relaxed mb-4">
            At MuleSoft, I am leading the development of the Public MCP Registry: a governed catalog
            of third-party MCP servers. This catalog streamlines discovery of agentic capabilities,
            centralizing AI resources within a governed platform built on years of API management expertise.
          </p>
          <p className="text-fun-gray-light text-base leading-relaxed mb-6">
            The registry went live in January 2026, marking an important step toward operationalizing 
            trusted third-party agent discovery within Agent Fabric. Now, I am exploring behavioral and 
            security evaluation frameworks to strengthen trust in third-party agent assets. 
          </p>
          <a
            href="https://blogs.mulesoft.com/news/public-mcp-servers-in-mulesoft-agent-registry/"
            target="_blank"
            rel="noreferrer"
            className="text-fun-pink hover:underline transition-colors w-fit mx-auto md:mx-0"
          >
            Read the announcement &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}

export default CurrentWork;
