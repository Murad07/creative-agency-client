import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light px-5 pt-4 mx-md-5">
            <Link class="navbar-brand" href="/">
                <img src={logo} width="150" height="47" alt="" loading="lazy"/>
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link mr-5" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5" to="/">Our Protfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5" to="/">Our Team</Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link className="nav-link mr-5" to="/">Contact Us</Link>
                    </li>

                    <Link to='/login'>
                        <button style={{width: '134px', height:'45px'}} type="button" className="btn brand-btn">Login</button>
                    </Link>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;