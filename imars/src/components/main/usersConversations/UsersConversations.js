import React from 'react';
import './usersConversations.css';

const UsersConversations = ({ secondUser, conversation }) => {

    return (
        <li className="friendsItem">
            <div className="friendsListProfileImgContainer">
                {secondUser && <img src={`https://eu.ui-avatars.com/api/?name=${secondUser}`} alt="postProfileImage" className="friendsListProfileImg"/>}
            </div>
            {secondUser && <span className="friendsListUsername">{secondUser}</span>}
        </li>
    );
};


export default UsersConversations;
