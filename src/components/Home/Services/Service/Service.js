import React from 'react';
import { Link } from 'react-router-dom';
import {useSpring, animated} from 'react-spring'
import './Service.css';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


const Service = ({info}) => {

    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  
    
    return (
        <div className="col-md-4 col-sm-6 text-center px-3 px-md-5">
            <Link to={`/dashboard/${info.title}`} className='serviceLink'>
                <animated.div className="serviceCard p-3 p-md-5" 
                    onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                    onMouseLeave={() => set({ xys: [0, 0, 1] })}
                    style={{ transform: props.xys.interpolate(trans) }}
                >
                    {
                        !info.fake ? <img className="mb-3" style={{height: '74px'}} src={`data:image/png;base64,${info.img.img}`}/>
                        :
                       <img className="mb-3" style={{height: '74px'}} src={info.img}/>
                    }
                    
                    
                        <h4 className='brand-text'>{info.title}</h4>
                        <p className='text-secondary'>{info.description}</p>
                </animated.div>
            </Link>
        </div>
    );
};

export default Service;