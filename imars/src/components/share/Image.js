import React from 'react';

const Image = ({ post }) => {
    // if (post.image !== '') {
    //     return (
    //         <div className="pl3 pt1 pr3 pb2">
    //             <img src alt="post image"/>
    //         </div>
    //     );
    // } else {
    //     return (
    //         <div></div>
    //     )
    // }

    return <div className="pl3 pt1 pr3 pb2">
                     <img src alt="post image"/>
                 </div>
};

export default Image;
