import React, {useContext, useEffect, useState} from 'react';
import './post.css';
import { MoreVert } from "@material-ui/icons";
import rocketPng from '../../../assets/post/rocket.png';
import postImg from '../../../assets/tlo.jpg';
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";
import { format } from 'timeago.js';

const Post = ({ post, likes }) => {
    const [rocket, setRocket] = useState(likes);
    const [user, setUser] = useState({});

    const { token } = useContext(AuthContext);

    axios.interceptors.request.use(
        config => {
            config.headers.authorization = `Bearer ${token}`;
            return config;
        },
        error => {
            return Promise.reject(error);
        }
    );

    useEffect( () => {
        const fetchUser = async () => {
            const res = await axios.get(`/users/${post.user_id}`);
            setUser(res.data)
        }
        fetchUser();
    }, [post.user_id])

    const rocketHandler = async () => {
        const res = await axios.get(`/posts/${post.id}/like`)
        setRocket(res.data.likes)
    }

    //TODO COMMENTS
    return (
        <div className="post bg-white-90 shadow-5">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        {user && <img src={`https://eu.ui-avatars.com/api/?name=${user.name + ' ' + user.lastname}`} alt="postProfileImage" className="postProfileImage"/>}
                        {user && <span className="postUsername">{user.name} {user.lastname}</span>}
                        <span className="postDate">{format(post.created_at)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.body}</span>
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
