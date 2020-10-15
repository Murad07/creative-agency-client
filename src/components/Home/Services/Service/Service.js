import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({info}) => {
    
    return (
        <div className="col-md-4 col-sm-6 text-center px-3 px-md-5">
            <Link to={`/dashboard/${info.title}`} className='serviceLink'>
                <div className="serviceCard p-3 p-md-5">
                    {
                        !info.fake ? <img className="mb-3" style={{height: '74px'}} src={`data:image/png;base64,${info.img.img}`}/>
                        :
                       <img className="mb-3" style={{height: '74px'}} src={info.img}/>
                    }
                    
                    
                        <h4 className='brand-text'>{info.title}</h4>
                        <p className='text-secondary'>{info.description}</p>
                </div>
            </Link>
        </div>
    );
};

export default Service;