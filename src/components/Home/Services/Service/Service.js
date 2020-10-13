import React from 'react';
import './Service.css';

const Service = ({info}) => {
    return (
        <div className="col-md-4 col-sm-6 text-center px-3 px-md-5">
            <div className="serviceCard p-3 p-md-5">
               <img className="mb-3" style={{height: '74px'}} src={info.img}/>
            
                <h4>{info.title}</h4>
                <p>{info.description}</p>
           </div>
        </div>
    );
};

export default Service;