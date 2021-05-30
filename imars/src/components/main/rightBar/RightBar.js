import React, {useContext, useEffect, useState} from 'react';
import './rightBar.css';
import { Users } from '../../fakeData';
import UsersFriendsList from "../usersFriendsList/UsersFriendsList";
import UsersGameRecords from "../usersGameRecords/UsersGameRecords";
import axios from "axios";
import {AuthContext} from "../../../context/AuthContext";

//TODO GAME RECORDS
const RightBar = ({ id }) => {

    const { user } = useContext(AuthContext);
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        let isMounted = true;
        const getFriends = async () => {
            try {
                const friendsList = await axios.get(`/users/${user.id}/friends`);
                if (isMounted) setFriends(friendsList.data.friends);
            } catch (e) {
                console.log(e);
            }
        }
        getFriends();
        return () => { isMounted = false}
    }, [user.id])

    const HomeRightbar = () => {
        return (
            <>
                <h3 className="gameRecordsTitle">Today's game records</h3>
                <ul className="gameRecordsList">
                    {Users.map((u) => {
                        return <UsersGameRecords key={u.id} user={u} />
                    })}
                </ul>
            </>
        )
    }

    const ProfileRightbar = () => {
        return (
            <>
                <h3 className="gameRecordsTitle">Personal's game records</h3>
                <ul className="gameRecordsList">
                    {Users.map((u) => {
                        return <UsersGameRecords key={u.id} user={u} />
                    })}
                </ul>
            </>
        )
    }

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="gameRecordsContainer bg-white-90">
                    {id ? <ProfileRightbar /> : <HomeRightbar />}
                </div>

                <div className="friendsListContainer bg-white-90">
                    <h3 className="friendsListTitle">Followed list</h3>
                    <ul className="friendsList">
                        {friends.map((u) => (
                            <UsersFriendsList key={u.id} user={u} />
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};


export default RightBar;
