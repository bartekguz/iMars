import React from 'react';
import rocket from '../../../assets/post/rocket.png';

const Rockets = ({ post }) => {
    return (
            <div className="flex justify-end pl4 pb2 debug-black" style={{width: "60rem"}}>
                    <img className="self-center" src={rocket}/>
                    <p className="ml2">{post.rockets}</p>
                    <p clssName="">{post.rockets}</p>
            </div>
    );
};

export default Rockets;
