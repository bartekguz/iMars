import React from 'react';

const User = ({ post }) => {
    return (
        <div className="flex pl3 pt3">
            <img style={{height: "45px", width: "45px"}} className="br4" src={post.user_id[1].avatar}/>
            <div className="">
                <p className="mt1 ml2 mb0">{post.user_id[1].name} {post.user_id[1].lastname}</p>
                <p className=" mt0 ml2 f7">{post.datetime}</p>
            </div>
        </div>
    );
};

export default User;
