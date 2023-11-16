import Header from '../components/common/header';
import FSBackground from '../components/common/FSBackground';
import Objective from '../components/Home/Objective';
import Schedule from '../components/Home/Schedule';
import Information from '../components/Home/Info';
import Gallery from '../components/Home/Gallery';
import FAQ from '../components/Home/FAQ';
import Partners from '../components/Home/Partners';
import Footer from '../components/common/Footer';
import ScrollSpy from "react-ui-scrollspy";
import { React, useState } from 'react';
import { useTranslation } from "react-i18next";
import { Close } from '@mui/icons-material';

const Home = () => {
    const { t, i18n } = useTranslation();
    return (
        <>
            <Header />
            <FSBackground />
            <div className="w-full icon scroll-down">
                <div id="wheel" className="animate-[scroll_1.5s_ease_infinite]"></div>
            </div>
            <main className="content">
                <div className="container mx-auto my-12">
                    <ScrollSpy scrollThrottle={10} useBoxMethod={false}>
                    <Objective />
                    <Schedule />
                    <Information />
                    <Gallery />
                    <FAQ />
                    <Partners />
                    </ScrollSpy>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Home;
