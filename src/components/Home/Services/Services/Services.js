import React from 'react';
import Service from '../Service/Service';
import webMobile from '../../../../images/icons/service1.png';
import graphicD from '../../../../images/icons/service2.png';
import webD from '../../../../images/icons/service3.png';

const infos = [
    {
        title: 'First Itme',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, veniam',
        img: webMobile,

    },
    {
        title: 'Second Itme',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, veniam',
        img: graphicD,
        
    },
    {
        title: 'Third Itme',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, veniam',
        img: webD,
        
    }
]

const Services = () => {
    return (
        <div className='mt-5'>
            <h3 className='text-center mb-5'>Provide awesome <span style={{color: '#7ab259'}}>services</span></h3>

            <div className='row mx-3'>
                {
                    infos.map(info => <Service key={info.index} info={info}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;