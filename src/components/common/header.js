import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../definitions';
import { TerminalRounded } from '@mui/icons-material';

const Header = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 400) {
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
          </div>
          <div className={colorChange ? 'logo-name change' : 'logo-name'}><span className="mr-3">|</span> 航天機械人大賽</div>
          <div id={colorChange ? 'menu change' : 'menu'} className="items-center hidden lg:flex">
            <Link onClick={handleAnchorClick} data-to-scrollspy-id="objective" className="px-3" to={ROUTES.OBJECTIVE}>比賽目的</Link>
            <Link onClick={handleAnchorClick} data-to-scrollspy-id="schedule" className="px-3" to={ROUTES.SCHEDULE}>比賽日程</Link>
            <Link onClick={handleAnchorClick} data-to-scrollspy-id="information" className="px-3" to={ROUTES.INFO}>比賽資料</Link>
            <Link onClick={handleAnchorClick} data-to-scrollspy-id="gallery" className="px-3" to={ROUTES.GALLERY}>相集</Link>
            <Link onClick={handleAnchorClick} data-to-scrollspy-id="faq" className="px-3" to={ROUTES.FAQ}>常見問題</Link>
            <Link onClick={handleAnchorClick} data-to-scrollspy-id="partners" className="px-3" to={ROUTES.PARTNERS}>合作伙伴</Link>
            <Link className="hidden" to={ROUTES.RESOURCES}>資源</Link>
          </div>
          <div id="sign-in" className="ml-auto flex items-center">
            <button className={colorChange ? 'btn btn-sign-in change' : 'btn btn-sign-in'}>
              <div className="flex items-center">
                <TerminalRounded sx={{ fontSize: "28px" }} />
                <div className="ml-1 md:flex sm:hidden">開發者平台</div>
              </div>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;