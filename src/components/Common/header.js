import { React, useState} from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../definitions';

const Header = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
      if (window.scrollY >= 600) {
          setColorchange(true);
      }
      else {
          setColorchange(false);
      }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (
    <>
      <header className={colorChange ? 'navbar change' : 'navbar'}>
        <nav className="flex mx-auto px-8 py-5 items-center">
            <div id="logo" className="flex">
              <Link className="logo" to="/" />
            </div>
            <div id="menu" className="flex items-center">
              <Link className="px-3" to={ROUTES.ABOUT}>關於比賽</Link>
              <Link className="px-3" to={ROUTES.PROGRAMS}>比賽日程</Link>
              <Link className="px-3" to={ROUTES.INFO}>比賽資料</Link>
              <Link className="px-3" to={ROUTES.GALLERY}>相集</Link>
              <Link className="px-3" to={ROUTES.FAQ}>常見問題</Link>
              <Link className="px-3" to={ROUTES.RESOURCES}>資源</Link>
              <Link className="px-3" to={ROUTES.PARTNERS}>合作夥伴</Link>
            </div>
            <div id="sign-in" className="ml-auto flex items-center">
              <button className="btn btn-primary btn-sign-in">
                sign in
              </button>
            </div>
        </nav>
      </header>
    </>
  );
};

export default Header;