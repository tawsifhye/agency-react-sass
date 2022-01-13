import React from 'react';
import { MdPlayArrow } from "react-icons/md";
import '../Styles/WhyEnver.scss'
import meeting_img from '../images/image4.png'
const WhyEnver = () => {
    return (
        <div className='why-enver'>
            <div>
                <div>
                    Why Enver Is The Best Choice?
                </div>
                <p>
                    Watch this one minute video so you understand why you should use our services!
                </p>
            </div>
            <img src={meeting_img} alt="" />
            <MdPlayArrow className="play-icon" />
        </div>
    );
};

export default WhyEnver;