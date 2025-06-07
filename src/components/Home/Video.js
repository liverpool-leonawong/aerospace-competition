import React from 'react';
// import { useTranslation } from "react-i18next";

const Video = () => {
  // const { t, i18n } = useTranslation();
  return (
    <>
      <div id="introduction" className="container mx-auto text-center mt-16">
          <div className="flex items-center justify-center px-10"><img src="/assets/title_video.svg" width="480px" alt="比賽簡介"></img></div>
        </div>
      <div className="video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/taqcHgfXeWw"
          title="2024 第一屆大灣區航天創新科技大賽"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default Video;