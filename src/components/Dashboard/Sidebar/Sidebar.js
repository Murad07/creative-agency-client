import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faListAlt, faCommentAlt, faUserPlus, faPlus } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../images/logos/logo.png'

const Sidebar = ({serviceName}) => {
    const isAdmin = sessionStorage.getItem('isAdmin');

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
                

                {
                    (isAdmin === 'false') &&
                    <div>
                        <li className='active'>
                            <Link to={`/dashboard/${serviceName}`}>
                                <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
                            </Link>
                        </li>
                    
                        <li>
                            <Link to={`/serviceList/${serviceName}`}>
                                <FontAwesomeIcon icon={faListAlt} /> <span>Service List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={`/review/${serviceName}`}>
                                <FontAwesomeIcon icon={faCommentAlt} /> <span>Review</span>
                            </Link>
                        </li>
                    </div>
                }
                {
                    (isAdmin === 'true') &&
                    <div>
                        <li>
                            <Link to={`/dashboard/${serviceName}`}>
                                <FontAwesomeIcon icon={faListAlt} /> <span>Service List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addService">
                                <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addAdmin">
                                <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                            </Link>
                        </li>
                    </div>
                }
                
            </ul>
        </div>
    );
};

export default Sidebar;