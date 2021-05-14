import React, { useState, useEffect, useContext } from 'react';
import './feed.css';
import Share from "../share/Share";
import Post from "../post/Post";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";

const Feed = ({ id }) => {

    const { token } = useContext(AuthContext);
    const [posts, setPosts] = useState([]);

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
        const fetchPosts = async () => {
            const res = id
                ? await axios.get(`/users/${id}/posts`)
                : await axios.get("/posts")
            setPosts(res.data);
        };
        fetchPosts()
    }, [id])

    const HomeCenterPosts = () => {
       return (
               <div className="centerPosts">
                   <div className="centerPostsWrapper">
                       <Share />
                       {posts.map((p) => (
                           <Post key={ p.post.id } post={ p.post } likes={ p.likes }/>
                       ))}
                   </div>
               </div>
       )
    }

    const ProfileCenterPosts = () => {
        return (
                <div className="profileCenterPosts">
                    <div className="centerPostsWrapper">
                        {posts.map((p) => (
                            <Post key={ p.post.id } post={ p.post } likes={ p.likes }/>
                        ))}
                    </div>
                </div>
        )
    }

    return (
        <>
            {id ? <ProfileCenterPosts /> : <HomeCenterPosts />}
        </>
    );
};

export default Feed;
