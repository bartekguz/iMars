import React, {useEffect, useState} from 'react';
import Navigation from "../../components/main/navigation/Navigation";
import Menu from "../../components/main/menu/Menu";
import RightBar from "../../components/main/rightBar/RightBar";
import './profile.css';
import Feed from "../../components/main/feed/Feed";
import axios from "axios";
import {useHistory, useParams} from "react-router-dom";
import swal from "sweetalert";

const Profile = () => {
    const [user, setUser] = useState({});
    const userid = useParams().id;
    const history = useHistory();

    useEffect( () => {
        const fetchUser = async () => {
            const res = await axios.get(`/users/${userid}`);
            if (res.data.id) {
                setUser(res.data)
            } else {
                history.push('/')
                await swal("Ops!", `User with ID ${userid} does not exist!`, "error");
            }
        }
        fetchUser();
    }, [userid])

    return (
        <>
            <Navigation />
            <div className="profileWrapper">
                <Menu />

                <div className="profile">
                    <div className="bg bg-white-80">
                        <div className="profileTop">
                            <img className="profileUserImg" src={`https://eu.ui-avatars.com/api/?name=${user.name + ' ' + user.lastname}`} alt="profileimg"/>
                        </div>

                        <div className="profileInfo black">
                            {user && <span className="profileInfoName">{user.name} {user.lastname}</span>}
                            {user && <span className="profileInfoDesc">{user.location}</span>}
                        </div>
                    </div>


                    <div className="profileBottom">
                        <Feed id={userid} />
                    </div>
                </div>
                <RightBar user={user} />
            </div>

        </>
    )
};


export default Profile;

