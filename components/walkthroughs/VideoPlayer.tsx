import React from "react";

interface VideoPlayerProps {
  youtubeId: string;
  title: string;
}

function VideoPlayer({ youtubeId, title }: VideoPlayerProps) {
  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-gray-300" style={{ paddingTop: "56.25%" }}>
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

export default VideoPlayer;
