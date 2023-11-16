import { React, useState } from "react";
import { useTranslation } from "react-i18next";
import { Close } from '@mui/icons-material';

export const ModalCNSA = () => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(false);
  return (
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
                {t("CNSA")}
              </h4>
              <button
                className="ml-auto float-right outline-none focus:outline-none"
                onClick={handleShow}
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
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};