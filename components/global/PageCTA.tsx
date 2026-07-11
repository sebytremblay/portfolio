import React from "react";
import { socials } from "@/data/global";

type PageCTAProps = {
  title?: string;
  subtitle?: string;
};

function PageCTA({
  title = "Like what you see?",
  subtitle = "Let us build something together. Reach out or connect and I will get back to you.",
}: PageCTAProps) {
  return (
    <div className="w-full max-w-3xl mx-auto text-center mt-24 mb-16 px-5">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      <p className="text-fun-gray-light text-lg mb-8">{subtitle}</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="mailto:tremblay.se@northeastern.edu"
          className="cursor-pointer font-bold whitespace-nowrap px-8 py-3 text-white border-2 rounded-full border-fun-pink bg-fun-pink hover:bg-fun-pink-light hover:border-fun-pink-light transition-colors"
        >
          Get in Touch
        </a>
        <a
          href={socials.linkedIn.link}
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer font-bold whitespace-nowrap px-8 py-3 text-white border-2 rounded-full border-white bg-bg hover:bg-fun-pink hover:border-fun-pink transition-colors"
        >
          Connect on LinkedIn
        </a>
      </div>
    </div>
  );
}

export default PageCTA;
