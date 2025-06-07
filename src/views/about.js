// import Header from '../components/common/header';
// import Objective from '../components/Home/Objective';
// import Partners from '../components/Home/Partners';
import Footer from '../components/common/Footer';
//import { React, useState } from 'react';
import { useTranslation } from "react-i18next";
import { ROUTES } from '../definitions';
import { Link } from 'react-router-dom';
import { TerminalRounded } from '@mui/icons-material';
import LanguageSwitchForAbout from '../components/common/LanguageSwitchForAbout';
import Gallery from '../components/Home/Gallery';

const About = () => {
    const { t, i18n } = useTranslation();
    return (
        <>
            <div className="flex px-6 my-5 items-center">
                <div id="logo logo-link">
                    <Link to={ROUTES.HOME}>
                        <div className="flex">
                            <div className='logo change' />
                            <div className='logo-name change'><span className="mr-2">|</span> {t("competition")}</div>
                        </div>
                    </Link>
                </div>
                <div id="btn-group" className="ml-auto flex items-center">
                    <LanguageSwitchForAbout />
                    <button className='btn btn-sign-in change hidden md:block'>
                        <div className="flex items-center">
                            <TerminalRounded sx={{ fontSize: "24px" }} />
                            <div className="ml-1 md:flex">{t("platform")}</div>
                        </div>
                    </button>
                </div>
            </div>
            {/*content*/}
            <main className="content px-6 lg:px-10">
                <div className="container mx-auto my-12">
                    <h4 className="text-primary font-semibold text-center">
                        {t("about-title")}
                    </h4>
                    <div className="relative">
                        <h4 className="text-black mt-8 mb-5">{t("about-subhead")}</h4>
                        <div className="mb-4 text-slate-500 leading-relaxed">
                            <p className="mb-2">{t("about-content1")}</p>
                            <p className="mb-2">在2024年6月底至7月，<a href="http://www.glac.org.cn/" target="_blank" className="text-primary">{t("about-glac")}</a>{t("about-content2")}</p>
                            <p className="mb-2">{t("about-content3")}</p>
                        </div>
                    </div>
                    {/* CNSA */}
                    <div className="grid items-center grid-cols-1 gap-x-12 gap-y-8 mb-8 lg:grid-cols-6 xl:grid-cols-8">
                        <div className="col-span-6 xl:col-span-8">
                            <p className="mb-4 text-slate-500 text-md font-semibold leading-relaxed">{t("CNSA")}</p>
                            <p className="mb-4 text-slate-500 text-md leading-relaxed">
                                {t("CNSA-description1")}
                            </p>
                            <p className="mb-4 text-slate-500 text-md leading-relaxed">
                                {t("CNSA-description2")}
                            </p>
                            <p className="mb-4 text-slate-500 text-md leading-relaxed">
                                {t("CNSA-description3")}
                            </p>
                        </div>
                    </div>
                    <h5 className="text-black my-8">
                        {t("organizers")}
                    </h5>
                    {/* GLAC */}
                    <div className="grid items-center grid-cols-1 gap-x-12 gap-y-8 mb-8 lg:grid-cols-6 xl:grid-cols-8">
                        <div className="col-span-1 align-top self-start">
                            <img src="/assets/logo_glac.jpg" alt="GLAC" className="h-auto border-none" width="140" />
                        </div>
                        <div className="col-span-5 xl:col-span-7">
                            <p className="mb-4 text-slate-500 text-md font-semibold leading-relaxed">{t("GLAC")}</p>
                            <p className="mb-4 text-slate-500 text-md leading-relaxed">
                                {t("GLAC-description1")}
                            </p>
                            <p className="mb-4 text-slate-500 text-md leading-relaxed">
                                {t("GLAC-description2")}
                            </p>
                            <p className="mb-4 text-slate-500 text-md leading-relaxed">
                                {t("GLAC-description3")}
                            </p>
                        </div>
                    </div>
                    {/* Name Yue */}
                    <div className="grid items-center grid-cols-1 gap-x-12 gap-y-8 mb-8 lg:grid-cols-6 xl:grid-cols-8">
                        <div className="col-span-1 align-top self-start">
                            <img src="/assets/logo_nam-yue-research.png" alt="南粵研究院" className="h-auto border-none" width="90" />
                        </div>
                        <div className="col-span-5 xl:col-span-7">
                            <p className="mb-4 text-slate-500 text-md font-semibold leading-relaxed">{t("Nam")}</p>
                            <p className="mb-4 text-slate-500 text-md leading-relaxed">
                                {t("Nam-description1")}
                            </p>
                            <p className="mb-4 text-slate-500 text-md leading-relaxed">
                                {t("Nam-description2")}
                            </p>
                        </div>
                    </div>
                    <Gallery />
                </div>
            </main>
            <Footer />
        </>
    );
};

export default About;
