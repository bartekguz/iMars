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
        let isMounted = true;
        const fetchPosts = async () => {
            const res = id
                ? await axios.get(`/users/${id}/posts`)
                : await axios.get("/posts")
            if (isMounted) setPosts(res.data);
        };

        fetchPosts();
        return () => { isMounted = false };
    }, [id])

    return (
        <div className={`${id ? "profileCenterPosts" : "centerPosts"}`}>
            <div className="centerPostsWrapper">
                {(!id || id === user.id) && <Share/>}
                {posts.map((p) => (
                    <Post key={p.post.id} post={p.post} likes={p.likes} liked={p.liked} postUser={p.user} />
                ))}
            </div>
        </div>
    )
};

export default Feed;
