import React from 'react';
import Navigation from "../../components/main/navigation/Navigation";
import './welcome.css';
import Footer from "../../components/main/footer/Footer";
import Cookies from 'universal-cookie';

const cookies = new Cookies();


const Welcome = () => {

    return (
        <>
            {cookies.remove("user")}
            {cookies.remove("token")}

            <Navigation login />
            <div className="welcomeWrapper">
                <p className="white f1 tc mt5">Connect with friends <br/>and share your life!</p>
            </div>
            <Footer />
        </>
    )
};


export default Welcome;

