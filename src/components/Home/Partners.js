import { React } from 'react';
import { useTranslation } from "react-i18next";

const Partners = () => {
  const { t, i18n } = useTranslation();
  return (
    <div id="partners" className="main">
      <div class="container mx-auto text-center mb-5">
        <div class="flex items-center justify-center mt-16 mb-12 px-10"><img src="/assets/title_partners.svg" width="480px" alt="合作夥伴"></img></div>
      </div>
      <div class="container mx-auto text-center font-semibold px-10">
        <div className="grid items-center mt-8 px-30 grid-cols-1 gap-x-4 gap-y-10">
          {t("organizers")}
        </div>
      </div>
      <div className="grid items-center mt-8 px-30 grid-cols-3 gap-x-8 gap-y-10 px-8 md:gap-y-12 lg:gap-y-12 xl:px-40">
        <img src="/assets/logo_dxne_h_rgb.svg" alt="digixedu" className="h-auto align-middle border-none justify-self-center" width="220" />
        <img src="/assets/logo_glac.jpg" alt="GLAC" className="h-auto align-middle border-none justify-self-center" width="180" />
        <img src="/assets/logo_nam-yue-research.png" alt="南粵研究院" className="h-auto align-middle border-none justify-self-center max-w-100"/>
      </div>
      <div class="container mx-auto text-left font-semibold px-10">
        <div className="grid items-center mt-10 px-30">
          <div class="text-center">{t("supporting")}</div>
        </div>
      </div>
      <div className="grid items-center mt-12 px-30 grid-cols-3 gap-x-8 gap-y-10 px-8 md:grid-cols-3 md:gap-y-12 lg:grid-cols-3 lg:gap-y-12 xl:px-40">
        <img src="/assets/logo_hkte.svg" alt="HKTE" className="h-auto align-middle border-none justify-self-center" width="160" />
        <img src="/assets/logo_ired.svg" alt="iRed" className="h-auto align-middle border-none justify-self-center" width="240" />
        <img src="/assets/logo_cyberport.png" alt="Cyberport" className="h-auto align-middle border-none justify-self-center" width="180" />
      </div>
    </div>
  );
}

export default Partners;