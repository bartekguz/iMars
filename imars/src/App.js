import React, { useState } from 'react';
import './app.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Welcome from "./pages/welcome/Welcome";

const App = () => {
    const [routeLoginPage, setRouteLoginPage] = useState('home');
    const [isSignedIn, setSignedIn] = useState(false);
    const [background, setBackground] = useState('loginBackground App');

    return (
        <Router>
            <div className={ background }>
                {/*<navigation name={ user.name } isSignedIn={ isSignedIn } onRouteChange={onRouteChange} />*/}

                {/*<Route*/}
                {/*    path='/'*/}
                {/*    exact*/}
                {/*    render={() => (*/}
                {/*        <LoginPage onSignedInChange={onSignedInChange} loadUser={loadUser} onRouteChange={onRouteChange} routeLoginPage={routeLoginPage} />*/}
                {/*    )}*/}
                {/*/>*/}

                {/*{ isSignedIn &&*/}
                {/*<Route*/}
                {/*    path='/home'*/}
                {/*    render={() => (*/}
                {/*        <HomePage />*/}
                {/*    )}*/}
                {/*/>*/}
                {/*}*/}
                
                <Home />
                {/*<Profile />*/}

                {/*<Login />*/}
                {/*<Register />*/}
                {/*<Welcome />*/}



                {/*{(route === "home")*/}
                {/*    ? <home/>*/}
                {/*    : (route === "signin")*/}
                {/*        ? <Signin loadUser={loadUser} onRouteChange={onRouteChange}/>*/}
                {/*        : (route === "register")*/}
                {/*            ? <Signup loadUser={loadUser} onRouteChange={onRouteChange}/>*/}
                {/*            : <div className="flex mt4">*/}
                {/*                <menu />*/}
                {/*                <feed posts={posts}/>*/}
                {/*                    <div className="flex flex-column">*/}
                {/*                        <GameRecords />*/}
                {/*                        <friends />*/}
                {/*                    </div>*/}
                {/*            </div>*/}
                {/*}*/}
                {/*<footer />*/}
            </div>
        </Router>

    )
}

export default App;
