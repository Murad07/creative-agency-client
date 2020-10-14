import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({info}) => {
    const a = 12;
    return (
        <div className="col-md-4 col-sm-6 text-center px-3 px-md-5">
            <Link to={`/dashboard/${info.name}`} className='serviceLink'>
                <div className="serviceCard p-3 p-md-5">
                    <img className="mb-3" style={{height: '74px'}} src={info.img}/>
                    
                        <h4 className='brand-text'>{info.name}</h4>
                        <p className='text-secondary'>{info.description}</p>
                </div>
            </Link>
        </div>
    );
};

export default Service;