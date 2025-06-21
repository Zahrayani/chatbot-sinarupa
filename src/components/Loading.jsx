import React, { useEffect } from "react";
import "./loading.css"; 

const Loading = ({ onFinish, isMobile }) => {
  const videoSrc = isMobile
    ? "/intro-mobile.mp4"
    : "/intro-desktop.mp4";

  useEffect(() => {
    const timeout = setTimeout(() => {
      onFinish();
    }, 7000); // durasi 7 detik
    return () => clearTimeout(timeout);
  }, [onFinish]);

  return (
    <div className="loading-wrapper fade-in">
      <video
        src={videoSrc}
        autoPlay
        muted
        playsInline
        className="loading-video"
      />

      <button className="skip-button" onClick={onFinish}>
        Lewati Intro
      </button>
    </div>
  );
};

export default Loading;
