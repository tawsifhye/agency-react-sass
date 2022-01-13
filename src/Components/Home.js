import React from 'react';
import Navbar from './Navbar'
import '../Styles/Home.scss'
import Hero from './Hero';
import WhyEnver from './WhyEnver';
import Services from './Services';
const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <WhyEnver />
            <Services />
        </>
    );
};

export default Home;