import React, {useEffect, useState} from 'react';
import './rightBarConversations.css';
import axios from "axios";
import UsersConversations from "../usersConversations/UsersConversations";

const RightBarConversations = () => {

    const [conversations, setConversations] = useState([]);

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
            <div className="gameRecordsContainer bg-white-90">
                <h3 className="gameRecordsTitle">Conversations</h3>
                <ul className="gameRecordsList">
                    {conversations.map((c) => {
                        return <UsersConversations key={c.conv.id} conversation={c.conv} secondUser={c.secondUser} />
                    })}
                </ul>
            </div>
        </div>
    );
};


export default RightBarConversations;
