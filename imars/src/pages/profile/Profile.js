import React, {useContext, useEffect, useState} from 'react';
import Navigation from "../../components/main/navigation/Navigation";
import Menu from "../../components/main/menu/Menu";
import RightBar from "../../components/main/rightBar/RightBar";
import './profile.css';
import Feed from "../../components/main/feed/Feed";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";
import {useHistory, useParams} from "react-router-dom";
import swal from "sweetalert";

const Profile = () => {

    const { token } = useContext(AuthContext);
    const [user, setUser] = useState({});
    const userid = useParams().id;
    const history = useHistory();

    axios.interceptors.request.use(
        config => {
            config.headers.authorization = `Bearer ${token}`;
            return config;
        },
        error => {
            return Promise.reject(error);
        }
    );

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
                            <img className="profileUserImg" src="https://eu.ui-avatars.com/api/?name=GM" alt="profileimg"/>
                        </div>

                        <div className="profileInfo black">
                            {user && <span className="profileInfoName">{user.name} {user.lastname}</span>}
                            {user && <span className="profileInfoDesc">{user.location}</span>}
                        </div>
                    </div>


                    <div className="profileBottom">
                        <Feed id={user.id} />
                    </div>
                </div>
                <RightBar user={user} />
            </div>

        </>
    )
};


export default Profile;

