import React from 'react';
import './Share.css';

const Share = ({ post }) => {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="http://tachyons.io/img/logo.jpg" alt="logo"/>
                    <input placeholder="What's in your mind Bartosz?" className="shareInput"/>
                </div>
                <hr className="shareHr"/>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <span className="shareOptionText">Photo or Video</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Share;
