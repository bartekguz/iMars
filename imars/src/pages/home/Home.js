import React from 'react';
import Menu from "../../components/main/Menu/Menu";
import Feed from "../../components/main/Feed/Feed";
import RightBars from "../../components/main/rightBars/RightBar";
import Navigation from "../../components/alwaysExists/Navigation/Navigation";
import Footer from "../../components/alwaysExists/Footer/Footer";
import './Home.css';


const Home = () => {
    return (
        <>
            <Navigation />
                <div className="homeContainer">
                    <Menu />
                    <Feed />
                    <RightBars />
                </div>
            {/*<Footer />*/}
        </>
    );
};

export default Home;
