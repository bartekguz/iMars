import React from 'react';
import './usersFriendsList.css';

const UsersFriendsList = ({ user }) => {
    return (
        <li className="friendsItem">
            <div className="friendsListProfileImgContainer">
                <img className="friendsListProfileImg" src={user.profilePicture} alt="profileimg" />
                <span className="friendsListOnline">
                </span>
            </div>
            <span className="friendsListUsername">{user.username}</span>
        </li>
    );
};


export default UsersFriendsList;
