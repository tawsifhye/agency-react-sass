import React, { useState } from 'react';
import '../Styles/Navbar.scss'
const Navbar = () => {
    const [togglerClicked, setTogglerClicked] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const screenWidthHandler = () => {
        if (window.innerWidth < 769) {
            setIsMobile(true);
        }
    }

    window.addEventListener('resize', screenWidthHandler)
    return (
        <>
            <div className='navbar'>
                <div className='logo'>
                    Agency
                </div>
                {
                    !isMobile ?
                        <>
                            <div className="nav-link">
                                <a className='link' href="http://">Home</a>
                                <a className='link' href="http://">Services</a>
                                <a className='link' href="http://">Our Projects</a>
                                <a className='link' href="http://">About Us</a>
                            </div>
                            <a className='button' href="http://">Contact Us</a>
                        </>
                        :
                        <div className='burger-menu'>
                            {
                                !togglerClicked ? <i className="fas fa-bars" onClick={() => setTogglerClicked(true)}></i>
                                    :
                                    <i class="far fa-minus-square" onClick={() => setTogglerClicked(false)}></i>
                            }
                        </div>
                }

                {
                    togglerClicked && <div className="mobile-menu">
                        <a href="http://">Home</a>
                        <a href="http://">Services</a>
                        <a href="http://">Our Projects</a>
                        <a href="http://">About Us</a>
                        <a className='button' href="http://">Contact Us</a>
                    </div>
                }

            </div>
        </>
    );
};

export default Navbar;