import React from 'react';
import Navbar from './Navbar'
import '../Styles/Home.scss'
import Hero from './Hero';
import WhyEnver from './WhyEnver';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';
const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <WhyEnver />
            <Services />
            <Portfolio />
            <Contact />
        </>
    );
};

export default Home;