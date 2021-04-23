import React from 'react';
import Body from "./Body";
import Image from "./Image";
import User from "./User";
import Rockets from "./Rockets";

const Posts = ({ post }) => {
    return (
        <div className="outline" style={{width: "60rem", marginLeft: "18rem"}} >
            <div className="bg-white-90 shadow-5" style={{borderRadius: "1rem"}}>
                <User post={post}/>
                <hr size="1" width="97%"/>
                <Body post={post}/>
                <Image post={post}/>
                <Rockets post={post}/>
            </div>
        </div>
    );
};

export default Posts;
