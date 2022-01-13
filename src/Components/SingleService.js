import React from 'react';
import '../Styles/SingleService.scss';
const SingleService = ({ service }) => {
    console.log(service.icon);
    return (
        <div className="single-service">
            <i className={service.icon}></i>
            <div className="service-title">{service.title}</div>
            <div className="service-details">{service.details}</div>
        </div>
    );
};

export default SingleService;