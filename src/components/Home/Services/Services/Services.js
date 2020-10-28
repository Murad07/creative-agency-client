import React from 'react';
import Service from '../Service/Service';
import webMobile from '../../../../images/icons/service1.png';
import graphicD from '../../../../images/icons/service2.png';
import webD from '../../../../images/icons/service3.png';
import { useState } from 'react';
import { useEffect } from 'react';

const infos = [
    {
        title: 'Web & Mobile design',
        description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
        img: webMobile,
        fake: true,

    },
    {
        title: 'Graphic design',
        description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
        img: graphicD,
        fake: true,
        
    },
    {
        title: 'Web development fake',
        description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
        img: webD,
        fake: true,
        
    }
]

const Services = () => {
    const [services, setServices] = useState([])

    useEffect( () => {
        fetch('https://hidden-headland-70388.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])


    return (
        <div className='mt-5'>
            <h3 className='text-center mb-5'>Provide awesome <span style={{color: '#7ab259'}}>services</span></h3>

            <div className='row mx-3'>
                {
                    services.length ? services.map((info, i) => <Service key={i} info={info}></Service>) :
                    infos.map((info, i) => <Service key={i} info={info}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;