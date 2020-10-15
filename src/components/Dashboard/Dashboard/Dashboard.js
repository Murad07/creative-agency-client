import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import CustomerOrders from '../CustomerOrders/CustomerOrders';
import Order from '../Order/Order';
import Sidebar from '../Sidebar/Sidebar';


const containerStyle = {
    height:"100%"
}

const Dashboard = () => {
    let {serviceName} = useParams();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const userEmail = sessionStorage.getItem('email');
    let isAdmin = loggedInUser.admin;

    isAdmin = sessionStorage.getItem('isAdmin');

    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar serviceName={serviceName}></Sidebar>
                </div>
                <div className="col-md-10" >
                    {
                        (isAdmin === 'false') && 
                        (<Order serviceName={serviceName}></Order>) 
                    }
                    {
                        (isAdmin === 'true') &&
                        (<CustomerOrders serviceName={serviceName}></CustomerOrders>)
                    }
                </div>
                
            </div>
        </section>
    );
};

export default Dashboard;