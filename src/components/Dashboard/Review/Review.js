import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';


const containerStyle = {
    height:"100%"
}

const formContainer = {
    position: 'absolute',
    backgroundColor: '#f4fdfb',
    width: '100%'
}

const Review = () => {
    let {serviceName} = useParams();

        const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        console.log(info);
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);

        // fetch('http://localhost:5000/addADoctor', {
        //     method: 'POST',
        //     body: formData
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data)
        //     })
        //     .catch(error => {
        //         console.error(error)
        //     })
    }




    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar serviceName={serviceName}></Sidebar>
                </div>
                <div className='col-md-10'>
                    <h5 className="text-brand ml-5 pl-4 mt-4 mb-3">Order</h5>
                    <div className="col-md-10 py-5 ml-5" style={formContainer}>
                        <form onSubmit={handleSubmit} className="w-50"> 
                            <div className="form-group">
                                <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Your name" />
                            </div>
                            <div className="form-group">
                                <input onBlur={handleBlur} type="text" className="form-control" name="designation" placeholder="Company’s name, Designation"/>
                            </div>
                            <div className="form-group">
                                <textarea onBlur={handleBlur} className="form-control" id="" cols="30" rows="6" placeholder="Description"></textarea>
                            </div>
                            
                            <button style={{width: '170px', height: '45px'}} type="submit" className="btn brand-btn">Send</button>
                        </form>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default Review;