import React from 'react';

const Contact = () => {
    return (
       <section className="mt-5 pt-5 pb-3" style={{backgroundColor: '#fbd062'}}>
           <div className="container">
               <div className="row pt-3">
                   <div className="col-md-6 section-header brand-text mb-5">
                        <h1>Let us handle your <br/> project, professionally.</h1>
                        <p className='pt-3'>
                            With well written codes, we build amazing apps for all <br/>
                             platforms, mobile and web apps in general.
                        </p>
                    </div>
                    <div className="col-md-6 mx-auto">
                        <form action="">
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Your email address"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your name / Company's name"/>
                            </div>
                            <div className="form-group">
                                <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Your message"></textarea>
                            </div>
                            <div className="form-group">
                                <button style={{width: '170px', height: '45px'}} type="button" className="btn brand-btn"> Send </button>
                            </div>
                        </form>
                    </div>
               </div>
               <p className='brand-text text-center pt-5 mt-4'>copyright Orange labs 2020</p>
           </div>
       </section>
    );
};

export default Contact;
