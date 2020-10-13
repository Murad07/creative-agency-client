import React from 'react';
import customerOne from '../../../../images/customer-1.png';
import customerTwo from '../../../../images/customer-2.png';
import customerThree from '../../../../images/customer-3.png';
import FeedBack from '../FeedBack/FeedBack';


const infos = [
    {
        name: 'First Itme',
        designation: 'CEO, MA. Core',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, veniam',
        img: customerOne,

    },
    {
        name: 'Second Itme',
        designation: 'CEO, The Mas',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, veniam',
        img: customerTwo,
        
    },
    {
        name: 'Third Itme',
        designation: 'CEO, Monopol',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, veniam',
        img: customerThree,
        
    }
]

const FeedBacks = () => {
    return (
        <div className='mt-5'>
            <h3 className='text-center mb-5 brand-text'>Clients <span style={{color: '#7ab259'}}>Feedback</span></h3>

            <div className='row mx-3'>
                {
                    infos.map(info => <FeedBack key={info.index} info={info}></FeedBack>)
                }
            </div>
        </div>
    );
};

export default FeedBacks;