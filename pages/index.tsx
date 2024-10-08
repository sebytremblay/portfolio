import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import Page from "@/components/utility/Page";
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";
import Timeline from "@/components/home/Timeline";

export default function Home() {
  return (
    <Page currentPage="Home" meta={{ desc: "I'm a full-stack developer passionate about designing and coding seamless, user-friendly applications." }}>
      <Hero />
      <div className="mt-20 space-y-24">
        <Timeline />
        <Projects />
        <Skills />
      </div>
      <CTA />
    </Page>
  );
}