import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../definitions';
import { TerminalRounded } from '@mui/icons-material';
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
  return (
    <>
      <header className={colorChange ? 'navbar change' : 'navbar'}>
        <nav className={colorChange ? 'nav-menu change' : 'nav-menu'}>
          <div id="logo" className="flex">
            <Link className={colorChange ? 'logo change' : 'logo'} to="/" />
            <div className={colorChange ? 'logo-name change' : 'logo-name'}><span className="mr-2">|</span> {t("competition")}</div>
          </div>
          <div id={colorChange ? 'menu change' : 'menu'} className="items-center hidden lg:flex">
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
            <button className={colorChange ? 'btn btn-sign-in change sm:hidden md:block' : 'btn btn-sign-in sm:hidden md:block'}>
              <div className="flex items-center">
                <TerminalRounded sx={{ fontSize: "24px" }} />
                <div className="ml-1 md:flex">{t("platform")}</div>
              </div>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;