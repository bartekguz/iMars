import React from 'react';
import Tilt from "react-tilt";
import logo from "../../../assets/imarslogo.png";
import './Navigation.css';

const Navigation = ({ onRouteChange, name, isSignedIn }) => {

    const signOut = () => { //potrzebne?
        onRouteChange('signout');
    }

    if (true) {
        return (
            <div className="navContainer">

                <div className="navLeft">
                    <div className="image">
                        <Tilt className="Tilt shadow-2" options={{ max: 40 }} style={{ height: 100, width: 100}}>
                            <div className="Tilt-inner">
                                <img style={{width: '100px', height: '100px'}} src={logo} alt="logo"/>
                            </div>
                        </Tilt>
                    </div>
                </div>

                <div className="navCenter">
                    <div className="searchBar">
                        <input placeholder="Search for friends or posts" className="searchInput"/>
                    </div>
                </div>

                <div className="navRight">
                    <img src="http://tachyons.io/img/logo.jpg" className="br-100 mr3 ba navImage" alt="avatar"/>
                    <p onClick={() => onRouteChange(signOut)} className="f4 link b dim white pointer ttu tracked">Sign Out</p>
                </div>

            </div>
        );
    } else {
        return (
            <div className="navContainer">

                <div className="navLeft">
                    <div className="image">
                        <Tilt className="Tilt shadow-2" options={{ max: 40 }} style={{ height: 100, width: 100}}>
                            <div className="Tilt-inner">
                                <img style={{width: '100px', height: '100px'}} src={logo} alt="logo"/>
                            </div>
                        </Tilt>
                    </div>
                </div>

                <div className="navCenter">
                    <div className="searchBar">
                        <input placeholder="Search for friends or posts" className="searchInput"/>
                    </div>
                </div>

                <div className="navRightRegister">
                    <p onClick={() => onRouteChange('signin')} className="f3 link b dim white pointer ttu tracked">Sign In</p>
                    <p onClick={() => onRouteChange('register')} className="f3 link b dim white pointer ttu tracked">Sign Up</p>
                </div>

            </div>
        )
    }
};

export default Navigation;
