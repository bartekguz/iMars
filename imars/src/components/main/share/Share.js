import React from 'react';
import './Share.css';
import { PermMedia, InsertEmoticon } from "@material-ui/icons";

const Share = () => {
    return (
        <div className="share bg-white-90 shadow-5">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareImage" src="http://tachyons.io/img/logo.jpg" alt="logo"/>
                    <input placeholder="What's in your mind Bartosz?" className="shareInput"/>
                </div>
                <hr className="shareHr"/>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia className="shareIcon"/>
                            <span className="shareOptionText">Photo or Video</span>
                        </div>

                        <div className="shareOption">
                            <InsertEmoticon className="shareIcon"/>
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    );
};

export default Share;
