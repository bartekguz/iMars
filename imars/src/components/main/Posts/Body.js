import React from 'react';

const Body = ({ post }) => {
    return (
        <div className="pl3 pt1 pb3">
            <p className="f4">{post.body}</p>
        </div>
    );
};

export default Body;
