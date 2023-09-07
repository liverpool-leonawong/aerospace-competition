import { React, useState } from 'react';
import FsLightbox from "fslightbox-react";
import { PlayCircleOutlineRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../definitions';

const FSBackground = () => {
  const [function1, setFunction1] = useState(false);
  const [function2, setFunction2] = useState(false);
  const [function3, setFunction3] = useState(false);

  return (
    <>
      <div className="bg-space">
        <div className="headline absolute">
          學習航天科技發展 <br />
          模擬火星探測車著陸探索
        </div>
        <div className="container mx-auto sub-headline px-6">
          藉著三個系列的學習，比賽和體驗式課程，<br />讓學生們理解國家祝融號的結構和物聯網通訊原理，創作和編程探測車
          <div className="container mx-auto items-center mt-5"><Link to={ROUTES.ENROLL} target="_blank" rel="noreferrer"><button className="btn btn-primary">立即報名</button></Link></div>
        </div>
        <div className="robotic_front1 hidden lg:inline-block">
          <div className="function-title" onClick={() => setFunction1(!function1)}>拍攝 <PlayCircleOutlineRounded /></div>
        </div>
        <div className="robotic_side2 hidden lg:inline-block">
          <div className="function-title" onClick={() => setFunction3(!function3)}>語音 <PlayCircleOutlineRounded /></div>
        </div>
        <div className="robotic_side1">
          <div className="function-title hidden lg:inline-block" onClick={() => setFunction2(!function2)}>避障 <PlayCircleOutlineRounded /></div>
        </div>
        <FsLightbox
          toggler={function1}
          sources={[
            '/assets/camera.mp4',
          ]}
        />
        <FsLightbox
          toggler={function2}
          sources={[
            '/assets/avoidance.mp4',
          ]}
        />
        <FsLightbox
          toggler={function3}
          sources={[
            '/assets/voice.mp4',
          ]}
        />
      </div>
    </>
  );
};

export default FSBackground;