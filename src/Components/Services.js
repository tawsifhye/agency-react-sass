import React from 'react';
import '../Styles/Services.scss'
import SingleService from './SingleService';


const services = [
    {
        'id': '1',
        'icon': 'fas fa-laptop-code',
        'title': 'Development',
        'details': 'Create a platform with the best and coolest quality from us.',
    },
    {
        'id': '2',
        'icon': 'fas fa-layer-group',
        'title': 'UI/UX Designer',
        'details': 'We provide UI/UX Design services, and of course with the best quality',
    },
    {
        'id': '3',
        'icon': 'fas fa-layer-group',
        'title': 'Graphik Designer',
        'details': 'Create a platform with the best and coolest quality from us.',
    },
    {
        'id': '4',
        'icon': 'fas fa-laptop-code',
        'title': 'Motion Graphik',
        'details': 'We provide Graphic Design services, with the best designers',
    },

    {
        'id': '5',
        'icon': 'fas fa-laptop-code',
        'title': 'Photography',
        'details': 'We provide Photography services, and of course with the best quality',
    },

    {
        'id': '6',
        'icon': 'fas fa-laptop-code',
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