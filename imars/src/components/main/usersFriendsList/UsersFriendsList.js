import React from 'react';
import './usersFriendsList.css';
import {Link} from "react-router-dom";

const UsersFriendsList = ({ user }) => {
    return (
        <li className="friendsItem">
            <div className="friendsListProfileImgContainer">
                <Link to={`/profile/${user.id}`}>
                    {user && <img src={`https://eu.ui-avatars.com/api/?name=${user.name + ' ' + user.lastname}`} alt="postProfileImage" className="friendsListProfileImg"/>}
                </Link>
                <span className="friendsListOnline">
                </span>
            </div>
            <span className="friendsListUsername">{user.name + ' ' + user.lastname}</span>
        </li>
    );
};


export default UsersFriendsList;
