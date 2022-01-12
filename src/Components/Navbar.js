import React from 'react';
import '../Styles/Navbar.scss'
const Navbar = () => {
    return (
        <>
            <div className='navbar'>
                <div className='logo'>
                    Agency
                </div>
                <div className="nav-link">
                    <a href="http://">Home</a>
                    <a href="http://">Services</a>
                    <a href="http://">Our Projects</a>
                    <a href="http://">About Us</a>
                </div>
                <a className='button' href="http://">Contact Us</a>
            </div>
        </>
    );
};

export default Navbar;