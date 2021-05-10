import React, { useState } from 'react';
import './post.css';
import { MoreVert } from "@material-ui/icons";
import rocketPng from '../../../assets/post/rocket.png';
import postImg from '../../../assets/tlo.jpg';
import { Users } from '../../fakeData';

const Post = ({ post }) => {
    const [rocket, setRocket] = useState(post.like);
    const [isRocked, setIsRocked] = useState(false);

    const rocketHandler = () => {
        setRocket(isRocked ? rocket - 1 : rocket + 1)
        setIsRocked(!isRocked)
    }

    return (
        <div className="post bg-white-90 shadow-5">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="postProfileImage" className="postProfileImage"/>
                        <span className="postUsername">{Users.filter((u) => u.id === post.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImage" src={postImg} alt="imgpost"/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="rocketButton" src={rocketPng} onClick={rocketHandler} alt="rocketpng"/>
                        <span className="postRocketCounter">{rocket} people launched it into space</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;