import React from 'react';
import Register from "../../components/start/Register/Register";
import Signin from "../../components/start/Signin/Signin";
import Home from "../../components/start/Home/Home";

const Login = ({ loadUser, onSignedInChange, onRouteChange, routeLoginPage }) => {

        if (routeLoginPage === 'signin') {
            return (
                <div>
                    <Signin loadUser={loadUser} onRouteChange={onRouteChange} onSignedInChange={onSignedInChange} />
                </div>
            )
        } else if (routeLoginPage === 'register') {
            return (
                <div>
                    <Register loadUser={loadUser} onRouteChange={onRouteChange} />
                </div>
            )
        } else {
            return (
                <div>
                    <Home />
                </div>
            )
        }
};


export default Login;

