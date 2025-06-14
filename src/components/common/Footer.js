import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Close, FacebookRounded, Instagram, YouTube } from '@mui/icons-material';
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <footer className="flex w-full bg-footer relative">
        <div className="container mx-auto">
          <div id="logo" className="flex justify-center mt-10">
            <Link className="logo" to="/" />
          </div>
          <div id="tagline" className="text-center text-white mt-4">{t("footer-quote")}</div>
          {/* <div id="social" className="flex justify-center text-white gap-4 mt-4">
              <FacebookRounded />
              <Instagram />
              <YouTube />
            </div> */}
          <div id="copyright" className="text-center text-white text-xs mt-8">
            <p>© 2023 PERAC Eduverse Ltd.</p>
            <p>Privacy Policy | <button onClick={() => setShowModal(true)}>Terms & Conditions</button></p>
          </div>
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
                        Terms & Conditions
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
                      <p className="mb-4 text-slate-500 text-lg leading-relaxed">
                        {t("t&c")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-60 bg-black"></div>
            </>
          ) : null}
        </div>
      </footer>
    </>
  );
};

export default Footer;