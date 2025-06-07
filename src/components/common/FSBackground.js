import { React, useState } from 'react';
import FsLightbox from "fslightbox-react";
import { PlayCircleOutlineRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../definitions';
import { useTranslation } from "react-i18next";

const FSBackground = () => {
  const { t, i18n } = useTranslation();
  const [function1, setFunction1] = useState(false);
  const [function2, setFunction2] = useState(false);
  const [function3, setFunction3] = useState(false);

  return (
    <>
      <div className="bg-space">
        <div className="headline absolute">
        {t("headline1")} <br />
        {t("headline2")}
        </div>
        <div className="container mx-auto sub-headline px-6">
        <div className="font-bold text-xl text-center mb-3">- {t("subheadline")} -</div>
        {t("head-description1")}<br className="block lg:hidden"/>{t("head-description2")}<br className="hidden lg:block"/>{t("head-description3")}
          <div className="container mx-auto items-center mt-5"><Link to={ROUTES.ENROLL} target="_blank" rel="noreferrer"><button className="btn btn-primary">{t("enroll-now")}</button></Link></div>
        </div>
        <div className="robotic_front1 hidden lg:inline-block">
          <div className="function-title" onClick={() => setFunction1(!function1)}>{t("function-camera")} <PlayCircleOutlineRounded /></div>
        </div>
        <div className="robotic_side2 hidden lg:inline-block">
          <div className="function-title" onClick={() => setFunction3(!function3)}>{t("function-voice")} <PlayCircleOutlineRounded /></div>
        </div>
        <div className="robotic_side1">
          <div className="function-title hidden lg:inline-block" onClick={() => setFunction2(!function2)}>{t("function-avoid")} <PlayCircleOutlineRounded /></div>
        </div>
        <FsLightbox
          toggler={function1}
          sources={[
            <iframe
						src="https://www.youtube.com/embed/oRWJOEN-JFc?si=UDR8AaoYFYk8seRr"
						width="1920px"
						height="1080px"
						allow="autoplay; fullscreen"
						allowFullScreen
					/>
          ]}
        />
        <FsLightbox
          toggler={function2}
          sources={[
            <iframe
						src="https://www.youtube.com/embed/rP_kGcvUKGE?si=oed2Fb12GNbne3Yh"
						width="1920px"
						height="1080px"
						allow="autoplay; fullscreen"
						allowFullScreen
					/>
          ]}
        />
        <FsLightbox
          toggler={function3}
          sources={[
            <iframe
						src="https://www.youtube.com/embed/pWjjSey6ByU?si=EzwesRlmr8Vs3Dpc"
						width="1920px"
						height="1080px"
						allow="autoplay; fullscreen"
						allowFullScreen
					/>
          ]}
        />
      </div>
    </>
  );
};

export default FSBackground;