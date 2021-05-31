import React, {useContext, useRef, useState} from 'react';
import './post.css';
import rocketPng from '../../../assets/post/rocket.png';
import likedRocketPng from '../../../assets/post/likedrocket.png';
import axios from "axios";
import { format } from 'timeago.js';
import {Link} from "react-router-dom";
import Comment from "../comment/Comment";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {AuthContext} from "../../../context/AuthContext";

const Post = ({ post, likes, liked, postUser }) => {
    const { user } = useContext(AuthContext);
    const [numberOfLikes, setNumberOfLikes] = useState(likes);
    const [likedByCurrentUser, setLikedByCurrentUser] = useState(liked);
    const [visibility, setVisibility] = useState(false);
    const [comments, setComments] = useState([]);
    const desc = useRef();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDelete = async () => {
        await axios.delete(`/posts/${post.id}`);
        handleClose();
        window.location.reload();
    }

    const handleEdit = () => {
        handleClose();
    }

    const rocketHandler = async () => {
        const res = await axios.get(`/posts/${post.id}/like`)
        if (likedByCurrentUser) {
            setNumberOfLikes(res.data.likes);
            setLikedByCurrentUser(res.data.liked);
        } else {
            setNumberOfLikes(res.data.likes);
            setLikedByCurrentUser(res.data.liked);
        }
    }

    const toggleComents = () => {
        getComments(post.id)
        setVisibility(!visibility);
    }

    const getComments = async (id) => {
        const res = await axios.get(`/posts/${id}/comments`)
        setComments(res.data)
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("body", desc.current.value);

        try {
            await axios.post(`/posts/${post.id}/comments`, data);
            getComments(post.id)
        } catch (e) {

        }
    }

    return (
        <div className="post bg-white-90 shadow-5">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`/profile/${postUser.id}`}>
                            {postUser && <img src={`https://eu.ui-avatars.com/api/?name=${postUser.name + ' ' + postUser.lastname}`} alt="postProfileImage" className="postProfileImage"/>}
                        </Link>
                        {postUser && <span className="postUsername">{postUser.name} {postUser.lastname}</span>}
                        <span className="postDate">{format(post.created_at)}</span>
                    </div>
                    {user.id === post.user_id && <div className="postTopRight">

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
                <div className="postCenter">
                    <span className="postText">{post?.body}</span>
                    {post.image && <img className="postImage" src={`http://localhost:8000/storage/${post.image}`} alt="imgpost"/>}
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="rocketButton" src={likedByCurrentUser ? likedRocketPng : rocketPng} onClick={rocketHandler} alt="rocketpng"/>
                        <span className="postRocketCounter">{numberOfLikes} people launched it into space</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText" onClick={toggleComents}>comments</span>
                    </div>
                </div>

                {visibility && (
                    <div>
                        <form className="postComments" onSubmit={submitHandler}>
                            <input placeholder="Write a comment..." className="commentInput bg-white-90" ref={desc}/>
                            <button className="shareButton" type="submit" onClick={submitHandler}>Share</button>
                        </form>

                        <div className="comments">
                        {comments.map((p) => (
                            <Comment key={p.comment.id} comment={p.comment} likes={p.likes} liked={p.liked} commentUser={p.user} getComments={getComments} />
                        ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Post;
