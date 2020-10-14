import React from 'react';
import { useState } from 'react';
import './Order.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';



const Order = ({serviceName}) => {

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
        
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);
        {
            info.serviceName ? formData.append('serviceName', info.serviceName) :
            formData.append('serviceName', serviceName);
        }
        
        formData.append('description', info.description);
        formData.append('price', info.price);

        fetch('http://localhost:5000/addOrder', {
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
        <div>
            <h5 className="text-brand ml-5 pl-4 mt-4 mb-3">Order</h5>
            <div className="col-md-10 py-5 ml-5 formContainer">
                
                <form onSubmit={handleSubmit} className="w-50"> 
                    <div className="form-group">
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Your name / Company's name" required/>
                    </div>
                    <div className="form-group">
                        <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Your email address" required/>
                    </div>
                    <div className="form-group">
                        {
                            (serviceName !== 'empty') ?
                                <input onBlur={handleBlur} type="text" className="form-control" name="serviceName" value={serviceName} required/> :
                            
                                <input onBlur={handleBlur} type="text" className="form-control" name="serviceName" placeholder="Service Name" required/>
                            
                        }
                    </div>
                    <div className="form-group">
                        <textarea onBlur={handleBlur} className="form-control" id="" cols="30" rows="6" name="description" placeholder="Project Details" required></textarea>
                    </div>
                    <div className='row'> 
                        <div className="form-group col-md-6">
                            <input onBlur={handleBlur} type="text" className="form-control" name="price" placeholder="Price" required/>
                        </div>
                        <div className="form-group col-md-6">
                            <input hidden onChange={handleFileChange} type="file" className="form-control" name="file" id="imageUpload" placeholder="Picture" />
                            <label className='form-control imageLabel text-center' for="imageUpload">
                                <FontAwesomeIcon icon={faUpload} /> 
                                <span className='pl-2'> Upload project file </span>
                            </label>
                        </div>
                    </div>
                    <button style={{width: '170px', height: '45px'}} type="submit" className="btn brand-btn">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Order;