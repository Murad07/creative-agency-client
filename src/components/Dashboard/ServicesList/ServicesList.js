import React from 'react';
import { useContext } from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import ServiceListCard from '../ServiceListCard/ServiceListCard';
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
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [services, setServices] = useState([])

    useEffect( () => {
        fetch('http://localhost:5000/servicesList/' + loggedInUser.email)
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    // console.log('S: ', services)
    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar serviceName={serviceName}></Sidebar>
                </div>
                <div className='col-md-10'>
                    <h5 className="text-brand ml-5 pl-4 mt-4 mb-3">Services List {loggedInUser.email}</h5>
                    <div className="col-md-10 row" style={formContainer}>
                        {
                            services.map((service, i) => 
                                <ServiceListCard key={i} service={service}></ServiceListCard>
                            )
                        }
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default ServicesList;