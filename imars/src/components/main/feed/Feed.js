import React from 'react';
import './feed.css';
import Share from "../share/Share";
import Post from "../post/Post";
import { Posts } from "../../fakeData";

const Feed = ({ profile }) => {

    const HomeCenterPosts = () => {
       return (
           <>
               <div className="centerPosts">
                   <div className="centerPostsWrapper">
                       <Share />
                       {Posts.map((p) => (
                           <Post key={ p.id } post={ p }/>
                       ))}
                   </div>
               </div>
           </>
       )
    }

    const ProfileCenterPosts = () => {
        return (
            <>
                <div className="profileCenterPosts">
                    <div className="centerPostsWrapper">
                        {Posts.map((p) => (
                            <Post key={ p.id } post={ p }/>
                        ))}
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            {profile ? <ProfileCenterPosts /> : <HomeCenterPosts />}

        </>
    );
};

export default Feed;
