import React from 'react';
import frame from '../../../images/logos/frame.png';

const HeaderMain = () => {
  return (
    //   row d-flex align-items-center
    <main style={{ height: '500px', width:'100%'}} className=' row d-flex align-items-center'>
      <div className='col-md-4 offset-md-1'>
        <h1 className='brand-text' style={{fontWeight: '700px'}}>
          Let’s Grow Your <br/> Brand To The <br/> Next Level
        </h1>
        <p className='text-secondary'>
          Lorem ipsum dolor sit amet consectetur <br/>
            adipisicing elit. Sit, quas in <br/>
          deleniti dolore ipsam architecto!
        </p>
        <button style={{width:'170px', height:'45px'}} className='btn brand-btn'>Hire us</button>
      </div>
      <div className='col-md-6 px-5'>
        <img src={frame} alt='' className='img-fluid' />
      </div>
    </main>
  );
};

export default HeaderMain;
