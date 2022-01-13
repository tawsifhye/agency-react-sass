import React from 'react';
import '../Styles/Services.scss'
import SingleService from './SingleService';


const services = [
    {
        'id': '1',
        'title': 'Development',
        'details': 'Create a platform with the best and coolest quality from us.',
    },
    {
        'id': '2',
        'title': 'UI/UX Designer',
        'details': 'We provide UI/UX Design services, and of course with the best quality',
    },
    {
        'id': '3',
        'title': 'Graphik Designer',
        'details': 'Create a platform with the best and coolest quality from us.',
    },
    {
        'id': '4',
        'title': 'Motion Graphik',
        'details': 'We provide Graphic Design services, with the best designers',
    },

    {
        'id': '5',
        'title': 'Photography',
        'details': 'We provide Photography services, and of course with the best quality',
    },

    {
        'id': '6',
        'title': 'Videography',
        'details': 'Create a platform with the best and coolest quality from us.',
    },

]

const Services = () => {
    return (
        <div className="services-section">
            <div>The Service We Provide <br /> For You</div>
            <div className="services">
                {
                    services.map((service) => <  SingleService key={service.id} service={service} />)
                }
            </div>
        </div>
    );
};

export default Services;