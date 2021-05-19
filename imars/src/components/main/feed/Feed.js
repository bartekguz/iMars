import React, {useState, useEffect, useContext} from 'react';
import './feed.css';
import Share from "../share/Share";
import Post from "../post/Post";
import axios from "axios";
import {AuthContext} from "../../../context/AuthContext";

const Feed = ({ id }) => {

    const [posts, setPosts] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect( () => {
        const fetchPosts = async () => {
            const res = id
                ? await axios.get(`/users/${id}/posts`)
                : await axios.get("/posts")
            setPosts(res.data);
        };
        fetchPosts()
    }, [id])

    return (
        <div className={`${id ? "profileCenterPosts" : "centerPosts"}`}>
            <div className="centerPostsWrapper">
                {(!id || id === user.id) && <Share/>}
                {posts.map((p) => (
                    <Post key={p.post.id} post={p.post} likes={p.likes} />
                ))}
            </div>
        </div>
    )
};

export default Feed;
