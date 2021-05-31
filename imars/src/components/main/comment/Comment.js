import React, {useContext, useState} from 'react';
import './comment.css';
import rocketPng from '../../../assets/post/rocket.png';
import likedRocketPng from '../../../assets/post/likedrocket.png';
import axios from "axios";
import { format } from 'timeago.js';
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {AuthContext} from "../../../context/AuthContext";

const Comment = ({ comment, likes, liked, commentUser, getComments }) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [numberOfLikes, setNumberOfLikes] = useState(likes);
    const [likedByCurrentUser, setLikedByCurrentUser] = useState(liked);
    const { user } = useContext(AuthContext);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDelete = async () => {
        await axios.delete(`/comments/${comment.id}`);
        handleClose();
        getComments(comment.post_id);
    }

    const handleEdit = () => {
        handleClose();
    }

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
        <div className="commentWrapper bg-white">
            <div className="commentTop">
                <div className="commentTopLeft">
                    <Link to={`/profile/${commentUser.id}`}>
                        {commentUser && <img src={`https://eu.ui-avatars.com/api/?name=${commentUser.name + ' ' + commentUser.lastname}`} alt="commentProfileImage" className="commentProfileImage"/>}
                    </Link>
                    {commentUser && <span className="commentUsername">{commentUser.name} {commentUser.lastname}</span>}
                    <span className="commentDate">{format(comment.created_at)}</span>
                </div>
                    {user.id === comment.user_id &&  <div className="commentTopRight">

                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            <b>...</b>
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleEdit}>Edit</MenuItem>
                            <MenuItem onClick={handleDelete}>Delete</MenuItem>
                        </Menu>

                    </div>}
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
