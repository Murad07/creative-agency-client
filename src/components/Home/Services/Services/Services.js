import React from 'react';
import Service from '../Service/Service';
import webMobile from '../../../../images/icons/service1.png';
import graphicD from '../../../../images/icons/service2.png';
import webD from '../../../../images/icons/service3.png';

const infos = [
    {
        name: 'Web & Mobile design',
        description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
        img: webMobile,

    },
    {
        name: 'Graphic design',
        description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
        img: graphicD,
        
    },
    {
        name: 'Web development',
        description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
        img: webD,
        
    }
]

const Services = () => {
    return (
        <div className='mt-5'>
            <h3 className='text-center mb-5'>Provide awesome <span style={{color: '#7ab259'}}>services</span></h3>

            <div className='row mx-3'>
                {
                    infos.map((info, i) => <Service key={i} info={info}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;