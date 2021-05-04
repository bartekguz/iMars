import React from 'react';
import './RightBar.css';

const rightBar = () => {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="gameRecordsContainer bg-white-90">
                    <h3 className="gameRecordsTitle">Today's game records</h3>
                    <ul className="gameRecordsList">
                        <li className="gameRecordsItem">
                            <div className="gameRecordsProfileImgContainer">
                                <img className="gameRecordsProfileImg" src="http://tachyons.io/img/logo.jpg" alt="profileimg" />
                                <span className="gameRecordsOnline"></span>
                            </div>
                            <span className="friendsListUsername">Jakub Klocek</span>
                            <span className="gameRecordsCounter">483</span>
                        </li>
                        <li className="gameRecordsItem">
                            <div className="gameRecordsProfileImgContainer">
                                <img className="gameRecordsProfileImg" src="http://tachyons.io/img/logo.jpg" alt="profileimg" />
                                <span className="gameRecordsOnline"></span>
                            </div>
                            <span className="friendsListUsername">Jakub Klocek</span>
                            <span className="gameRecordsCounter">483</span>
                        </li>
                        <li className="gameRecordsItem">
                            <div className="gameRecordsProfileImgContainer">
                                <img className="gameRecordsProfileImg" src="http://tachyons.io/img/logo.jpg" alt="profileimg" />
                                <span className="gameRecordsOnline"></span>
                            </div>
                            <span className="friendsListUsername">Jakub Klocek</span>
                            <span className="gameRecordsCounter">483</span>
                        </li>
                    </ul>
                </div>

                <div className="friendsListContainer bg-white-90">
                    <h3 className="friendsListTitle">Friends list</h3>
                    <ul className="friendsList">
                        <li className="friendsItem">
                            <div className="friendsListProfileImgContainer">
                                <img className="friendsListProfileImg" src="http://tachyons.io/img/logo.jpg" alt="profileimg" />
                                <span className="friendsListOnline">

                                </span>
                            </div>
                            <span className="friendsListUsername">Jakub Klocek</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};


export default rightBar;
