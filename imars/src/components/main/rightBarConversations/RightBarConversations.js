import React, {useEffect, useState} from 'react';
import './rightBarConversations.css';
import axios from "axios";
import UsersConversations from "../usersConversations/UsersConversations";
import UsersFriendsList from "../usersFriendsList/UsersFriendsList";

const RightBarConversations = () => {

    const [conversations, setConversations] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        let isMounted = true;
        const getFriends = async () => {
            try {
                const res = await axios.get(`/allusers`);
                if (isMounted) setUsers(res.data.users);
            } catch (e) {
                console.log(e);
            }
        }
        getFriends();
        return () => { isMounted = false}
    }, [])

    useEffect(() => {
        let isMounted = true;
        const getConversations = async () => {
            try {
                const conversationsList = await axios.get(`/conversations`);
                if (isMounted) {
                    setConversations(conversationsList.data);
                }
            } catch (e) {
                console.log(e);
            }
        }
        getConversations();
        return () => { isMounted = false}
    }, [])

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">

                <div className="gameRecordsContainer bg-white-90">
                    <h3 className="gameRecordsTitle">Conversations</h3>
                    <ul className="gameRecordsList">
                        {conversations.map((c) => {
                            return <UsersConversations key={c.conv.id} conversation={c.conv} secondUser={c.secondUser} />
                        })}
                    </ul>
                </div>

                <div className="friendsListContainer bg-white-90">
                    <h3 className="friendsListTitle">Users</h3>
                    <ul className="friendsList">
                        {users.map((u) => (
                            <UsersFriendsList key={u.id} user={u} conversation/>
                        ))}
                    </ul>
                </div>


            </div>
        </div>
    );
};


export default RightBarConversations;
