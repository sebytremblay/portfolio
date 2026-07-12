import React from "react";
import SectionTitle from "../global/SectionTitle";

function CurrentWork() {
  return (
    <div id="current-work" className="flex flex-col text-left justify-between relative">
      <SectionTitle title="What I'm currently working on." />
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
        <a
          href="https://blogs.mulesoft.com/news/mcp-cost-management/"
          target="_blank"
          rel="noreferrer"
          className="w-full max-w-xs md:max-w-sm flex-shrink-0"
        >
          <img
            className="w-full rounded-xl border border-fun-pink-dark cursor-pointer transition hover:-translate-y-2 hover:border-fun-pink will-change-transform"
            src="/static/projects/cost-management-platform.png"
            alt="AI Cost Management Platform"
          />
        </a>
        <div className="flex flex-col justify-center text-center md:text-left">
          <h3 className="text-2xl font-bold mb-1">AI Cost Management Platform</h3>
          <p className="text-fun-pink font-monospace text-sm mb-4">
            Salesforce &middot; MuleSoft &middot; Agent Fabric
          </p>
          <p className="text-fun-gray-light text-base leading-relaxed mb-4">
            At MuleSoft, I am building the cost management platform for Agent Fabric: a FinOps layer
            that gives customers real-time visibility into the token consumption behind every AI agent
            interaction.
          </p>
          <p className="text-fun-gray-light text-base leading-relaxed mb-6">
            The platform shipped in May 2026 as part of the MuleSoft Omni GA release, delivering 17
            percent token savings on average and scaling up to 50 percent on MCP servers that return
            large tool responses. Now I am building the agent evaluation harness that
            scores whether each policy preserves agent behavior, proving we cut tokens without
            degrading how the agent reasons and completes its task.
          </p>
          <a
            href="https://blogs.mulesoft.com/news/mcp-cost-management/"
            target="_blank"
            rel="noreferrer"
            className="text-fun-pink hover:underline transition-colors w-fit mx-auto md:mx-0"
          >
            Read Our Launch Blog &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}

export default CurrentWork;
