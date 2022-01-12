import React from 'react';
import Navbar from './Navbar'
import '../Styles/Home.scss'
import Hero from './Hero';
import WhyEnver from './WhyEnver';
const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <WhyEnver />
        </>
    );
};

export default Home;