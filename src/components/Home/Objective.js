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
            <p className="object-title">{t("objective4")}</p>
          </div>          
          <div class="items-center space-y-2">
            <img src="/assets/icon_steam.svg" alt="培養STEAM創意力" className="rounded-full max-w-full h-auto align-middle border-none" />
            <p className="object-title">{t("objective1")}</p>
          </div>
          <div class="items-center space-y-2">
            <img src="/assets/icon_opportunity.svg" alt="培養科學家精神" className="rounded-full max-w-full h-auto align-middle border-none" />
            <p className="object-title">{t("objective3")}</p>
          </div>
          <div class="items-center space-y-2">
            <img src="/assets/icon_problem-solving.svg" alt="鍛鍊解難能力" className="rounded-full max-w-full h-auto align-middle border-none" />
            <p className="object-title">{t("objective2")}</p>
          </div>
        </div>
        <h3 class="info-headline text-center mt-16">{t("3steps")}</h3>
        <div class="mt-4 mb-8 columns-3 gap-8 px-10 md:columns-3 md:gap-12 lg:columns-3 lg:gap-16 xl:px-40">
          <div class="items-center space-y-2">
            <img src="/assets/icon_programming.svg" alt="航天編程訓練班" className="rounded-full max-w-full h-auto align-middle border-none" />
            <p className="object-title">{t("step1")}</p>
          </div>          
          <div class="items-center space-y-2">
            <img src="/assets/icon_robotic_competition.svg" alt="火車探測車編程大賽" className="rounded-full max-w-full h-auto align-middle border-none" />
            <p className="object-title">{t("step2")}</p>
          </div>
          <div class="items-center space-y-2">
            <img src="/assets/icon_research-gba.svg" alt="大灣區研學活動" className="rounded-full max-w-full h-auto align-middle border-none" />
            <p className="object-title">{t("step3")}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Objective;