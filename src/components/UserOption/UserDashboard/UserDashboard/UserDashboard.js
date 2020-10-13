import React from 'react';
import UserSidebar from '../UserSidebar/UserSidebar';


const containerStyle = {
    backgroundColor: "#F4FDFB",
    height:"100%"
}

const UserDashboard = () => {
    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <UserSidebar></UserSidebar>
                </div>
                <div className="col-md-10">
                hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
                </div>
                
            </div>
        </section>
    );
};

export default UserDashboard;