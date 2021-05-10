import React from 'react';
import Tilt from "react-tilt";
import logo from "../../../assets/imarslogo.png";
import './navigation.css';

const Navigation = ({ login, register }) => {

    const LoginNav = () => {
        return (
            <div className="navRight">
                <p className="f4 link b dim white pointer ttu tracked">Sign In</p>
                <p className="f4 link b dim white pointer ttu tracked">Sign Up</p>
            </div>
        )
    }

    const HomeNav = () => {
        return (
        <div className="navRight">
            <img src="http://tachyons.io/img/logo.jpg" className="br-100 mr3 ba navImage" alt="avatar"/>
            <p className="f4 link b dim white pointer ttu tracked">Sign Out</p>
        </div>
        )
    }

    const SearchBar = () => {
        return (
            <div className="searchBar">
                <input placeholder="Search for friends or posts" className="searchInput"/>
            </div>
        )
    }


        return (
            <div className="navContainer">

                <div className="navLeft">
                    <div className="image">
                        <Tilt className="Tilt shadow-2" options={{ max: 40 }} style={{ height: 70, width: 70}}>
                            <div className="Tilt-inner">
                                <img style={{width: '70px', height: '70px'}} src={logo} alt="logo"/>
                            </div>
                        </Tilt>
                    </div>
                </div>


                <div className="navCenter">
                    {!login && !register ? <SearchBar /> : null}
                </div>

                {login || register ? <LoginNav /> : <HomeNav />}

            </div>
        );
};

export default Navigation;
