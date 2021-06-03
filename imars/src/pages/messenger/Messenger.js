import React, {useState} from "react";
import Navigation from "../../components/main/navigation/Navigation";
import Menu from "../../components/main/menu/Menu";
import './messenger.css';
import RightBarConversations from "../../components/main/rightBarConversations/RightBarConversations";

const Messenger = () => {

    const [conversation, setConversation] = useState();


    return (
        <>
            <Navigation />
            <div className="messengerWrapper">
                <Menu />
                <div className="chat">
                    <div className="chatWrapper">
                        <p>CHAT</p>
                    </div>
                </div>
                <RightBarConversations />
            </div>
        </>
    )
};

export default Messenger;

