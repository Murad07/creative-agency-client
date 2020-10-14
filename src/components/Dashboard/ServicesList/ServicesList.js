import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';


const containerStyle = {
    height:"100%"
}

const formContainer = {
    position: 'absolute',
    backgroundColor: '#f4fdfb',
    width: '100%'
}



const ServicesList = () => {
    let {serviceName} = useParams();



    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar serviceName={serviceName}></Sidebar>
                </div>
                <div className='col-md-10'>
                    <h5 className="text-brand ml-5 pl-4 mt-4 mb-3">Order</h5>
                    <div className="col-md-10 py-5 ml-5" style={formContainer}>
                        service list
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default ServicesList;