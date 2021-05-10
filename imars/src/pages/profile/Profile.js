import React from 'react';
import Navigation from "../../components/main/navigation/Navigation";
import Menu from "../../components/main/menu/Menu";
import RightBar from "../../components/main/rightBar/RightBar";
import './profile.css';
import Feed from "../../components/main/feed/Feed";


const Profile = () => {
    return (
        <>
            <Navigation />
            <div className="profileWrapper">
                <Menu />

                <div className="profile">
                    <div className="bg bg-white-80">
                        <div className="profileTop">
                            <img className="profileUserImg" src="https://eu.ui-avatars.com/api/?name=GM" alt="profileimg"/>
                        </div>

                        <div className="profileInfo black">
                            <span className="profileInfoName">Garcin Muzik</span>
                            <span className="profileInfoDesc">Krosno, Poland</span>
                        </div>
                    </div>


                    <div className="profileBottom">
                        <Feed profile />
                    </div>
                </div>
                <RightBar profile />
            </div>

        </>
    )
};


export default Profile;

