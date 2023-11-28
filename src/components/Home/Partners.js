import { React, useState } from 'react';
import { useTranslation } from "react-i18next";
import { Close } from '@mui/icons-material';

const Partners = () => {
  const { t, i18n } = useTranslation();
  const [showCNSA, setShowCNSA] = useState(false);
  const [showGLAC, setShowGLAC] = useState(false);
  const [showNam, setShowNam] = useState(false);
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
      <div className="grid items-center mt-8 px-30 grid-cols-3 gap-x-8 gap-y-10 px-8 md:gap-y-12 md:grid-cols-3 lg:gap-y-12 xl:px-40">
        <img src="/assets/logo_dxne_h_rgb.svg" alt="digixedu" className="h-auto align-middle border-none justify-self-center" width="220" />
        {/* <button onClick={() => setShowCNSA(true)} className="logo-link"><img src="/assets/logo_cnsa.jpeg" alt="CNSA" className="h-auto align-middle border-none justify-self-center" width="110" /></button> */}
        <button onClick={() => setShowGLAC(true)} className="logo-link"><img src="/assets/logo_glac.jpg" alt="GLAC" className="h-auto align-middle border-none justify-self-center" width="180" /></button>
        <button onClick={() => setShowNam(true)} className="logo-link"><img src="/assets/logo_nam-yue-research.png" alt="南粵研究院" className="h-auto align-middle border-none justify-self-center max-w-100" /></button>
      </div>
      <div class="container mx-auto text-left font-semibold px-10">
        <div className="grid items-center mt-10 px-30">
          <div class="text-center">{t("collaborators")}</div>
        </div>
      </div>
      <div className="grid place-items-center mt-12 px-30 grid-cols-2 gap-x-8 gap-y-10 px-8 md:grid-cols-3 md:gap-y-12 lg:grid-cols-3 lg:gap-y-12 xl:px-40">
        <img src="/assets/logo_hkte.svg" alt="HKTE" className="h-auto align-middle border-none justify-self-center" width="160" />
        <img src="/assets/logo_ired.svg" alt="iRed" className="h-auto align-middle border-none justify-self-center" width="240" />
        <img src="/assets/logo_cyberport.png" alt="Cyberport" className="h-auto align-middle border-none justify-self-center" width="180" />
        <img src="/assets/logo_hkfew.png" alt="HKFEW" className="h-auto align-middle border-none justify-self-center" width="160" />
        <img src="/assets/logo_hkace.jpg" alt="HKACE" className="h-auto align-middle border-none justify-self-center" width="240" />
        <img src="/assets/logo_aitle.png" alt="AiTLE" className="h-auto align-middle border-none justify-self-center" width="180" />
      </div>
      {/* <div class="container mx-auto text-left font-semibold px-10">
        <div className="grid items-center mt-10 px-30">
          <div class="text-center">{t("supporters")}</div>
        </div>
      </div> */}
      {/* <div className="grid items-center mt-12 px-30 grid-cols-3 gap-x-8 gap-y-10 px-8 md:grid-cols-3 md:gap-y-12 lg:grid-cols-3 lg:gap-y-12 xl:px-40">
        <img src="/assets/logo_hkfew.png" alt="HKFEW" className="h-auto align-middle border-none justify-self-center" width="160" />
        <img src="/assets/logo_hkace.jpg" alt="HKACE" className="h-auto align-middle border-none justify-self-center" width="240" />
        <img src="/assets/logo_aitle.png" alt="AiTLE" className="h-auto align-middle border-none justify-self-center" width="180" />
      </div> */}
      {showCNSA ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between px-5 py-4 rounded-t">
                  <h4 className="text-primary font-semibold">
                    {t("CNSA")}
                  </h4>
                  <button
                    className="ml-auto float-right outline-none focus:outline-none"
                    onClick={() => setShowCNSA(false)}
                  >
                    <Close className="block outline-none focus:outline-none" />
                  </button>
                </div>
                {/*body*/}
                <div className="relative px-5 flex-auto">
                  <p className="mb-4 text-slate-500 text-lg leading-relaxed">
                    {t("CNSA-description1")}
                  </p>
                  <p className="mb-4 text-slate-500 text-lg leading-relaxed">
                    {t("CNSA-description2")}
                  </p>
                  <p className="mb-4 text-slate-500 text-lg leading-relaxed">
                    {t("CNSA-description3")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-60 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      {showGLAC ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between px-5 py-4  rounded-t">
                  <h4 className="text-primary font-semibold">
                    {t("GLAC")}
                  </h4>
                  <button
                    className="ml-auto float-right outline-none focus:outline-none"
                    onClick={() => setShowGLAC(false)}
                  >
                    <Close className="block outline-none focus:outline-none" />
                  </button>
                </div>
                {/*body*/}
                <div className="relative px-5 flex-auto">
                  <p className="mb-4 text-slate-500 text-lg leading-relaxed">
                    {t("GLAC-description1")}
                  </p>
                  <p className="mb-4 text-slate-500 text-lg leading-relaxed">
                    {t("GLAC-description2")}
                  </p>
                  <p className="mb-4 text-slate-500 text-lg leading-relaxed">
                    {t("GLAC-description3")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-60 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      {showNam ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between px-5 py-4  rounded-t">
                  <h4 className="text-primary font-semibold">
                    {t("Nam")}
                  </h4>
                  <button
                    className="ml-auto float-right outline-none focus:outline-none"
                    onClick={() => setShowNam(false)}
                  >
                    <Close className="block outline-none focus:outline-none" />
                  </button>
                </div>
                {/*body*/}
                <div className="relative px-5 flex-auto">
                  <p className="mb-4 text-slate-500 text-lg leading-relaxed">
                    {t("Nam-description1")}
                  </p>
                  <p className="mb-4 text-slate-500 text-lg leading-relaxed">
                    {t("Nam-description2")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-60 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}

export default Partners;