import React from 'react';
import Navbar from './Navbar'
import '../Styles/Home.scss'
import Hero from './Hero';
import WhyEnver from './WhyEnver';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';
const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <WhyEnver />
            <Services />
            <Portfolio />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;