import React from "react";
import Link from "next/link";
import { Walkthrough } from "types";

interface WalkthroughCardProps {
  walkthrough: Walkthrough;
}

function WalkthroughCard({ walkthrough }: WalkthroughCardProps) {
  const thumbnail = `https://img.youtube.com/vi/${walkthrough.youtubeId}/hqdefault.jpg`;

  return (
    <Link href={`/walkthroughs/${walkthrough.slug}`}>
      <div className="group border-2 border-fun-gray-light rounded-lg overflow-hidden hover:border-fun-pink transition-colors cursor-pointer bg-gray-50/10">
        <div className="relative w-full overflow-hidden" style={{ paddingTop: "56.25%" }}>
          <img
            className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            src={thumbnail}
            alt={`${walkthrough.title} thumbnail`}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-fun-pink/90">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="text-left p-4">
          <h3 className="text-xl font-bold mb-2 text-fun-pink">{walkthrough.title}</h3>
          <p className="text-fun-gray">{walkthrough.desc}</p>
          {walkthrough.tags && (
            <div className="flex flex-wrap gap-2 mt-3 pt-4">
              {walkthrough.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-fun-pink-darker text-fun-pink text-sm px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export default WalkthroughCard;
