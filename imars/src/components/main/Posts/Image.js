import React from 'react';

const Image = ({ post }) => {
    if (post.image !== '') {
        return (
            <div className="pl3 pt1 pr3 pb2">
                <img src={post.image} alt="post image"/>
            </div>
        );
    } else {
        return (
            <div></div>
        )
    }

};

export default Image;
