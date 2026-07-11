import React from "react";
import resumePath from "@/data/content/resume";
import { socials } from "@/data/global";

function CTA() {
  return (
    <div className="pt-36 relative w-full">
      <img className="w-30 m-auto mb-2" src="/static/doodles/lineBreak.svg" />
      <div className="pt-14 pb-40">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Interested in Working Together?
        </h2>
        <p className="text-fun-gray-light text-lg max-w-xl mx-auto mb-10">
          I am open to new opportunities. Send me a note, connect on LinkedIn, or
          skim my resume to see the full story.
        </p>
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
          <a
            href={resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer font-bold whitespace-nowrap px-8 py-3 text-fun-pink hover:text-white transition-colors"
          >
            View Resume &rarr;
          </a>
        </div>
      </div>

      <img
        className="sqD min-w-[800px] bottom-[-100px] left-1/2 sm:bottom-[-150px] -translate-x-1/2 object-cover sm:min-w-[1100px]"
        style={{ zIndex: "-10" }}
        src="/static/doodles/hero/fancyLines.svg"
      />
    </div>
  );
}

export default CTA;
