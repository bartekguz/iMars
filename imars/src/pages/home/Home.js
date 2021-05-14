import React, {useContext} from 'react';
import Menu from "../../components/main/menu/Menu";
import Feed from "../../components/main/feed/Feed";
import RightBar from "../../components/main/rightBar/RightBar";
import Navigation from "../../components/main/navigation/Navigation";
import './home.css';
import {AuthContext} from "../../context/AuthContext";



const Home = () => {

    const { user, token } = useContext(AuthContext)

    return (
        <>
            <Navigation />
            <div className="homeContainer">
                {console.log("HOME")}
                {console.log(user)}
                {console.log(token)}
                <Menu />
                <Feed />
                <RightBar />
            </div>
        </>
    );
};

export default Home;
