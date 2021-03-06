import React from 'react';
import { useState } from 'react';

const SingleOrder = ({order}) => {
   const [status, setStatus] = useState(order.status);

   // Daynamic text color of status
   let colors = ['#ff4545', '#f1c40f', '#009444'];
   let idx = 0;

   (status === 'Pending') && (idx = 0);
   (status === 'On going') && (idx = 1);
   (status === 'Done') && (idx = 2);

   const handleStatus = (e) =>{
        setStatus(e.target.value);
        const statusA = [e.target.value];
        updateStatus(statusA[0]);
   }

   const updateStatus = (newStatus) =>{
        (status === 'Pending') && (idx = 0);
        (status === 'On going') && (idx = 1);
        (status === 'Done') && (idx = 2)

        const id = order._id;
        const formData = new FormData();
        formData.append('status', newStatus);
         
        fetch(`https://hidden-headland-70388.herokuapp.com/updateStatus/${id}`, {
          method: 'PATCH',
          body: formData,
        })
          .then((res) => res.json())
          .then((result) => {
            alert('Status updated!');
          });
   }

    return (
        <div className="row text-center mx-1">
            <div className="col-md-2 py-2">{order.name}</div>
            <div className="col-md-3 py-2">{order.email}</div>
            <div className="col-md-2 py-2">{order.serviceName}</div>
            <div className="col-md-3 py-2">{order.description}</div>
            <div className="col-md-2 py-2">
                <div className="dropdown">
                    <p style={{color: colors[idx]}} className=" dropdown-toggle" data-toggle="dropdown">{status}
                    <span className="caret"></span></p>
                    <ul className="dropdown-menu">
                        <option onClick={handleStatus} value="Pending">Pending</option>
                        <option onClick={handleStatus} value="On going">On going</option>
                        <option onClick={handleStatus} value="Done">Done</option>
                    </ul>
                </div>  
            </div>
        </div>
    );
};

export default SingleOrder;