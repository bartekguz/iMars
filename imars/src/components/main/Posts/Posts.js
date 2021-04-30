import React from 'react';
import Body from "../../share/Body";
import Image from "../../share/Image";
import User from "../../share/User";
import Rockets from "../../share/Rockets";
import './Posts.css';
import Share from "../../share/Share";

const Posts = ({ posts }) => {
    return (
        <div className="outline centerPosts">
            <div className="centerPostsWrapper bg-white-90 shadow-5">
                <Share />
            </div>
        </div>
    );
};

export default Posts;
