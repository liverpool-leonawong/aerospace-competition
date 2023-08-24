import React from 'react';

const BGVideo = () => {

  return (
    <>
      <div className="bg-video">
        <div className="headline absolute">
          學習航天科技發展 <br />
          模擬祝融號火星探索
          </div>
        <video autoPlay loop muted className="w-auto min-w-full min-h-full max-w-none">
          <source
            src="https://css-tricks-post-videos.s3.us-east-1.amazonaws.com/Island%20-%204141.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </>
  );
};

export default BGVideo;