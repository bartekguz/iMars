import React, {useContext, useEffect, useState} from 'react';
import Navigation from "../../components/main/navigation/Navigation";
import Menu from "../../components/main/menu/Menu";
import RightBar from "../../components/main/rightBar/RightBar";
import './profile.css';
import Feed from "../../components/main/feed/Feed";
import axios from "axios";
import {useHistory, useParams} from "react-router-dom";
import swal from "sweetalert";
import {Add, Remove} from '@material-ui/icons';
import {AuthContext} from "../../context/AuthContext";

const Profile = () => {

    const [user, setUser] = useState({});
    const { user: currentUser } = useContext(AuthContext);
    const paramsUserId = useParams().id;
    const history = useHistory();
    const [isFriend, setIsFriend] = useState(false);

    useEffect(() => {
        let isMounted = true;

        const isFriend = async () => {
            try {
                const res = await axios.get(`/friends/${paramsUserId}`);
                if (isMounted) setIsFriend(res.data.friend)
            } catch (e) {
                console.log(e);
            }
        }
        isFriend();
        return () => { isMounted = false }
    }, [paramsUserId])

    useEffect( () => {
        let isMounted = true;

        const fetchUser = async () => {
            try {
                const res = await axios.get(`/users/${paramsUserId}`);
                if (res.data.id) {
                    isMounted && setUser(res.data)
                } else {
                    history.push('/')
                    await swal("Ops!", `User with ID ${paramsUserId} does not exist!`, "error");
                }
            } catch (e) {
                console.log(e);
            }
        }
        fetchUser();
        return () => { isMounted = false }
    }, [paramsUserId, history])

    const handleClick = async () => {
        try {
            await axios.get(`/users/${paramsUserId}/friend`)
            setIsFriend(!isFriend)
            window.location.reload()
        } catch (err) {

        }
    }

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

                            {currentUser.id !== parseInt(paramsUserId) && (
                                user.name && <button className="profileFollowButton dim" onClick={handleClick}>
                                    {isFriend ? "Unfollow" : "Follow"}
                                    {isFriend ? <Remove /> : <Add />}
                                </button>
                            )}
                        </div>


                    </div>


                    <div className="profileBottom">
                        <Feed id={paramsUserId} />
                    </div>
                </div>
                <RightBar id={paramsUserId} />
            </div>

        </>
    )
};


export default Profile;

