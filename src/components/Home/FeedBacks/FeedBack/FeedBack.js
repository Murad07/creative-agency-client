import React from 'react';
import './FeedBack.css';

const FeedBack = ({info}) => {
    console.log(info)
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