import React from 'react';
import './Feed.css';
import Share from "../share/Share";
import Post from "../Post/Post";
import { Posts } from "../../fakeData";

const Feed = ({ posts }) => {
    return (
        <div className="centerPosts">
            <div className="centerPostsWrapper">
                <Share />
                {Posts.map((p) => (
                    <Post key={ p.id } post={ p }/>
                ))}
            </div>
        </div>
    );
};

export default Feed;
