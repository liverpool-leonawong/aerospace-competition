import React from 'react';
import { useTranslation } from "react-i18next";

const Objective = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div id="objective" className="items-center mt-16">
        <div class="container mx-auto text-center mb-5">
          <div class="flex items-center justify-center px-10"><img src="/assets/title_objective.svg" width="480px" alt="比賽目的"></img></div>
        </div>
        {/* <h3 class="info-headline text-center mt-12">{t("4objective")}</h3> */}
        <div class="mt-4 mb-8 columns-2 gap-8 px-10 md:columns-4 md:gap-12 lg:columns-4 lg:gap-16 xl:px-40">
          <div class="items-center space-y-2">
            <img src="/assets/icon_cultivate.svg" alt="加強國民身份認同" className="rounded-full max-w-full h-auto align-middle border-none" />
            <p className="object-title1">{t("objective4")}</p>
          </div>          
          <div class="items-center space-y-2">
            <img src="/assets/icon_steam.svg" alt="培養STEAM創意力" className="rounded-full max-w-full h-auto align-middle border-none" />
            <p className="object-title1">{t("objective1")}</p>
          </div>
          <div class="items-center space-y-2">
            <img src="/assets/icon_opportunity.svg" alt="培養科學家精神" className="rounded-full max-w-full h-auto align-middle border-none" />
            <p className="object-title1">{t("objective3")}</p>
          </div>
          <div class="items-center space-y-2">
            <img src="/assets/icon_problem-solving.svg" alt="鍛鍊解難能力" className="rounded-full max-w-full h-auto align-middle border-none" />
            <p className="object-title1">{t("objective2")}</p>
          </div>
        </div>
        <h3 class="info-headline text-center mt-16">{t("aero-activities")}</h3>
        <div class="mt-4 mb-8 columns-1 gap-6 px-20 md:columns-5 md:gap-8 md:px-0 lg:columns-5 lg:gap-12 xl:px-40">
          <div class="items-center space-y-2">
            <img src="/assets/icon_programming.svg" alt="航天火星探測車編程訓練班" className="rounded-full max-w-full h-auto align-middle border-none" />
            <p className="object-title2">{t("act1")}</p>
          </div>          
          <div class="items-center space-y-2">
            <img src="/assets/icon_robotic_competition.svg" alt="大灣區航天科技創新大賽" className="rounded-full max-w-full h-auto align-middle border-none" />
            <p className="object-title2">{t("act2")}</p>
          </div>
          <div class="items-center space-y-2">
            <img src="/assets/icon_research-gba.svg" alt="大灣區航天研學交流團" className="rounded-full max-w-full h-auto align-middle border-none" />
            <p className="object-title2">{t("act3")}</p>
          </div>
          <div class="items-center space-y-2">
            <img src="/assets/icon_space-exploration.svg" alt="地球與太空科學探索活動" className="rounded-full max-w-full h-auto align-middle border-none" />
            <p className="object-title2">{t("act4")}</p>
          </div>
          <div class="items-center space-y-2">
            <img src="/assets/icon_aero-innovate.svg" alt="航天與創新科技探索活動v" className="rounded-full max-w-full h-auto align-middle border-none" />
            <p className="object-title2">{t("act5")}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Objective;