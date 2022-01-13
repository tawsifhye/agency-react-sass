import React from 'react';
import '../Styles/SingleService.scss';
const SingleService = ({ service }) => {
    return (
        <div className="single-service">
            <div className="service-title">{service.title}</div>
            <div className="service-details">{service.details}</div>
        </div>
    );
};

export default SingleService;