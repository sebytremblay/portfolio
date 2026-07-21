import { Walkthrough } from "types";

const walkthroughs: Walkthrough[] = [
  {
    slug: "code-mode",
    title: "Code Mode",
    desc: "A tool-invocation strategy I built for MuleSoft's agent orchestrator that cut agent token usage by up to 98 percent.",
    youtubeId: "3xrUhJxpJvs",
    date: "2026-07-20",
    overview:
      "Code Mode is a tool-invocation strategy I pioneered for MuleSoft's agent orchestrator, helping customers reduce tokens by up to 98% on multi-step tool chains. Without code mode, two patterns quietly inflate companies' AI bills: tool definitions loaded into the context window before the user sends their first message, and tool call results that pile up and ride along on each subsequent turn.\n\nCode Mode collapses both. It represents the available tools as TypeScript interfaces, asks the model to write a single script against them, and hands that script to a sandbox that runs the work and returns only the final result, so intermediate state never touches the context window. An additional tool-search step keeps the exposed interfaces near 20,000 tokens even as the catalog grows.\n\nBecause the model executes deterministic code rather than copying verbose payloads between turns, the output also grows more reliable, sidestepping the needle-in-a-haystack hallucinations that large tool results invite. Watch the video to learn more about the problem, our design, and a walked demo!",
    references: [
      {
        label: "Code Mode: the better way to use MCP",
        url: "https://blog.cloudflare.com/code-mode/",
      },
      {
        label: "Code Mode with MCP",
        url: "https://blog.cloudflare.com/code-mode-mcp/",
      },
      {
        label: "Code execution with MCP (Anthropic Engineering)",
        url: "https://www.anthropic.com/engineering/code-execution-with-mcp",
      },
    ],
    tags: ["Python", "TypeScript", "workerd", "OpenAI API", "Gemini API"],
  },
].map((walkthrough, index) => ({ ...walkthrough, id: index }));

export const getWalkthrough = (slug: string) =>
  walkthroughs.find((walkthrough) => walkthrough.slug === slug);

export default walkthroughs;
