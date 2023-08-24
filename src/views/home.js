import Header from '../components/Header';
import FSBackground from '../components/FSBackground';
import Objective from '../components/Home/Objective';
import Schedule from '../components/Home/Schedule';
import Information from '../components/Home/Info';
import FAQ from '../components/Home/FAQs';
import Partners from '../components/Home/Partners';
import Footer from '../components/Footer';


const Home = () => {
    return (
        <>
            <Header />
            <FSBackground />
            <div className="w-full icon scroll-down">
                <div id="wheel" className="animate-[scroll_1.5s_ease_infinite]"></div>
            </div>
            <main className="content">
                <div className="container mx-auto my-12">
                    <Objective />
                    <Schedule />
                    <Information />
                    <FAQ />
                    <Partners />
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Home;
