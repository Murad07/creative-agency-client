import React from 'react';
import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './MakeAdmin.css';


const containerStyle = {
    height:"100%"
}

const formContainer = {
    position: 'absolute',
    backgroundColor: '#f4fdfb',
    width: '100%'
}

const MakeAdmin = () => {

    const [info, setInfo] = useState({});
    
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('email', info.email);

        fetch('http://localhost:5000/addAdmin', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }




    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar serviceName={'empty'}></Sidebar>
                </div>
                <div className='col-md-10'>
                    <h5 className="text-brand ml-5 pl-4 mt-4 mb-3">Order</h5>
                    <div className="col-md-10 py-5 ml-5" style={formContainer}>
                        <form onSubmit={handleSubmit} className="whiteBoard p-4"> 
                            <div className="form-group row">
                                <div className="col-md-6">
                                    <label htmlFor="">Email</label>
                                    <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="jon@gamil.com" />
                                </div>
                                <div className="col-2 pl-1">
                                <button 
                                style={{width: '108px', height: '38px', backgroundColor: '#009444', marginTop:'32px'}} 
                                type="submit" 
                                className="btn text-white"
                                > 
                                Submit
                                </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default MakeAdmin;