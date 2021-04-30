import React from 'react';
import Menu from "../../components/main/Menu/Menu";
import Posts from "../../components/main/Posts/Posts";
import RightBars from "../../components/main/rightBars/RightBars";
import Navigation from "../../components/alwaysExists/Navigation/Navigation";
import Footer from "../../components/alwaysExists/Footer/Footer";
import './Home.css';


const Home = () => {
    return (
        <>
            <Navigation />
                <div className="homeContainer">
                    <Menu />
                    <Posts />
                    <RightBars />
                </div>
            <Footer />
        </>
    );
};

export default Home;
