import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './UserSidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faListAlt, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    // useEffect(() => {
    //     fetch('http://localhost:5000/isDoctor', {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify({ email: loggedInUser.email })
    //     })
    //         .then(res => res.json())
    //         .then(data => setIsDoctor(data));
    // }, [])

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li className='active'>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
                    </Link>
                </li>
            
                <li>
                    <Link to="/allPatients" className="text-white">
                        <FontAwesomeIcon icon={faListAlt} /> <span>Service List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/patient" className="text-white">
                        <FontAwesomeIcon icon={faCommentAlt} /> <span>Review</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;