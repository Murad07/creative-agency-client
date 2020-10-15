import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import "./ServiceListCard.css";

const ServiceListCard = ({service}) => {
    const [order, setOrder] = useState([]);
    
    useEffect(() => {
        fetch('https://cryptic-inlet-22709.herokuapp.com/orderByName?title=' + service.serviceName)
        .then((res) => res.json())
        .then((date) => setOrder(date));
    }, []);

   let colorsBg = ['#ffe3e3', '#f9e79f', '#c6ffeo'];
   let colors = ['#ff4545', '#f1c40f', '#009444'];
   let idx = 0;

   (service.status === 'On going') && (idx = 1);
   (service.status === 'Done') && (idx = 2)

    
    return (
        <div className="col-md-6 py-2 pl-2">
            <div className="whiteBoardCard p-4">
                <div className="row">
                    <div className="col-md-6">
                        {
                            order.img && <img className="mb-3" style={{height: '74px'}} src={`data:image/png;base64,${order.img.img}`}/>
                        }
                    </div>
                    <div className="col-md-6 pl-5">
                        <button 
                        style={{backgroundColor: colorsBg[idx], color: colors[idx]}} 
                        className="btn statusBtn">
                            {service.status}
                        </button>
                    </div>
                </div>
                <h4>{order.title}</h4>
                <p className='text-secondary'>{order.description}</p>
            </div>
        </div>
    );
};

export default ServiceListCard;