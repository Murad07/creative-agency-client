import React from 'react';
import './FeedBack.css';
import customerOne from '../../../../images/customer-1.png';
import customerTwo from '../../../../images/customer-2.png';
import customerThree from '../../../../images/customer-3.png';

const FeedBack = ({info}) => {
    const imgs = [customerOne, customerTwo, customerThree];
    const rand = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    {
        !info.img && (info.img = imgs[rand])
    }

    return (
        <div className="col-md-4 col-sm-6 mb-3">
            <div className="p-4 px-md-5 cardStyle">
                <div className="row">
                    <div className="col-auto mb-3 p-0">
                        <img style={{height: '74px'}} src={info.img}/>
                    </div>
                    <div className="col-8">
                        <h4>{info.name}</h4>
                        <h6>{info.designation}</h6>
                    </div>
                </div>
                <div className="row">
                    <p>{info.description}</p>
                </div>
           </div>
        </div>
    );
};

export default FeedBack;