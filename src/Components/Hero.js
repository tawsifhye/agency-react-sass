import React from 'react';
import '../Styles/Hero.scss'
import banner from '../images/hero-image.png'
const Hero = () => {
    return (
        <div className='hero-section'>
            <div className='hero-title'>
                <div>
                    Build Your <br /> Awesome <br /> Portfolio
                </div>
                <p>
                    Enver studio is a digital studio that offers several services such as UI/UX Design to developers, we will provide the best service for those of you who use our services.
                </p>
            </div>
            <div className='hero-banner'>
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Hero;