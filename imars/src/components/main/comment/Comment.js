import React, { useState} from 'react';
import './comment.css';
import { MoreVert} from "@material-ui/icons";
import rocketPng from '../../../assets/post/rocket.png';
import likedRocketPng from '../../../assets/post/likedrocket.png';
import axios from "axios";
import { format } from 'timeago.js';
import {Link} from "react-router-dom";

const Comment = ({ comment, likes, liked, commentUser }) => {

    const [numberOfLikes, setNumberOfLikes] = useState(likes);
    const [likedByCurrentUser, setLikedByCurrentUser] = useState(liked);

    const rocketHandler = async () => {
        const res = await axios.get(`/comments/${comment.id}/like`)
        if (likedByCurrentUser) {
            setNumberOfLikes(res.data.likes);
            setLikedByCurrentUser(res.data.liked);
        } else {
            setNumberOfLikes(res.data.likes);
            setLikedByCurrentUser(res.data.liked);
        }
    }

    return (
        <div className="commentWrapper bg-black-10">
            <div className="commentTop">
                <div className="commentTopLeft">
                    <Link to={`/profile/${commentUser.id}`}>
                        {commentUser && <img src={`https://eu.ui-avatars.com/api/?name=${commentUser.name + ' ' + commentUser.lastname}`} alt="commentProfileImage" className="commentProfileImage"/>}
                    </Link>
                    {commentUser && <span className="commentUsername">{commentUser.name} {commentUser.lastname}</span>}
                    <span className="commentDate">{format(comment.created_at)}</span>
                </div>

                <div className="commentTopRight">
                    <MoreVert />
                </div>
            </div>

            <div className="commentCenter">
                <span className="commentText">{comment.body}</span>
            </div>

            <div className="commentBottom">
                <div className="commentBottomLeft">
                    <img className="rocketCommentButton" src={likedByCurrentUser ? likedRocketPng : rocketPng} onClick={rocketHandler} alt="rocketpng"/>
                    <span className="commentRocketCounter">{numberOfLikes} people launched it into space</span>
                </div>
            </div>
        </div>
    );
};

export default Comment;
