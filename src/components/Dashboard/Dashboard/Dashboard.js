import React from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import Order from '../Order/Order';
import Sidebar from '../Sidebar/Sidebar';


const containerStyle = {
    height:"100%"
}

const Dashboard = () => {
    let {serviceName} = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const isAdmin = loggedInUser.admin;

    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar serviceName={serviceName}></Sidebar>
                </div>
                <div className="col-md-10">
                    {
                        !isAdmin && <Order serviceName={serviceName}></Order>
                    }
                </div>
                
            </div>
        </section>
    );
};

export default Dashboard;