import React from 'react';
import { Link } from 'react-router-dom';

export default () => {

  return (
    <>
      <div className="bg-primary z-50">
        <div className="container mx-auto flex p-2">
          <Link to="/" id="return-home" className="ml-auto font-semibold text-black no-underline">
            Return to Homepage
          </Link>
        </div>
      </div>
      <header className="sticky top-0 z-50">
        <div className="header-bar">
          <div className="container flex px-3 mx-auto">
            <div className="flex items-center p-3">
              <Link className="logo" to="/" />
            </div>
            <div className="ml-auto text-white flex items-center">
              <div className="flex items-center">
                Hi!
              </div>
              <button
                className="block text-white material-icons md-28 no-underline ml-2"
              >
                menu
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
