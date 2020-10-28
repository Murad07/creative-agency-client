import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './CustomerOrder.css';
import SingleOrder from './SingleOrder';

const CustomerOrders = () => {
    const [orders, setOrders] = useState([])


    useEffect(() => {
        fetch('https://hidden-headland-70388.herokuapp.com/allOrders')
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }, []);
   

    return (
        <div >
            <h5 className="text-brand ml-5 pl-4 mt-4 mb-3">Services List</h5>
            <div style={{backgroundColor: '#f4fdfb'}} className="p-3">
                <div className="tableBg p-3">
                    <div className="row headding text-center mx-1">
                        <div className="col-md-2 my-auto">Name</div>
                        <div className="col-md-3 my-auto">Email ID</div>
                        <div className="col-md-2 my-auto">Service</div>
                        <div className="col-md-3 my-auto">Project Details</div>
                        <div className="col-md-2 my-auto">Status</div>
                    </div>
                    {
                        orders.map((order, i) => (
                            <SingleOrder key={i} order={order}></SingleOrder>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default CustomerOrders;