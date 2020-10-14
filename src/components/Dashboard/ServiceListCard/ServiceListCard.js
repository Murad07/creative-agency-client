import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import "./ServiceListCard.css";

const ServiceListCard = ({service}) => {
    const [order, setOrder] = useState([]);
    
    useEffect(() => {
    fetch('http://localhost:5000/orderByName?title=' + service.serviceName)
      .then((res) => res.json())
      .then((date) => setOrder(date));
  }, []);

   console.log(order);
    
    return (
        <div className="col-md-6  pt-4 pl-2">
            <div className="whiteBoard p-4">
                {
                    order.img && <img className="mb-3" style={{height: '74px'}} src={`data:image/png;base64,${order.img.img}`}/>
                }
                <h4>{order.title}</h4>
                <p className='text-secondary'>{order.description}</p>
            </div>
        </div>
    );
};

export default ServiceListCard;