import React from 'react';
import airbnb from '../../../images/logos/airbnb.png';
import google from '../../../images/logos/google.png';
import netflix from '../../../images/logos/netflix.png';
import slack from '../../../images/logos/slack.png';
import uber from '../../../images/logos/uber.png';

const Partner = () => {
    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-sm-2">
                    <img className="mx-auto d-block" style={{width:'80%'}} src={slack} alt=""/>
                </div>
                <div className="col-sm-2 ">
                    <img className="mx-auto d-block" style={{width:'80%'}} src={google} alt=""/>
                </div>
                <div className="col-sm-2">
                    <img className="mx-auto d-block" style={{width:'80%'}} src={uber} alt=""/>
                </div>
                <div className="col-sm-2 ">
                    <img className="mx-auto d-block" style={{width:'80%'}} src={netflix} alt=""/>
                </div>
                <div className="col-sm-2 ">
                <   img className="mx-auto d-block" style={{width:'80%'}} src={airbnb} alt=""/>
                </div>
            </div>
  
        </div>
    );
};

export default Partner;