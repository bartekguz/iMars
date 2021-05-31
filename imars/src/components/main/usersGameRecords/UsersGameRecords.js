import React from 'react';
import './usersGameRecords.css';

const UsersGameRecords = ({ user, points }) => {

    return (
        <li className="gameRecordsItem">
            <div className="gameRecordsProfileImgContainer">
                <img className="gameRecordsProfileImg" src={`https://eu.ui-avatars.com/api/?name=${user.name + ' ' + user.lastname}`} alt="profileimg" />
            </div>
            <span className="gameRecordsUsername">{user.name + ' ' + user.lastname}</span>
            <span className="gameRecordsCounter">{points}</span>
        </li>
    );
};


export default UsersGameRecords;
