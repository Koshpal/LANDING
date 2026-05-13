import React from "react";
import { Helmet } from "react-helmet";

const VideoWatchPage = () => {
  const videoData = {
    title: "Coach taking sessions - Koshpal Video",
    description: "Explainer video about Coach taking sessions using Koshpal.",
    videoUrl: "https://www.koshpal.com/video.mp4",
    thumbnail: "https://koshpal.com/assets/Session.png",
    uploadDate: "2025-11-01",
    pageUrl: "https://koshpal.com/video/"
  };

  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": videoData.title,
    "description": videoData.description,
    "thumbnailUrl": videoData.thumbnail,
    "uploadDate": videoData.uploadDate,
    "contentUrl": videoData.videoUrl,
    "embedUrl": videoData.pageUrl
  };

  return (
    <div className="video-watch-page">
      <Helmet>
        <title>{videoData.title}</title>
        <meta name="description" content={videoData.description} />

        {/* ✅ Video SEO Schema */}
        <script type="application/ld+json">
          {JSON.stringify(videoSchema)}
        </script>
      </Helmet>

      <h1>{videoData.title}</h1>
      <video
        width="100%"
        height="auto"
        controls
        poster={videoData.thumbnail}
      >
        <source src={videoData.videoUrl} type="video/mp4" />
      </video>
      <p>{videoData.description}</p>
    </div>
  );
};

export default VideoWatchPage;
