import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../definitions';

const Header = () => {

  return (
    <>
      <header className="sticky top-0 z-50">
        <nav className="flex mx-auto px-8 py-5 items-center">
            <div id="logo" className="flex">
              <Link className="logo" to="/" />
            </div>
            <div id="menu" className="flex items-center">
              <Link className="px-3" to={ROUTES.ABOUT}>about</Link>
              <Link className="px-3" to={ROUTES.PROGRAMS}>programs</Link>
              <Link className="px-3" to={ROUTES.TOURS}>tours</Link>
              <Link className="px-3" to={ROUTES.SCHEDULE}>schedule</Link>
              <Link className="px-3" to={ROUTES.NEWS}>news</Link>
              <Link className="px-3" to={ROUTES.RESOURCES}>resources</Link>
              <Link className="px-3" to={ROUTES.PARTNERS}>partners</Link>
              <Link className="px-3" to={ROUTES.CONTACT}>contact</Link>
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