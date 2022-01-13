import React from 'react';
import '../Styles/Portfolio.scss';
import portfolio1 from '../images/portfolio-img1.png'
import portfolio2 from '../images/portfolio-img2.png'
import portfolio3 from '../images/portfolio-img3.png'
const Portfolio = () => {
    return (
        <div className="portfolio-section">
            <div>Our Awesome Portofolio</div>
            <div className="portfolio">
                <img src={portfolio1} alt="" />
                <img src={portfolio2} alt="" />
                <img src={portfolio3} alt="" />
            </div>
        </div>
    );
};

export default Portfolio;