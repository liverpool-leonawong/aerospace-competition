import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookRounded, Instagram, YouTube  } from '@mui/icons-material';

const Footer = () => {

  return (
    <>
      <footer className="flex w-full bg-footer relative">
          <div className="container mx-auto">
            <div id="logo" className="flex justify-center mt-10">
              <Link className="logo" to="/" />
            </div>
            <div id="tagline" className="text-center text-white mt-4">讓每個孩子心中種下 一顆科技夢想的種子</div>
            <div id="social" className="flex justify-center text-white gap-4 mt-4">
              <FacebookRounded />
              <Instagram />
              <YouTube />
            </div>
            <div id="copyright" className="text-center text-white text-xs mt-8">
              <p>© 2023 digiXnode Eduverse Ltd.</p>
              <p>Privacy Policy | Terms & Conditions</p>
            </div>
          </div>
      </footer>
    </>
  );
};

export default Footer;