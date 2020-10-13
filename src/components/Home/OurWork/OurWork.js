import React from 'react';
import carOne from '../../../images/carousel-1.png';
import carTwo from '../../../images/carousel-2.png';
import carThree from '../../../images/carousel-5.png';
import './OurWork.css';


const OurWork = () => {
    return (
        <div style={{backgroundColor: '#111430'}}>
            <div className="container my-5 py-5">
                <h3 className='text-center mb-5 text-white'>Here are some of <span style={{color: '#7ab259'}}>our works</span></h3>
                
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner w-50">
                        <div className="carousel-item active">
                        <img  className="d-block w-100" src={carOne} alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" src={carTwo} alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" src={carThree} alt="Third slide"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurWork;