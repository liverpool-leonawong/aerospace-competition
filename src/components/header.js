import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../definitions';

export default () => {

  return (
    <>
      <header className="sticky top-0 z-50">
        <nav className="container flex mx-auto py-3">
            <div id="logo" className="flex">
              <Link className="logo" to="/" />
            </div>
            <div id="menu" className="flex lowercase">
              <Link className="px-3" to={ROUTES.ABOUT}>about</Link>
              <Link className="px-3" to={ROUTES.PROGRAMS}>programs</Link>
              <Link className="px-3" to={ROUTES.TOURS}>tours</Link>
              <Link className="px-3" to={ROUTES.SCHEDULE}>schedule</Link>
              <Link className="px-3" to={ROUTES.NEWS}>news</Link>
              <Link className="px-3" to={ROUTES.RESOURCES}>resources</Link>
              <Link className="px-3" to={ROUTES.PARTNERS}>partners</Link>
              <Link className="px-3" to={ROUTES.CONTACT}>contact</Link>
            </div>
            <div id="sign-in" className="ml-auto text-black flex items-center">
              <button className="btn lowercase">
                sign in
              </button>
            </div>
        </nav>
      </header>
    </>
  );
};
