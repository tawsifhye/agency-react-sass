import React from 'react';
import { BiRightArrowAlt } from "react-icons/bi";
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
                <a className="button" href="https://">Our Services <BiRightArrowAlt className='arrow' /></a>
            </div>
            <div className='hero-banner'>
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Hero;