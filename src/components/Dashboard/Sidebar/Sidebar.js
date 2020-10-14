import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faListAlt, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png'

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
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 pt-4 pb-5 px-4" style={{ height: "100vh" }}>
            

            <ul className="list-unstyled">
                <li>
                    <Link to='/'>
                        <img
                            height='50'
                            src={logo}
                            alt='Brand Loge'
                        />
                    </Link>
                </li>
                <li className='active'>
                    <Link to="/dashboard">
                        <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
                    </Link>
                </li>
            
                <li>
                    <Link to="/serviceList">
                        <FontAwesomeIcon icon={faListAlt} /> <span>Service List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/review">
                        <FontAwesomeIcon icon={faCommentAlt} /> <span>Review</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;