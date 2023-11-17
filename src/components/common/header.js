import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../definitions';
import { Close, TerminalRounded } from '@mui/icons-material';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from "react-i18next";
// import { Trans } from "react-i18next";


const Header = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 200) {
      setColorchange(true);
    }
    else {
      setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);
  const handleAnchorClick = event => {
    event.preventDefault();
    const target = window.document.getElementById(
      event.currentTarget.href.split("#")[1]
    );
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <header className={colorChange ? 'navbar change' : 'navbar'}>
        <nav className={colorChange ? 'nav-menu change' : 'nav-menu'}>
          <div id="logo" className="flex">
            <Link className={colorChange ? 'logo change' : 'logo'} to="/" />
            <div className={colorChange ? 'logo-name change' : 'logo-name'}><span className="mr-2">|</span> {t("competition")}</div>
          </div>
          <div id={colorChange ? 'menu change' : 'menu'} className="items-center hidden lg:flex">
            <Link onClick={() => setShowModal(true)} className="px-3">{t("menu-about")}</Link>
            <Link onClick={handleAnchorClick} data-to-scrollspy-id="objective" className="px-3" to={ROUTES.OBJECTIVE}>{t("menu-objective")}</Link>
            <Link onClick={handleAnchorClick} data-to-scrollspy-id="schedule" className="px-3" to={ROUTES.SCHEDULE}>{t("menu-schedule")}</Link>
            <Link onClick={handleAnchorClick} data-to-scrollspy-id="information" className="px-3" to={ROUTES.INFO}>{t("menu-info")}</Link>
            <Link onClick={handleAnchorClick} data-to-scrollspy-id="gallery" className="px-3" to={ROUTES.GALLERY}>{t("menu-gallery")}</Link>
            <Link onClick={handleAnchorClick} data-to-scrollspy-id="faq" className="px-3" to={ROUTES.FAQ}>{t("menu-faq")}</Link>
            <Link onClick={handleAnchorClick} data-to-scrollspy-id="partners" className="px-3" to={ROUTES.PARTNERS}>{t("menu-partners")}</Link>
            <Link className="hidden" to={ROUTES.RESOURCES}>資源</Link>
          </div>
          <div id="btn-group" className="ml-auto flex items-center">
            <LanguageSwitcher />
            <button className={colorChange ? 'btn btn-sign-in change hidden md:block' : 'btn btn-sign-in hidden md:block'}>
              <div className="flex items-center">
                <TerminalRounded sx={{ fontSize: "24px" }} />
                <div className="ml-1 md:flex">{t("platform")}</div>
              </div>
            </button>
          </div>
        </nav>
      </header>
      <>
        {showModal ? (
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
                      {t("about-title")}
                    </h4>
                    <button
                      className="ml-auto float-right outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <Close className="block outline-none focus:outline-none" />
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative px-5 flex-auto">
                    <h4 className="text-black mb-3">{t("about-subhead")}</h4>
                    <div className="mb-4 text-slate-500 text-md leading-relaxed">
                      <p className="mb-2">{t("about-content1")}</p>
                      <p className="mb-2">在2024年6月底至7月，<a href="http://www.glac.org.cn/" target="_blank" className="text-primary">{t("about-glac")}</a>{t("about-content2")}</p>
                      <p className="mb-2">{t("about-content3")}</p>
                    </div>
                    <div className="grid items-center mt-8 px-30 grid-cols-1 gap-x-4 gap-y-10 font-semibold">
                    {t("organizers")}
                  </div>
                  </div>
                <div className="grid items-center m-8 px-0 grid-cols-4 gap-x-8 gap-y-10 px-8 md:gap-y-12 lg:gap-y-12 xl:px-0">
                  <img src="/assets/logo_dxne_h_rgb.svg" alt="digixedu" className="h-auto align-middle border-none justify-self-center" width="220" />
                  <a href="https://www.cnsa.gov.cn/n6758821/index.html#w_two" target="_blank" className="logo-link"><img src="/assets/logo_cnsa.jpeg" alt="CNSA" className="h-auto align-middle border-none justify-self-center" width="110" /></a>
                  <a href="http://www.glac.org.cn/index.php?m=content&c=index&a=lists&catid=33" target="_blank" className="logo-link"><img src="/assets/logo_glac.jpg" alt="GLAC" className="h-auto align-middle border-none justify-self-center" width="180" /></a>
                  <a href="http://www.glac.org.cn/index.php?m=content&c=index&a=show&catid=1&id=7915" target="_blank" className="logo-link"><img src="/assets/logo_nam-yue-research.png" alt="南粵研究院" className="h-auto align-middle border-none justify-self-center max-w-100" /></a>
                </div>
                </div>
              </div>
            </div>
        <div className="opacity-60 fixed inset-0 z-40 bg-black"></div>
      </>
          ) : null}

    </>
    </>
  );
};

export default Header;