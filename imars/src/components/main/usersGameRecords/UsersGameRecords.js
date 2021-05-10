import React from 'react';
import './usersGameRecords.css';

const UsersGameRecords = ({ user }) => {
    return (
        <li className="gameRecordsItem">
            <div className="gameRecordsProfileImgContainer">
                <img className="gameRecordsProfileImg" src={user.profilePicture} alt="profileimg" />
            </div>
            <span className="gameRecordsUsername">{user.username}</span>
            <span className="gameRecordsCounter">{user.record}</span>
        </li>
    );
};


export default UsersGameRecords;
